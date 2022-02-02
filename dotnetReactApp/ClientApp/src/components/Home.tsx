import * as React from 'react';
import * as httpClient from '../api/httpClient';

const Home = () => {
  const [_data, setData] = React.useState<any>()
  const [_name, setName] = React.useState('')
  const [_surname, setSurname] = React.useState('')
  const [_id, setId] = React.useState(0)

  const handleGetData = async () => {
    const res = await httpClient.getData()
    setData(res.data)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let newId = _id + 1
    setId(newId)
    const response = await httpClient.postData({
      id: newId,
      name: _name,
      surname: _surname
    })
    if (response.status == 201) {
      alert('bravissimi')
    } else {
      alert('somari')
    }
  }

  return (
    <div className='d-flex flex-column'>
      <button onClick={handleGetData}>Get Data</button>
      {_data
        ?
        _data.map((obj: any) => {
          return JSON.stringify(obj)
        })
        :
        'nessuno stronzo nel db'
      }
      <form className='mt-5' onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            name="name"
            type="text"
            value={_name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Cognome:
          <input
            name="surname"
            type="text"
            value={_surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;

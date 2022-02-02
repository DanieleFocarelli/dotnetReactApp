
import axios from "axios";

export const getData = async () => {
     return await axios.get('api/TodoItems');
}

export const postData = async (payload: any) => {
    return await axios.post('api/TodoItems', payload);
}



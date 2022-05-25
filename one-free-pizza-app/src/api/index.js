import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 5000,
    headers: {
        Authorization: 'basic 535d0c6e-c81a-49d6-8de7-81f75c76a22f'
    }
  });

  export default instance;
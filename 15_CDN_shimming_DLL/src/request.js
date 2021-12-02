import axios from 'axios';

const { get } = axios;

axios.get('https://jsonplaceholder.typicode.com/todos/1')
     .then(res => console.log(res.data));


get('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(res => console.log(res.data));



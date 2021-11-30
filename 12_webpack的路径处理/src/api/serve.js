const express = require('express');

const app = express();

app.get('/users', (req, res) => {
   res.status(200).json({
      msg: 'success',
      data:{
        users: [
          {
            name: '张三',
            age: 18
          },
          {
            name: '李四',
            age: 20
          }
        ]
      }
   })
})

app.listen(2333, () => {
  console.log('server is running at http://localhost:2333');
});
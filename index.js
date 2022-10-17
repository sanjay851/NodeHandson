const http = require('http');

const server = http.createServer((req, res)=>{
      const url = req.url;
      if(url === '/'){
          console.log('http server working') 
          res.write('<h1>Nodejs Handson1</h1>');
          return res.end();
   }
});

server.listen(3000);
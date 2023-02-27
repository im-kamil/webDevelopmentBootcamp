// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is kamil who loves alwz Refath Naaz');
     res.end(`<!DOCTYPE html>
     <html lang="en">
     
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Before and After Pseudo Selectors</title>
         <link rel="preconnect" href="https://fonts.googleapis.com">
         <style>
             body {
                 margin: 0;
                 padding: 0;
                 background-color: black;
                 color: white;
                 /* background: url('https://source.unsplash.com/collection/190727/1600x900') no-repeat center center/cover;  */
             }
     
             header::before {
                 background: url('https://source.unsplash.com/collection/190727/1600x900') no-repeat center center/cover;
                 content: "";
                 position: absolute;
                 top: 0;
                 left: 0;
                 width: 100%;
                 height: 100%;
                 z-index: -1;
                 opacity: 0.8;
             }
     
             .navigation {
                 font-family: 'Ubuntu', sans-serif;
                 font-size: 20px;
                 display: flex;
             }
     
             li {
                 list-style: none;
                 padding: 20px 24px;
             }
     
             section {
                 height: 344px;
                 /* border: 2px solid orange; */
                 margin: 3px 230px;
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 justify-content: center;
             }
     
             h1 {
                 font-size: 4rem;
             }
     
             p {
                 text-align: center;
             }
     
             /* section::before{
                 content:"This is a content"
             }  ::after */
         </style>
     </head>
     
     <body>
         <header>
             <nav class="navbar">
                 <ul class="navigation">
                     <li class="item">Home</li>
                     <li class="item">About us</li>
                     <li class="item">Services</li>
                     <li class="item">Contact Us</li>
                 </ul>
             </nav>
         </header>
         <section>
             <h1>Welcome to Coding World </h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim officiis perferendis aliquid reiciendis,
                 corporis nemo modi voluptates mollitia totam impedit iure nisi ipsum quia porro autem ipsam, unde, nam dicta
                 dolore provident nulla.</p>
         </section>
         <hr>
     </body>
     
     </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
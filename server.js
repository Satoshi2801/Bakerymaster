const http = require('http');
const PORT = 3000;
const App = require('./src/App')

const app = http.createServer(App);
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});
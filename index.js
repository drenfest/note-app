const express = require('express');
const app = express();
const port = 3000;

//Body Parser
app.use(express.json());
//Bring In Routes
const notes = require('./routes/notes');
//Mount routes
app.use('/api/notes', notes);
app.get('/',(req, res)=>{
   res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

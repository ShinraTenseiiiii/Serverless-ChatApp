const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  
    const { username } = req.body;
    const responce = await axios.put('https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"PRIVATE-KEY": "08904395-bbad-4a47-8474-ebff1a61dd85"}})
    return res.status(responce.status).json(responce.data);
    
   //catch (e) {
//     return res.status(e.responce.status).json(e.responce.data);
// }
});

app.listen(3001);
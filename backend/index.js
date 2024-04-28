const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  try {
    const { username, secret } = req.body;
    const responce = await axios.put('https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"PRIVATE-KEY": process.env.PRIVATE_KEY}})
    return res.status(responce.status).json(responce.data);
  } catch (e) {
    return res.status(e.responce.status).json(e.responce.data);
}
});

app.listen(3001);
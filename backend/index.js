const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r=await axios.put(
      "https://api.chatengine.io/users/",
      {username:username,secret:username,first_name:username},
      {headers:{"private-key":"3dfe0a6a-f216-4dd3-b9a1-a2e5860c4cc8"}}
      )
      return res.status(r.status).json(r.data)
  } catch (error) {
    return res.status(error.response.status).json(error.response.data)
  }
});

app.listen(3001);
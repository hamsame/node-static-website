const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("home")
})

app.get("/about", (req, res) => {
  res.send("about")
})

app.get("/*", (req, res) => {
  res.send("404")
})

app.listen(port, () => `server is listening on port ${port}`)

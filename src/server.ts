import express, { response } from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("hi there")
})

app.post("/test-post", (request, response) => {
  return response.send('hi post')
})

app.listen(3000, () => console.log("Server running"));
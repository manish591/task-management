import express from "express";

const app = express();

app.get("/", function (req, res) {
  return res.json({
    message: "found"
  })
});

app.listen(8000, function () {
  console.log("Server is listening on port 8000");
});

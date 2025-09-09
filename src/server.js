//just an init with the right credentials

const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const pusher = new Pusher({
  appId: "2046580",
  key: "59493bc8aff2ed5d98da",
  secret: "986dd93bc986f1363918",
  cluster: "ap2",
  useTLS: true,
});
app.set("PORT", process.env.PORT || 5000);

//created an endpoint to process messages from the front-end

app.post("/message", (req, res) => {
  const payload = req.body;
  pusher.trigger("chat", "message", payload);
  res.send(payload);
});
app.listen(app.get("PORT"), () =>
  console.log("Listening at " + app.get("PORT"))
);

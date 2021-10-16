const router = require("express").Router();
const Poll = require("../models/poll.model");

router.post("/create-poll", async (req, res) => {
  let { pollName, question, options } = req.body;
  const newPoll = new Poll({
    pollName,
    question,
    options,
  });
  try {
    newPoll
      .save()
      .then(() => {
        return res.status(200).send({ msg: "New poll created", poll: newPoll });
      })
      .catch((err) => {
        return res.status(400).send("Error:" + err);
      });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

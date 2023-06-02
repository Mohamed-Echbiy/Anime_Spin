const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, "please make sure you pass the mal_id"],
    },
    vote_dumb: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("dumbester", schema);

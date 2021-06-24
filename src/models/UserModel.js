const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Users", UsersSchema);
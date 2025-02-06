const mongoose = require("mongoose");

const ContactsCollection = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"

    },
    name: {
        type: String,
        required: true, // Name is mandatory
       // trim: true, // Removes leading/trailing spaces
    },
    phone: {
        type: String,
        required: true, // Phone number is mandatory
        unique: true, // Ensures phone numbers are unique
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Regex for phone validation
    },
    email: {
        type: String,
        required: true, // Email is mandatory
        unique: true, // Ensures emails are unique
        lowercase: true, // Converts email to lowercase before saving
        match: [/.+@.+\..+/, "Please enter a valid email address"], // Regex for email validation
    },
}, {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

const Contact = mongoose.model("ContactsBackend", ContactsCollection);

module.exports = Contact;

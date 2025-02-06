const ContactsBackend = require("../models/contactSchema.js");
const asyncHandler = require("express-async-handler");

const getContact = asyncHandler ( async(req,res)=>{

    const contact = await ContactsBackend.find({user_id: req.user.id});
    res.status(200).json(contact);
});

const getAContact = asyncHandler(async (req, res) => {
    const contact = await ContactsBackend.findById(req.params.id);
    if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
});


const postContact = asyncHandler(async (req, res) => {
    const { name, phone, email } = req.body;
    const newContact = new ContactsBackend({
        name,
        phone,
        email,
        user_id : req.user.id
    });

    await newContact.save();
    res.status(201).json(newContact);
});


const putContact = asyncHandler(async (req, res) => {
    const contact = await ContactsBackend.findById(req.params.id);
    if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
    }

    contact.name = req.body.name || contact.name;
    contact.phone = req.body.phone || contact.phone;
    contact.email = req.body.email || contact.email;

    await contact.save();
    res.status(200).json(contact);
});


const deleteContact = asyncHandler(async (req, res) => {
    const contact = await ContactsBackend.findById(req.params.id);
    if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
    }

    await ContactsBackend.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted" });
});


module.exports = {getAContact , getContact , postContact, putContact , deleteContact};
const Contact = require("../models/Contact");

// GET all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET a single contact by ID
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE a new contact
const createContact = async (req, res) => {
  try {
    const { name, email, phoneNumber, address } = req.body;
    const newContact = await Contact.create({ name, email, phoneNumber, address });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "Error creating contact" });
  }
};

// UPDATE an existing contact
const updateContact = async (req, res) => {
  try {
    const { name, email, phoneNumber, address } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber, address },
      { new: true, runValidators: true }
    );

    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error updating contact" });
  }
};

// DELETE a contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getContacts, getContactById, createContact, updateContact, deleteContact };

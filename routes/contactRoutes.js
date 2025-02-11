const express = require("express");
const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../contactControllers/contactController");
const { validateContact } = require("../validation/contactValidation");

const router = express.Router();

router.get("/", getContacts);
router.get("/:id", getContactById);
router.post("/", validateContact, createContact);
router.put("/:id", validateContact, updateContact);
router.delete("/:id", deleteContact);

module.exports = router;

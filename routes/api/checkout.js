const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Transaction = require("../../models/Transaction");
const Cart = require("../../models/Cart");

// @route   POST checkout
// @desc    POST transactions
// @access  Private

router.post("/", auth, (req, res) => {
  // Checkout submission will log a trasaction
  const newTransaction = new Transaction({
    seller: req.body.transaction.seller,
    assistant: req.body.transaction.assistant,
    customer: req.body.transaction.customer,
    items: req.body.transaction.items,
    subtotal: req.body.transaction.subtotal,
    taxes: req.body.transaction.taxes,
    total: req.body.transaction.total,
    amount_received: req.body.transaction.amount_received,
    message: req.body.transaction.message,
    user: req.user.id
  });
  try {
    newTransaction.save().then(trans => res.json(trans));
    req.body.transaction.booksToUpdate.map(item => {
      Book.findById(item.id, (err, book) => {
        book.quantity = book.quantity - item.quantity;
        book.expire_at = null;
        book.save();
      });
    });
    return;
  } catch (err) {
    return res
      .status(401)
      .json({ msg: "Could not process transaction. Please check parameters." });
  }
});

module.exports = router;

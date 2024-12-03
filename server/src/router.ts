import express from "express";
import { quotes } from "./data/quotesData";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/quotes", (req, res) => {
  res.json(quotes);
});
router.get("/api/quotes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const quote = quotes.find((q) => q.id === id);

  if (!quote) {
    res.status(404).send("Quote not found");
    return;
  }
  res.json(quote);
});

/* ************************************************************************* */

export default router;

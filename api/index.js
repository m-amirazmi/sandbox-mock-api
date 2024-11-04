const express = require("express");
const cors = require("cors");
const { ocrender } = require("../mock/ocrender");
const app = express();

app.use(cors());

const list = [
  {
    id: 26,
    bankKey: "MBBEMYKL",
    bankName: "Malayan Banking Berhad",
    accountNoLength: "12",
    isEnabled: true,
  },
  {
    id: 32,
    bankKey: "PHBMMYKL",
    bankName: "Affin Bank Berhad",
    accountNoLength: "12",
    isEnabled: true,
  },
  {
    id: 3,
    bankKey: "AIBBMYKL",
    bankName: "Affin Islamic Bank Berhad",
    accountNoLength: "12",
    isEnabled: true,
  },
  {
    id: 36,
    bankKey: "RJHIMYKL",
    bankName: "Al Rajhi Banking & Investment",
    accountNoLength: "15",
    isEnabled: true,
  },
  {
    id: 27,
    bankKey: "MFBBMYKL",
    bankName: "Alliance Bank Berhad",
    accountNoLength: "15",
    isEnabled: true,
  },
  {
    id: 5,
    bankKey: "ALSRMYK1",
    bankName: "Alliance Islamic Bank Berhad",
    accountNoLength: "15",
    isEnabled: true,
  },
  {
    id: 6,
    bankKey: "ARBKMYKL",
    bankName: "Ambank Berhad",
    accountNoLength: "13,12",
    isEnabled: true,
  },
  {
    id: 4,
    bankKey: "AISLMYKL",
    bankName: "AmIslamic Bank Berhad",
    accountNoLength: "13",
    isEnabled: true,
  },
  {
    id: 7,
    bankKey: "BIMBMYKL",
    bankName: "Bank Islam Malaysia",
    accountNoLength: "14",
    isEnabled: true,
  },
  {
    id: 9,
    bankKey: "BMMBMYKL",
    bankName: "Bank Muamalat (Malaysia)",
    accountNoLength: "14,17",
    isEnabled: true,
  },
  {
    id: 11,
    bankKey: "BOFAMY2X",
    bankName: "Bank Of America",
    accountNoLength: "12",
    isEnabled: true,
  },
  {
    id: 12,
    bankKey: "BOTKMYKX",
    bankName: "Bank Of Tokyo Mitsubishi (M) B",
    accountNoLength: "6",
    isEnabled: true,
  },
];

app.post("/api/banks", (req, res) => {
  return res.json(list);
});

app.get("/api/banks", (req, res) => {
  return res.json(list);
});

app.get("/api/ocrender", (req, res) => {
  return res.json(ocrender);
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(9123, () => console.log("Server ready on port 9123."));

module.exports = app;

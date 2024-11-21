const express = require("express");
const cors = require("cors");
const ocrender = require("../mock/ocrender");
const oc = require("../mock/oc");
const app = express();

app.use(cors());
app.use(express.json());

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

app.get("/api/oc", (req, res) => {
  const { pa } = req.query;
  const ocObj = oc;

  if (pa === "true") ocObj["value"]["isEligiblePersonalAccident"] = true;
  else ocObj["value"]["isEligiblePersonalAccident"] = false;
  res.json(ocObj);
});

app.post("/api/oc", (req, res) => {
  const addon = req.body.addon;
  return res.json(addon);
});

app.get("/api/ocrender", (req, res) => {
  return res.json(ocrender);
});

app.get("/api/visible", (req, res) => {
  const query = req.query;
  if (query["plateNumber"] === "ABC123")
    return res.status(200).json({ visible: true, ncdPercentage: "25.0" });
  if (query["plateNumber"] === "DEF456")
    return res.status(200).json({ visible: true, ncdPercentage: "0" });
  else return res.status(200).json({ visible: false });
});

app.get("/api/postcode", (req, res) => {
  const { no } = req.query;
  if (no === "53300") return res.status(200).json({ status: true });
  return res.status(404).json({ status: false, message: "NotFound" });
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(9123, () => console.log("Server ready on port 9123."));

module.exports = app;

const express = require("express");
const cors = require("cors");
const ocrender = require("../mock/ocrender");
const oc = require("../mock/oc");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/life/servicing/alteration/entry", (req, res) => {
  console.log("REQUEST =>", req.body);

  return res.status(200).json({
    status: "SUCCESS",
    req: req.body,
    data: [
      {
        alterationType: 24,
        policy: {
          policyNo: "BA9000001407",
          policyCommencementDate: "2024-09-13T00:00:00.000+08:00",
          policyStatus: 1,
          paymentMode: 12,
        },
        alteration: {
          alterationEntryDate: "2024-12-04T00:00:00.000+08:00",
          alterationRequestDate: "2024-12-04T00:00:00.000+08:00",
          alterationEffectiveDate: "2024-12-04T00:00:00.000+08:00",
          alterationSettlementDate: "2024-12-04T00:00:00.000+08:00",
          alterationHQReceiveDate: "2024-12-04T00:00:00.000+08:00",
          alterationBranchRecordDate: "2024-12-04T00:00:00.000+08:00",
          alterationStatus: "1",
          alterationSourceSystem: null,
          alterationSerialNo: null,
          alterationKIVTransactionNo: 0,
          currency: "RM",
          lifeAssuredTitle: "MRS",
          lifeAssuredName: "SLV NBUW",
          companyBranchCode: "BR033",
        },
        paymentSourceDetails: {
          clientType: 3,
          accountName: "SLV NBUW",
          bankCode: "MBB",
          bankName: "MALAYAN BANKING BERHAD",
          creditCardType: "MASTER",
          creditCardSubType: "5",
          creditCardExpired: "12/2028",
          paymentSourceCode: 2,
          creditCardNo: "5421247281321072",
        },
        documentList: [
          {
            documentDesc: "Request for Change Form/Written Notification.",
            isMandatory: 1,
            documentCode: "PSOD66",
          },
        ],
        applicationNo: "BA90000014075/22012021/001",
      },
    ],
    traceId: "b754121b-cf64-4d8f-b928-dd219a96ed64",
    timestamp: "2024-12-04T12:14:04.092+08:00",
  });
});

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

app.get("/api/stp", (req, res) => {
  const { ic } = req.query;
  if (ic === "123456-11-1234") return res.status(200).json({ status: true });
  return res.status(200).json({ status: false });
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(9123, () => console.log("Server ready on port 9123."));

module.exports = app;

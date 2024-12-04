const express = require("express");
const cors = require("cors");
const ocrender = require("../mock/ocrender");
const oc = require("../mock/oc");
const app = express();

app.use(cors());
app.use(express.json());

app.post(
  "/cls-life-policy-svc/api/life/policies/policy-summary",
  (req, res) => {
    console.log(
      "REQUEST => /cls-life-policy-svc/api/life/policies/policy-summary",
      req.body
    );

    if (!req.body.appId || !req.body.client.idNo)
      return res.status(200).json({ status: "FAILED", message: "Not found" });

    if (req.body.client.idNo !== "950619143366")
      res
        .status(200)
        .json({ status: "FAILED", message: "Not found", req: req.body });

    return res.status(200).json({
      status: "SUCCESS",
      data: {
        content: [
          {
            policyNo: "BA2100001995",
            entity: "ELIB",
            checkDigit: 0,
            proposalNo: "BA2100001995",
            proposalCheckDigit: 2,
            policyStatus: 12,
            highRiskCustomer: "N",
            policyCommencementDate: "2015-10-12T00:00:00.000+08:00",
            clientName: "MAXILINK TC ELEVEN LA",
            clientType: "003",
            paymentMode: "012",
            idType: "001",
            idNo: "950619143366",
            productName: "PremierLife Income",
            agentCode: "3MB06545",
            agentName: "MALAYAN BANKING BERHAD MATANG JAYA",
            paymentSource: "001",
            channelId: "3",
            channelName: "BANCASSURANCE",
          },
          {
            policyNo: "BA2100001996",
            entity: "ELIB",
            checkDigit: 1,
            proposalNo: "BA2100001996",
            proposalCheckDigit: 4,
            policyStatus: 10,
            highRiskCustomer: "N",
            policyCommencementDate: "2015-07-13T00:00:00.000+08:00",
            clientName: "MAXILINK TC ELEVEN LA",
            clientType: "003",
            paymentMode: "012",
            idType: "001",
            idNo: "950619143366",
            productName: "PremierLife Income",
            agentCode: "3MB06710",
            agentName: "MALAYAN BANKING BERHAD DESA PARKCITY PWC",
            paymentSource: "001",
            channelId: "3",
            channelName: "BANCASSURANCE",
          },
          {
            policyNo: "CR0000054833",
            entity: "ELIB",
            checkDigit: 2,
            proposalNo: "CR0000054833",
            proposalCheckDigit: 1,
            policyStatus: 9,
            highRiskCustomer: "N",
            policyCommencementDate: "2016-05-10T00:00:00.000+08:00",
            clientName: "MAXILINK TC ELEVEN LA",
            clientType: "003",
            paymentMode: "012",
            idType: "001",
            idNo: "950619143366",
            productName: "Twins Special II",
            agentCode: "1EI00046",
            agentName: "CHAN THAT SIONG",
            paymentSource: "001",
            channelId: "1",
            channelName: "TIED AGENCY",
          },
        ],
        pageable: {
          pageNumber: 0,
          pageSize: 20,
          sort: {
            empty: true,
            unsorted: true,
            sorted: false,
          },
          offset: 0,
          unpaged: false,
          paged: true,
        },
        size: 20,
        number: 0,
        sort: {
          empty: true,
          unsorted: true,
          sorted: false,
        },
        first: true,
        last: true,
        numberOfElements: 3,
        empty: false,
      },
      traceId: "48fb17ca-1078-47f2-9f56-cfabf550663b",
      timestamp: "2024-12-04T13:23:24.775+08:00",
    });
  }
);

app.post("/cls-life-policy-svc/api/life/policies/client-detail", (req, res) => {
  console.log(
    "REQUEST => /cls-life-policy-svc/api/life/policies/client-detail",
    req.body
  );

  if (!req.body.appId || !req.body.client.idNo)
    return res.status(200).json({ status: "FAILED", message: "Not found" });

  if (req.body.client.idNo !== "950619143366")
    res
      .status(200)
      .json({ status: "FAILED", message: "Not found", req: req.body });

  return res.status(200).json({
    status: "SUCCESS",
    data: {
      content: [
        {
          clientId: "115001124",
          clientName: "MAXILINK TC ELEVEN LA",
          idType: "001",
          idNo: "950619143366",
          clientType: "003",
          birthDate: "1995-06-19",
          lifeSeqNo: "1",
          gender: "F",
          nationality: "MYS",
          maritalStatus: "002",
          race: "IND",
          religion: "HIN",
          educationLevel: "4",
          monthlyIncome: 80000.0,
          preferredLanguage: "ENG",
          address: [
            {
              addressType: "RESIDENTIAL",
              addressLine1: "WEQEWQ",
              addressLine2: "EQWEQW",
              addressLine4: "47110 SELANGOR",
              state: "SELANGOR",
              postal: "47110",
              country: "MALAYSIA",
              isPrimary: "Y",
            },
          ],
          contact: [
            {
              contactType: "MOBILE",
              countryCode: "60",
              areaCode: "12",
              contactNumber: "1234567",
              isPrimary: "Y",
            },
          ],
          email: [],
        },
        {
          clientId: "115001124",
          clientName: "MAXILINK TC ELEVEN LA",
          idType: "001",
          idNo: "950619143366",
          clientType: "003",
          birthDate: "1995-06-19",
          lifeSeqNo: "1",
          gender: "F",
          nationality: "MYS",
          maritalStatus: "002",
          race: "IND",
          religion: "HIN",
          educationLevel: "4",
          monthlyIncome: 80000.0,
          preferredLanguage: "ENG",
          address: [
            {
              addressType: "RESIDENTIAL",
              addressLine1: "WEQEWQ",
              addressLine2: "EQWEQW",
              addressLine4: "47110 SELANGOR",
              state: "SELANGOR",
              postal: "47110",
              country: "MALAYSIA",
              isPrimary: "Y",
            },
          ],
          contact: [
            {
              contactType: "MOBILE",
              countryCode: "60",
              areaCode: "12",
              contactNumber: "1234567",
              isPrimary: "Y",
            },
          ],
          email: [],
        },
        {
          clientId: "115001124",
          clientName: "MAXILINK TC ELEVEN LA",
          idType: "001",
          idNo: "950619143366",
          clientType: "003",
          birthDate: "1995-06-19",
          lifeSeqNo: "1",
          gender: "F",
          nationality: "MYS",
          maritalStatus: "002",
          race: "IND",
          religion: "HIN",
          educationLevel: "4",
          monthlyIncome: 80000.0,
          preferredLanguage: "ENG",
          address: [
            {
              addressType: "RESIDENTIAL",
              addressLine1: "WEQEWQ",
              addressLine2: "EQWEQW",
              addressLine4: "47110 SELANGOR",
              state: "SELANGOR",
              postal: "47110",
              country: "MALAYSIA",
              isPrimary: "Y",
            },
          ],
          contact: [
            {
              contactType: "MOBILE",
              countryCode: "60",
              areaCode: "12",
              contactNumber: "1234567",
              isPrimary: "Y",
            },
          ],
          email: [],
        },
      ],
      pageable: {
        pageNumber: 0,
        pageSize: 20,
        sort: {
          empty: true,
          unsorted: true,
          sorted: false,
        },
        offset: 0,
        unpaged: false,
        paged: true,
      },
      size: 20,
      number: 0,
      sort: {
        empty: true,
        unsorted: true,
        sorted: false,
      },
      first: true,
      last: true,
      numberOfElements: 3,
      empty: false,
    },
    traceId: "cf3c7dbd-d96c-459a-8dac-bd8cec8425df",
    timestamp: "2024-12-04T16:47:28.016+08:00",
  });
});

app.post(
  "/cls-life-servicing-svc/api/life/servicing/alteration/entry",
  (req, res) => {
    console.log(
      "REQUEST => /cls-life-servicing-svc/api/life/servicing/alteration/entry",
      req.body
    );

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
  }
);

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

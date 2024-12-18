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

    if (req.body.client.idNo !== "680907141968")
      res
        .status(200)
        .json({ status: "FAILED", message: "Not found", req: req.body });

    return res.status(200).json({
      status: "SUCCESS",
      data: {
        content: [
          {
            policyNo: "BA9000001368",
            entity: "ELIB",
            checkDigit: 1,
            proposalNo: "BA9000001368",
            proposalCheckDigit: 1,
            policyStatus: 1,
            highRiskCustomer: "N",
            policyCommencementDate: "2024-09-05T00:00:00.000+08:00",
            clientName: "SLV NBUW",
            clientType: "003",
            paymentMode: "012",
            idType: "001",
            idNo: "680907141968",
            productName: "Smart Life Vantage",
            agentCode: "3MB01244",
            agentName: "MALAYAN BANKING BERHAD PUCHONG JAYA BRANCH (CAC SNS)",
            paymentSource: "002",
            channelId: "3",
            channelName: "BANCASSURANCE",
          },
          {
            policyNo: "BA9000001398",
            entity: "ELIB",
            checkDigit: 3,
            proposalNo: "BA9000001398",
            proposalCheckDigit: 3,
            policyStatus: 12,
            highRiskCustomer: "N",
            policyCommencementDate: "2024-09-11T00:00:00.000+08:00",
            clientName: "SLV NBUW",
            clientType: "003",
            paymentMode: "012",
            idType: "001",
            idNo: "680907141968",
            productName: "Smart Life Vantage",
            agentCode: "3MB01244",
            agentName: "MALAYAN BANKING BERHAD PUCHONG JAYA BRANCH (CAC SNS)",
            paymentSource: "002",
            channelId: "3",
            channelName: "BANCASSURANCE",
          },
          {
            policyNo: "BA9000001407",
            entity: "ELIB",
            checkDigit: 5,
            proposalNo: "BA9000001407",
            proposalCheckDigit: 5,
            policyStatus: 1,
            highRiskCustomer: "N",
            policyCommencementDate: "2024-09-13T00:00:00.000+08:00",
            clientName: "SLV NBUW",
            clientType: "003",
            paymentMode: "012",
            idType: "001",
            idNo: "680907141968",
            productName: "Smart Life Vantage",
            agentCode: "3MB01244",
            agentName: "MALAYAN BANKING BERHAD PUCHONG JAYA BRANCH (CAC SNS)",
            paymentSource: "002",
            channelId: "3",
            channelName: "BANCASSURANCE",
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
      traceId: "07f97d01-05ed-4563-ba43-928c1053c1e8",
      timestamp: "2024-12-05T10:28:23.600+08:00",
    });
  }
);

app.post("/cls-life-policy-svc/api/life/policies/client-detail", (req, res) => {
  console.log(
    "REQUEST => /cls-life-policy-svc/api/life/policies/client-detail",
    req.body
  );

  if (!req.body.appId)
    return res.status(200).json({ status: "FAILED", message: "Not found" });

  if (
    (req.body.client &&
      req.body.client.idNo &&
      req.body.client.idNo === "680907141968") ||
    (req.body.policy &&
      req.body.policy.policyNo &&
      req.body.policy.policyNo === "BA9000001407")
  )
    return res.status(200).json({
      status: "SUCCESS",
      data: {
        content: [
          {
            clientId: "115838689",
            clientName: "SLV NBUW",
            idType: "001",
            idNo: "680907141968",
            clientType: "003",
            birthDate: "1968-09-07",
            lifeSeqNo: "1",
            gender: "F",
            nationality: "MYS",
            maritalStatus: "002",
            race: "MAL",
            religion: "ISL",
            monthlyIncome: 15000,
            preferredLanguage: "MSA",
            address: [
              {
                addressType: "RESIDENTIAL",
                addressLine1: "13",
                addressLine2: "BANGSAR",
                addressLine3: "  KUALA LUMPUR",
                addressLine4: "54400 WILAYAH PERSEKUTUAN (WP)",
                city: "KUALA LUMPUR",
                state: "WILAYAH PERSEKUTUAN (WP)",
                postal: "54400",
                country: "MALAYSIA",
                isPrimary: "Y",
              },
            ],
            contact: [
              {
                contactType: "MOBILE",
                countryCode: "60",
                areaCode: "012",
                contactNumber: "3456789",
                isPrimary: "Y",
              },
            ],
            email: [
              {
                emailAddress: "etiqa.banca004@gmail.com",
                isPrimary: "Y",
              },
            ],
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
        numberOfElements: 1,
        empty: false,
      },
      traceId: "1cb70863-950a-492c-a39c-821bf6b67482",
      timestamp: "2024-12-05T10:53:03.911+08:00",
    });

  res
    .status(200)
    .json({ status: "FAILED", message: "Not found", req: req.body });
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

app.patch(
  "/cls-life-servicing-svc/api/life/servicing/alteration/creation",
  (req, res) => {
    console.log(
      "REQUEST => /cls-life-servicing-svc/api/life/servicing/alteration/creation",
      req.body
    );

    return res.status(200).json({
      status: "SUCCESS",
      data: [
        { alterationStatus: 4, alterationNo: "NF000010229735" },
        { alterationStatus: 4, alterationNo: "NF000010229736" },
        { alterationStatus: 4, alterationNo: "NF000010229737" },
      ],
      traceId: "9c8d27aa-8bd8-4a7a-84c4-95cc827f1fd9",
      timestamp: "2024-12-17T16:50:46.573+08:00",
    });
  }
);

app.post("/cls-life-policy-svc/api/life/policies/policy-detail", (req, res) => {
  console.log(
    "REQUEST => /cls-life-policy-svc/api/life/policies/policy-detail",
    req.body
  );

  if (req.body.policy.policyNo === "BA90000013681")
    return res.status(200).json({
      status: "SUCCESS",
      data: {
        content: [
          {
            policyNo: "BA9000001368",
            checkDigit: 1,
            policyCommencementDate: "2024-09-05T00:00:00.000+08:00",
            policyIssueDate: "2024-09-05T00:00:00.000+08:00",
            policyMaturityDate: "2048-09-04T00:00:00.000+08:00",
            policyExpiryDate: "2048-09-04T00:00:00.000+08:00",
            policyRiskCommencementDate: "2024-09-05T00:00:00.000+08:00",
            policyStatus: 1,
            policyStatusChangeDate: "2024-09-05T00:00:00.000+08:00",
            clientName: "SLV NBUW",
            totalSumAssured: 50000.0,
            term: 24,
            paymentMode: "null",
            paymentSource: "2",
            currency: "RM",
            totalPremiumAmount: 203.73,
            productName: "Smart Life Vantage",
            entity: "ELIB",
            isFamilyPlan: "N",
            isMasterPolicy: "N",
            agentCode: "3MB01244",
          },
        ],
        pageable: {
          pageNumber: 0,
          pageSize: 20,
          sort: { empty: true, unsorted: true, sorted: false },
          offset: 0,
          unpaged: false,
          paged: true,
        },
        size: 20,
        number: 0,
        sort: { empty: true, unsorted: true, sorted: false },
        first: true,
        last: true,
        numberOfElements: 1,
        empty: false,
      },
      traceId: "5621e293-b717-4d55-b1fc-d1f6823d5bd6",
      timestamp: "2024-12-18T10:57:22.267+08:00",
    });
  if (req.body.policy.policyNo === "BA90000013681")
    return res.status(200).json({
      status: "SUCCESS",
      data: {
        content: [
          {
            policyNo: "BA9000001368",
            checkDigit: 1,
            policyCommencementDate: "2024-09-05T00:00:00.000+08:00",
            policyIssueDate: "2024-09-05T00:00:00.000+08:00",
            policyMaturityDate: "2048-09-04T00:00:00.000+08:00",
            policyExpiryDate: "2048-09-04T00:00:00.000+08:00",
            policyRiskCommencementDate: "2024-09-05T00:00:00.000+08:00",
            policyStatus: 1,
            policyStatusChangeDate: "2024-09-05T00:00:00.000+08:00",
            clientName: "SLV NBUW",
            totalSumAssured: 50000.0,
            term: 24,
            paymentMode: "null",
            paymentSource: "2",
            currency: "RM",
            totalPremiumAmount: 203.73,
            productName: "Smart Life Vantage",
            entity: "ELIB",
            isFamilyPlan: "N",
            isMasterPolicy: "N",
            agentCode: "3MB01244",
          },
        ],
        pageable: {
          pageNumber: 0,
          pageSize: 20,
          sort: { empty: true, unsorted: true, sorted: false },
          offset: 0,
          unpaged: false,
          paged: true,
        },
        size: 20,
        number: 0,
        sort: { empty: true, unsorted: true, sorted: false },
        first: true,
        last: true,
        numberOfElements: 1,
        empty: false,
      },
      traceId: "5621e293-b717-4d55-b1fc-d1f6823d5bd6",
      timestamp: "2024-12-18T10:57:22.267+08:00",
    });
  if (req.body.policy.policyNo === "BA90000013983")
    return res.status(200).json({
      status: "SUCCESS",
      data: {
        content: [
          {
            policyNo: "BA9000001398",
            checkDigit: 3,
            policyCommencementDate: "2024-09-11T00:00:00.000+08:00",
            policyIssueDate: "2024-09-11T00:00:00.000+08:00",
            policyMaturityDate: "2047-09-10T00:00:00.000+08:00",
            policyExpiryDate: "2047-09-10T00:00:00.000+08:00",
            policyRiskCommencementDate: "2024-09-11T00:00:00.000+08:00",
            policyStatus: 12,
            policyStatusChangeDate: "2024-09-12T00:00:00.000+08:00",
            clientName: "SLV NBUW",
            totalSumAssured: 70000.0,
            term: 23,
            paymentMode: "null",
            paymentSource: "2",
            currency: "RM",
            totalPremiumAmount: 294.79,
            productName: "Smart Life Vantage",
            entity: "ELIB",
            isFamilyPlan: "N",
            isMasterPolicy: "N",
            agentCode: "3MB01244",
          },
        ],
        pageable: {
          pageNumber: 0,
          pageSize: 20,
          sort: { empty: true, unsorted: true, sorted: false },
          offset: 0,
          unpaged: false,
          paged: true,
        },
        size: 20,
        number: 0,
        sort: { empty: true, unsorted: true, sorted: false },
        first: true,
        last: true,
        numberOfElements: 1,
        empty: false,
      },
      traceId: "e4ebcf70-822b-4c64-97bc-cd8eaf35dc05",
      timestamp: "2024-12-18T10:59:34.218+08:00",
    });
  if (req.body.policy.policyNo === "BA90000014075")
    return res.status(200).json({
      status: "SUCCESS",
      data: {
        content: [
          {
            policyNo: "BA9000001407",
            checkDigit: 5,
            policyCommencementDate: "2024-09-13T00:00:00.000+08:00",
            policyIssueDate: "2024-09-13T00:00:00.000+08:00",
            policyMaturityDate: "2047-09-12T00:00:00.000+08:00",
            policyExpiryDate: "2047-09-12T00:00:00.000+08:00",
            policyRiskCommencementDate: "2024-09-13T00:00:00.000+08:00",
            policyStatus: 1,
            policyStatusChangeDate: "2024-09-13T00:00:00.000+08:00",
            clientName: "SLV NBUW",
            totalSumAssured: 50000.0,
            term: 23,
            paymentMode: "null",
            paymentSource: "2",
            currency: "RM",
            totalPremiumAmount: 215.39,
            productName: "Smart Life Vantage",
            entity: "ELIB",
            isFamilyPlan: "N",
            isMasterPolicy: "N",
            agentCode: "3MB01244",
          },
        ],
        pageable: {
          pageNumber: 0,
          pageSize: 20,
          sort: { empty: true, sorted: false, unsorted: true },
          offset: 0,
          paged: true,
          unpaged: false,
        },
        size: 20,
        number: 0,
        sort: { empty: true, sorted: false, unsorted: true },
        numberOfElements: 1,
        first: true,
        last: true,
        empty: false,
      },
      traceId: "a890ed49-4b07-4ebd-a347-86f8707a65e4",
      timestamp: "2024-12-18T11:00:51.330+08:00",
    });
  else return res.status(200).json({ message: "Not Found" });
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

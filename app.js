var express = require("express");
var app = express();
var companyController = require("./controllers/companyController");

const PORT = process.env.PORT ? process.env.PORT : 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/companiesSortedBySize", async (req, res) => {
  try {
    let companiesListOrderedBySize = await companyController.getCompaniesListOrderedBySize();

    res.send(companiesListOrderedBySize);
  } catch (error) {
    console.log(error);
    res.status(500).send({ Error: error.message });
  }
});

app.get("/companiesSortedByFound", async (req, res) => {
  try {
    companiesListOrderedByFound = await companyController.getCompaniesListOrderedByFound();

    res.send(companiesListOrderedByFound);
  } catch (error) {
    console.log(error);
    res.status(500).send({ Error: error.message });
  }
});

app.get("/quantityOfCompaniesGroupedByIndustry", async (req, res) => {
  try {
    quantityOfCompaniesGroupedByIndustry = await companyController.getQuantityOfCompaniesGroupedByIndustry();

    res.send(quantityOfCompaniesGroupedByIndustry);
  } catch (error) {
    console.log(error);
    res.status(500).send({ Error: error.message });
  }
});

app.get("/quantityOfCompaniesGroupedBySize", async (req, res) => {
  try {
    quantityOfCompaniesGroupedBySize = await companyController.getQuantityOfCompaniesGroupedBySize();

    res.send(quantityOfCompaniesGroupedBySize);
  } catch (error) {
    console.log(error);
    res.status(500).send({ Error: error.message });
  }
});

app.get("/quantityOfCompaniesGroupedByFounded", async (req, res) => {
  try {
    quantityOfCompaniesGroupedByFounded = await companyController.getQuantityOfCompaniesGroupedByFounded();

    res.send(quantityOfCompaniesGroupedByFounded);
  } catch (error) {
    console.log(error);
    res.status(500).send({ Error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("app listening on port " + PORT);
});

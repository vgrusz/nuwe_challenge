var companyModel = require("../models/companyModel.js");

module.exports = {
  getCompaniesListOrderedBySize: async () => {
    try {
      var companiesListOrderedBySize = await companyModel.getCompaniesListOrderedBySize();

      companiesListOrderedBySize.sort((a, b) => {
        let aSizeOrder = a.size.split("-")[0].padStart(6, "0");
        let bSizeOrder = b.size.split("-")[0].padStart(6, "0");

        if (aSizeOrder > bSizeOrder) {
          return 1;
        } else if (aSizeOrder < bSizeOrder) {
          return -1;
        }
        // a must be equal to b
        else return 0;
      });

      return companiesListOrderedBySize;
    } catch (error) {
      console.log(error);
    }
  },

  getCompaniesListOrderedByFound: async () => {
    try {
      let companiesListOrderedByFound = await companyModel.getCompaniesListOrderedByFound();
      return companiesListOrderedByFound;
    } catch (error) {
      console.log(error);
    }
  },

  getCompaniesListGroupedByIndustry: async () => {
    try {
      let companiesListGroupedByIndustry = await companyModel.getCompaniesListGroupedByIndustry();
      return companiesListGroupedByIndustry;
    } catch (error) {
      console.log(error);
    }
  },

  getCompaniesListGroupedBySize: async () => {
    try {
      let companiesListGroupedBySize = await companyModel.getCompaniesListGroupedBySize();
      return companiesListGroupedBySize;
    } catch (error) {
      console.log(error);
    }
  },

  getCompaniesListGroupedByFounded: async () => {
    try {
      let companiesListGroupedByFounded = await companyModel.getCompaniesListGroupedByFounded();
      return companiesListGroupedByFounded;
    } catch (error) {
      console.log(error);
    }
  },
};

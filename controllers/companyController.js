var companyService = require("../services/companyService");

//Due to lack of bussinnes logic this file is only future-proof at this stage.
//It only passes execution straigth to services

module.exports = {
  getCompaniesListOrderedBySize: async () => {
    try {
      let companiesListOrderedBySize = await companyService.getCompaniesListOrderedBySize();
      return companiesListOrderedBySize;
    } catch (error) {
      console.log(error);
    }
  },
  getCompaniesListOrderedByFound: async () => {
    try {
      let companiesListOrderedByFound = await companyService.getCompaniesListOrderedByFound();
      return companiesListOrderedByFound;
    } catch (error) {
      console.log(error);
    }
  },

  getQuantityOfCompaniesGroupedByIndustry: async () => {
    try {
      let companiesListGroupedByIndustry = await companyService.getCompaniesListGroupedByIndustry();
      return companiesListGroupedByIndustry;
    } catch (error) {
      console.log(error);
    }
  },
  getQuantityOfCompaniesGroupedBySize: async () => {
    try {
      let companiesListGroupedBySize = await companyService.getCompaniesListGroupedBySize();
      return companiesListGroupedBySize;
    } catch (error) {
      console.log(error);
    }
  },
  getQuantityOfCompaniesGroupedByFounded: async () => {
    try {
      let companiesListGroupedByFounded = await companyService.getCompaniesListGroupedByFounded();
      return companiesListGroupedByFounded;
    } catch (error) {
      console.log(error);
    }
  },
};

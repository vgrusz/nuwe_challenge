var companyModel = require("../models/companyModel.js");

module.exports = {
  getCompaniesListOrderedBySize: async () => {
    try {
      let companiesListOrderedBySize = await companyModel.getCompaniesListOrderedBySize();
      /*Due to the nature of "size" field (range of numbers in text mode,
      no fixed length and a "10000+" value for  more than 10000 employees) and the lack of
      "split" function in calculated rows in SQL, sorting of data by "size" field has to 
      be done here */

      companiesListOrderedBySize.sort((a, b) => {
        let aSizeOrder = a.size.split("-")[0].padStart(6, "0");
        let bSizeOrder = b.size.split("-")[0].padStart(6, "0");

        //gets the first number of the range of employees
        //Case 10000+ will not be splitted due to lack of "-"
        //The results are start-padded to length of 6 with zeroes in order to be compared to "10000+"

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

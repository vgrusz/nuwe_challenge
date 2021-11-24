var conection = require("../db");

module.exports = {
  getCompaniesListOrderedBySize: async () => {
    try {
      var result = await conection.query("SELECT * FROM companies");
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  getCompaniesListOrderedByFound: async () => {
    try {
      var result = await conection.query("SELECT * FROM companies ORDER BY if(founded = 'None','0000',founded) ");
      /*the query uses an IF function in a calculated SQL row to replace "None" with "0000" 
      in order to get records with "None" value of year of fundation at first places, and 
      after those records the remaining records sorted by year. */

      return result;
    } catch (error) {
      console.log(error);
    }
  },

  getCompaniesListGroupedByIndustry: async () => {
    try {
      var result = await conection.query("SELECT industry,COUNT(*) AS quantity FROM companies GROUP BY industry");
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  getCompaniesListGroupedBySize: async () => {
    try {
      var result = await conection.query("SELECT size,COUNT(*) AS quantity FROM companies GROUP BY size");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  getCompaniesListGroupedByFounded: async () => {
    try {
      var result = await conection.query("SELECT founded,COUNT(*) AS quantity FROM companies GROUP BY founded");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};

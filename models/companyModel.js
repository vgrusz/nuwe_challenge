var conection = require("../db");

module.exports = {
  getCompaniesListOrderedBySize: async () => {
    try {
      var result = await conection.query("select * from companies");
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  getCompaniesListOrderedByFound: async () => {
    try {
      var result = await conection.query("SELECT * FROM companies ORDER BY if(founded = 'None','0000',founded) ");
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

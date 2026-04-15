const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { error } = require("console");
const homeNames = [];

module.exports = class Home {
  /**
   * Represents a home listing.
   * @param {string} name - The name of the home.
   * @param {string} city - The city where the home is located.
   * @param {number} perNightPrice - The price per night for the home.
   * @param {number} rating - The rating of the home (e.g., 1-5 stars).
   */
  constructor(name, city, perNightPrice, rating) {
    this.name = name;
    this.city = city;
    this.perNightPrice = perNightPrice;
    this.rating = rating;
  }

  save() {
    Home.fatchAll((homeNames) => {
      homeNames.push(this);
      const filePath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(filePath, JSON.stringify(homeNames), (error) => {
        console.log(".");
      });
    });
  }

  static fatchAll(callback) {
    const filePath = path.join(rootDir, "data", "homes.json");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }
};

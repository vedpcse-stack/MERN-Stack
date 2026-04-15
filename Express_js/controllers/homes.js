const Home = require("../models/home");

exports.getHome = (req, res) => {
  Home.fatchAll((homeNames) => {
    res.render("store/home_list", {
      registeredHome: homeNames,
      pageTitle: "home page",
    });
  });
};

exports.getAddHome = (req, res) => {
  res.render("host/addHome", { pageTitle: "add home" });
};

exports.postAddHome = (req, res) => {
  const homeName = req.body.homeName;
  const city = req.body.city;
  const perNightPrice = parseFloat(req.body.perNightPrice); // Convert to number
  const rating = parseInt(req.body.rating, 10); // Convert to integer
  const home = new Home(homeName, city, perNightPrice, rating);
  home.save();
  res.render("host/homeAdded", { pageTitle: "home added" });
};

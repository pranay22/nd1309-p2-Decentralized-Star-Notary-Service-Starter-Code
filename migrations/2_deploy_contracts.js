const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "Pranay Star Token" , "PST", 18, 1000);
};

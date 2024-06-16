const sequelize = require("../Config/connection.js");
const gameChoiceData = require("./gameChoiceData.json");
const {GameChoice} = require("../Models/index.js")

function seedDatabase() {
    
    console.log(sequelize.models)
    
    GameChoice.bulkCreate(gameChoiceData, {
        // individualHooks:true
    });
}
sequelize.sync({ force:true });
seedDatabase();
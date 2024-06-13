const sequelize = require("../Config/connection");
const gameData = require("./gamedata");

function seedDatabase() {
    sequelize.sync({ force:true });

    // bulk create items in the game model
}

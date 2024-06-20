function formInfo(gameName, gameScore){
    this.gameName = gameName;
    this.gameScore = gameScore;
}
console.log("test")
var submit = document.getElementById("submit");
submit.addEventListener("click", onSubmit)

console.log(submit)

function onSubmit(){
    console.log("form submit hit");
    var formInfoData = new formInfo()
    formInfoData.gameName = document.getElementById("gameName").value;
    formInfoData.gameScore = document.getElementById("gameScore").value;

    console.log(formInfoData.gameName)
    console.log(formInfoData.gameScore)
try{
    fetch("../api/gamedata/submitgame",{
        method:'POST',
        body: JSON.stringify(formInfoData),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((response)=>{console.log(response)
    }).catch((error)=>{console.log(error)})
}
catch(error){
    console.log(error)
}
fetch("localhost:3001/api/gamedata/getGameData",{mode:"same-origin"})
.then(function(response){
  console.log(response);
  return response.json();
})
    // var request = require('request');
    // request({uri:"/api/gamedata/submitgame",
    //     body: JSON.stringify(formInfoData),
    //     headers:{
    //     'Content-type': 'application/json; charset=UTF-8'
    //     }
    // },function (error, response) {
    //     console.log(error,response.body);
    //     return;})
    };

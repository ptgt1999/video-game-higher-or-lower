function formInfo(gameName, gameScore){
    this.gameName = gameName;
    this.gameScore = gameScore;
}

var submit = document.getElementById("submit");
submit.addEventListener("click", onSubmit)

function onSubmit(){
    console.log("form submit hit");
    var formInfoData = new formInfo()
    formInfoData.gameName = document.getElementById("gameName").value;
    formInfoData.gameScore = document.getElementById("gameScore").value;

    fetch("/api/gamedata/",{
        method:"POST",
        body: JSON.stringify(formInfoData),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
}

function search() {
    var snd=new Audio("pokedex.mp3")
    snd.play();
    let pokeName=document.getElementById("poke").value;
    //Go to https://pokeapi.co/ for more stuff
    document.getElementById("moveList").innerHTML=null;
    document.getElementById("sprite").setAttribute("src",null);
    let request = new XMLHttpRequest();
    let url = "https://pokeapi.co/api/v2/pokemon/"+pokeName+"/";
    let sURL
    // let url="https://api.adviceslip.com/advice";
    //link to api you're going to use for rolling dice http://roll.diceapi.com/json/d6/d6/d6
    request.open("GET", url);

    request.onload = function() {
        let data = JSON.parse(this.response);
        console.log(data);
        let image = document.getElementById("sprite");
        if (request.status >= 200 && request.status < 400) {
            //This gets the full list of moves
            let moves = data["moves"];
            let form = data["forms"];
            sURL = form[0].url
            console.log(sURL);

            let spriteRequest = new XMLHttpRequest();
            spriteRequest.open("GET", sURL);
            
            spriteRequest.onload = function() {
                console.log("running");
                let spriteData = JSON.parse(this.response);
                console.log(spriteData);
                image.setAttribute("src", spriteData["sprites"].front_default);
                spriteRequest.DONE;
            }
            spriteRequest.send();

            let row = document.createElement("div");
            row.classList.add("row");
            for (let i = 0; i < moves.length; i++) {
                let pow = document.createElement("p");
                let PP = document.createElement("p");
                let eff = document.createElement("p");
                let acc=document.createElement("p");
                let name = moves[i].move.name;
                let moveURL = moves[i].move.url;
                let moveRequest = new XMLHttpRequest();
                moveRequest.open("GET", moveURL);
                moveRequest.onload = function() {
                    let moveData = JSON.parse(this.response);
                    let pp = moveData["pp"];
                    let power = moveData["power"];
                    let effect = moveData["effect_entries"][0].effect;
                    effect = effect.substring(0, effect.indexOf("."));
                    if (power == null) {
                        power = 0;
                    }
                    let accuracy=moveData["accuracy"];
                    console.log("The power is " + power);
                    pow.innerHTML = "Power: " + power;
                    PP.innerHTML = "PP: " + pp;
                    eff.innerHTML = "Effect: " + effect;
                    acc.innerHTML="Accuracy: "+accuracy;
                    

                    moveRequest.DONE;
                }
                moveRequest.send();
                //Create row element
                //creates movedetails and col-lg-4
                let moveDetails = document.createElement("div");
                moveDetails.classList.add("move");
                moveDetails.classList.add("highlight");
                moveDetails.classList.add("col-lg-4");
                //Adding name with h4 element
                let paraName = document.createElement("h4");
                paraName.classList.add("text-center");
                paraName.innerHTML = name;

                //Plave to append everything and add it to move details
                moveDetails.appendChild(paraName);
                moveDetails.appendChild(pow);
                moveDetails.appendChild(acc);
                moveDetails.appendChild(PP);
                moveDetails.appendChild(eff);
                //Creates a new row every time i is divisible by 3
                if (i > 1) {
                    if (i % 3 == 0) {
                        let newRow = row.cloneNode();
                        row = null;
                        row = newRow;
                    }
                }
                row.appendChild(moveDetails);
                document.getElementById("moveList").appendChild(row);

            }


        }

    };
    request.send();
}

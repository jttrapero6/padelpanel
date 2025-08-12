var setGame = 1;
var tiebreak = false;

document.addEventListener("keydown", function(event) {
    if (!tiebreak) {
        if (event.key === "a" || event.key === "A") {
            var pointsTeamA = document.getElementById('points-team-a');
            var valuePointsA = pointsTeamA.innerHTML;
            var pointsTeamB = document.getElementById('points-team-b');
            var valuePointsB = pointsTeamB.innerHTML;

            if (valuePointsA == "0") {
                pointsTeamA.innerHTML = "15";
            } else if (valuePointsA == "15") {
                pointsTeamA.innerHTML = "30";
            } else if (valuePointsA == "30") {
                pointsTeamA.innerHTML = "40";
            } else if (valuePointsA == "40") {
                if (valuePointsB == "40") {
                    pointsTeamA.innerHTML = "AD"
                    pointsTeamB.innerHTML = ""
                } else {
                    pointsTeamA.innerHTML = "0"
                    pointsTeamB.innerHTML = "0"
                    var valueQuantityA = parseInt(document.getElementById("cell-a-set-"+setGame).innerHTML)
                    valueQuantityA++;
                    addPointsSet("a", valueQuantityA, setGame)
                }
            } else if (valuePointsA == "AD") {
                pointsTeamA.innerHTML = "0"
                pointsTeamB.innerHTML = "0"
                var valueQuantityA = parseInt(document.getElementById("cell-a-set-"+setGame).innerHTML)
                valueQuantityA++;
                addPointsSet("a", valueQuantityA, setGame)
            } else if (valuePointsA == "" && valuePointsB == "AD") {
                pointsTeamA.innerHTML = "40"
                pointsTeamB.innerHTML = "40"
            }
        }

        if (event.key === "l" || event.key === "L") {
            var pointsTeamA = document.getElementById('points-team-a');
            var valuePointsA = pointsTeamA.innerHTML;
            var pointsTeamB = document.getElementById('points-team-b');
            var valuePointsB = pointsTeamB.innerHTML;

            if (valuePointsB == "0") {
                pointsTeamB.innerHTML = "15";
            } else if (valuePointsB == "15") {
                pointsTeamB.innerHTML = "30";
            } else if (valuePointsB == "30") {
                pointsTeamB.innerHTML = "40";
            } else if (valuePointsB == "40") {
                if (valuePointsA == "40") {
                    pointsTeamB.innerHTML = "AD"
                    pointsTeamA.innerHTML = ""
                } else {
                    pointsTeamB.innerHTML = "0"
                    pointsTeamA.innerHTML = "0"
                    var valueQuantityB = parseInt(document.getElementById("cell-b-set-"+setGame).innerHTML)
                    valueQuantityB++;
                    addPointsSet("b", valueQuantityB, setGame)
                }
            } else if (valuePointsB == "AD") {
                pointsTeamB.innerHTML = "0"
                pointsTeamA.innerHTML = "0"
                var valueQuantityB = parseInt(document.getElementById("cell-b-set-"+setGame).innerHTML)
                valueQuantityB++;
                addPointsSet("b", valueQuantityB, setGame)
            } else if (valuePointsB == "" && valuePointsA == "AD") {
                pointsTeamB.innerHTML = "40"
                pointsTeamA.innerHTML = "40"
            }
        }
    } else {
        if (event.key === "a" || event.key === "A") {
            var pointsTeamA = document.getElementById('points-team-a');
            var valuePointsA = parseInt(pointsTeamA.innerHTML);
            var pointsTeamB = document.getElementById('points-team-b');
            var valuePointsB = parseInt(pointsTeamB.innerHTML);
            
            if (valuePointsA == 5) {
                if (valuePointsB < 5) {
                    document.getElementById("cell-a-set-"+setGame).innerHTML = "7";
                    document.getElementById("cell-b-set-"+setGame).innerHTML = "6";
                    document.getElementById("cell-a-set-"+setGame).classList.add("set-end");
                    setGame++;
                    tiebreak = false;
                    document.getElementById("cell-a-set-"+setGame).innerHTML = "0";
                    document.getElementById("cell-b-set-"+setGame).innerHTML = "0";
                    document.getElementById('points-team-a').innerHTML = "0"
                    document.getElementById('points-team-b').innerHTML = "0"
                } else {
                    valuePointsA++;
                    document.getElementById('points-team-a').innerHTML = valuePointsA;
                }
            } else if (valuePointsA > 5) { 
                if ((valuePointsA - valuePointsB) > 0) {
                    document.getElementById("cell-a-set-"+setGame).innerHTML = "7";
                    document.getElementById("cell-b-set-"+setGame).innerHTML = "6";
                    document.getElementById("cell-a-set-"+setGame).classList.add("set-end");
                    setGame++;
                    tiebreak = false;
                    document.getElementById("cell-a-set-"+setGame).innerHTML = "0";
                    document.getElementById("cell-b-set-"+setGame).innerHTML = "0";
                    document.getElementById('points-team-a').innerHTML = "0"
                    document.getElementById('points-team-b').innerHTML = "0"
                } else {
                    valuePointsA++;
                    document.getElementById('points-team-a').innerHTML = valuePointsA;
                }
            } else {
                valuePointsA++;
                document.getElementById('points-team-a').innerHTML = valuePointsA;
            }
        }
        if (event.key === "l" || event.key === "L") {
            var pointsTeamA = document.getElementById('points-team-a');
            var valuePointsA = parseInt(pointsTeamA.innerHTML);
            var pointsTeamB = document.getElementById('points-team-b');
            var valuePointsB = parseInt(pointsTeamB.innerHTML);

            if (valuePointsB == 5) {
                if (valuePointsA < 5) {
                    document.getElementById("cell-b-set-"+setGame).innerHTML = "7";
                    document.getElementById("cell-a-set-"+setGame).innerHTML = "6";
                    document.getElementById("cell-b-set-"+setGame).classList.add("set-end");
                    setGame++;
                    tiebreak = false;
                    document.getElementById("cell-a-set-"+setGame).innerHTML = "0";
                    document.getElementById("cell-b-set-"+setGame).innerHTML = "0";
                    document.getElementById('points-team-a').innerHTML = "0"
                    document.getElementById('points-team-b').innerHTML = "0"
                } else {
                    valuePointsB++;
                    document.getElementById('points-team-b').innerHTML = valuePointsB;
                }
            } else if (valuePointsB > 5) {
                if ((valuePointsB - valuePointsA) > 0) {
                    document.getElementById("cell-b-set-"+setGame).innerHTML = "7";
                    document.getElementById("cell-a-set-"+setGame).innerHTML = "6";
                    document.getElementById("cell-b-set-"+setGame).classList.add("set-end");
                    setGame++;
                    tiebreak = false;
                    document.getElementById("cell-a-set-"+setGame).innerHTML = "0";
                    document.getElementById("cell-b-set-"+setGame).innerHTML = "0";
                    document.getElementById('points-team-a').innerHTML = "0"
                    document.getElementById('points-team-b').innerHTML = "0"
                } else {
                    valuePointsB++;
                    document.getElementById('points-team-b').innerHTML = valuePointsB;
                }
            } else {
                valuePointsB++;
                document.getElementById('points-team-b').innerHTML = valuePointsB;
            }
        }
    }
});

function addPointsSet(team, quantity, set) {
var team = team;

if (tiebreak == false) {
    if (quantity == 6) {
        if (team == "a") {
            var points = parseInt(document.getElementById("cell-b-set-"+set).innerHTML);
            if (points < 5) {
                document.getElementById("cell-a-set-"+set).innerHTML = "6";
                document.getElementById("cell-a-set-"+set).classList.add("set-end");
                setGame++;
                document.getElementById("cell-a-set-"+setGame).innerHTML = "0";
                document.getElementById("cell-b-set-"+setGame).innerHTML = "0";
            } else if (points == 5) {
                document.getElementById("cell-"+team+"-set-"+set).innerHTML = quantity;
            } else {
                document.getElementById("cell-"+team+"-set-"+set).innerHTML = quantity;
                tiebreak = true;
            }
        } else {
            var points = parseInt(document.getElementById("cell-a-set-"+set).innerHTML);
            if (points < 5) {
                document.getElementById("cell-b-set-"+set).innerHTML = "6";
                document.getElementById("cell-b-set-"+set).classList.add("set-end");
                setGame++;
                document.getElementById("cell-a-set-"+setGame).innerHTML = "0";
                document.getElementById("cell-b-set-"+setGame).innerHTML = "0";
            } else if (points == 5) {
                document.getElementById("cell-"+team+"-set-"+set).innerHTML = quantity;
            } else {
                document.getElementById("cell-"+team+"-set-"+set).innerHTML = quantity;
                tiebreak = true;
            }
        }
    } else if (quantity > 6){
        if (team == "a") {
            var points = parseInt(document.getElementById("cell-b-set-"+set).innerHTML);
            if (points == 5) {
                document.getElementById("cell-a-set-"+set).innerHTML = "7";
                document.getElementById("cell-a-set-"+set).classList.add("set-end");
                setGame++;
                document.getElementById("cell-a-set-"+setGame).innerHTML = "0";
                document.getElementById("cell-b-set-"+setGame).innerHTML = "0";
            } else {
                document.getElementById("cell-"+team+"-set-"+set).innerHTML = quantity;
                tiebreak = true;
            }
        } else {
            var points = parseInt(document.getElementById("cell-a-set-"+set).innerHTML);
            if (points == 5) {
                document.getElementById("cell-b-set-"+set).innerHTML = "7";
                document.getElementById("cell-b-set-"+set).classList.add("set-end");
                setGame++;
                document.getElementById("cell-a-set-"+setGame).innerHTML = "0";
                document.getElementById("cell-b-set-"+setGame).innerHTML = "0";
            } else {
                document.getElementById("cell-"+team+"-set-"+set).innerHTML = quantity;
                tiebreak = true;
            }
        }
        } else {
            document.getElementById("cell-"+team+"-set-"+set).innerHTML = quantity;
        }
    }
}

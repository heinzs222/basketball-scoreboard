let hPoints = 0;
let gPoints = 0;

let homePoints = document.getElementById("home");
let guestPoints = document.getElementById("guest");

homePoints.textContent = hPoints;
guestPoints.textContent = gPoints;
function addOneH() {
    hPoints += 1;
    homePoints.textContent = hPoints;
}
function addTwoH() {
    hPoints += 2;
    homePoints.textContent = hPoints;
}
function addThreeH() {
    hPoints += 3;
    homePoints.textContent = hPoints;
}
function addOneG() {
    gPoints += 1;
    guestPoints.textContent = gPoints;
}
function addTwoG() {
    gPoints += 2;
    guestPoints.textContent = gPoints;
}
function addThreeG() {
    gPoints += 3;
    guestPoints.textContent = gPoints;
}
function startNew() {
    hPoints = 0;
    gPoints = 0;
    homePoints.textContent = hPoints;
    guestPoints.textContent = gPoints;
}
let leadOne = document.getElementById("leader1");
leadOne.style.visibility = "hidden";
let leadTwo = document.getElementById("leader2");
leadTwo.style.visibility = "hidden";
function testLeader() {
    if (hPoints > gPoints) {
        leadOne.style.visibility = "visible";
        leadTwo.style.visibility = "hidden";
    } else if (gPoints > hPoints) {
        leadTwo.style.visibility = "visible";
        leadOne.style.visibility = "hidden";
    }
}
function hide() {
    leadOne.style.visibility = "hidden";
    leadTwo.style.visibility = "hidden";
}

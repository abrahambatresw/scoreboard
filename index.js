const home1Btn = document.getElementById("home-1-btn")
const home2Btn = document.getElementById("home-1-btn")
const home3Btn = document.getElementById("home-3-btn")

const guest1Btn = document.getElementById("guest-1-btn")
const guest2Btn = document.getElementById("guest-2-btn")
const guest3Btn = document.getElementById("guest-3-btn")

const homePointsEl = document.getElementById("home-points")
const guetsPointsEl = document.getElementById("guest-points")

let homePoints = 0
let guestPoints = 0

function updateHomePoints() {
    homePointsEl.textContent = homePoints
}

function updateGuestPoints() {
    guetsPointsEl.textContent = guestPoints
}

function addHome1() {
    homePoints += 1
    updateHomePoints()
}

function addHome2() {
    homePoints += 2
    updateHomePoints()
}

function addHome3() {
    homePoints += 3
    updateHomePoints()
}

function addGuest1() {
    guestPoints += 1
    updateGuestPoints()
}

function addGuest2() {
    guestPoints += 2
    updateGuestPoints()
}

function addGuest3() {
    guestPoints += 3
    updateGuestPoints()
}
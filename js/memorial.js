function createMemorial(event) {

event.preventDefault()

const name = document.getElementById("name").value
const birth = document.getElementById("birth").value
const passing = document.getElementById("passing").value
const bio = document.getElementById("bio").value

localStorage.setItem("memorialName", name)
localStorage.setItem("memorialBirth", birth)
localStorage.setItem("memorialPassing", passing)
localStorage.setItem("memorialBio", bio)

window.location.href = "memorial.html"

}

function loadMemorial() {

document.getElementById("memorialName").innerText =
localStorage.getItem("memorialName")

document.getElementById("memorialDates").innerText =
localStorage.getItem("memorialBirth") + " - " +
localStorage.getItem("memorialPassing")

document.getElementById("memorialBio").innerText =
localStorage.getItem("memorialBio")

}

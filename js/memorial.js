let candleCount = 0
let flowerCount = 0

// 🕯 Candle system
function lightCandle(type){

const meanings = {
hope: "A candle of hope for brighter days.",
love: "A candle of love that never fades.",
peace: "A candle of peace for eternal rest."
}

candleCount++

document.getElementById("candleCount").innerText =
candleCount + " Candles Lit"

const msg = document.getElementById("candleMessage")
msg.innerText = meanings[type]

msg.classList.add("animate")
setTimeout(()=>msg.classList.remove("animate"),400)

}

// 🌹 Flower system
function sendFlower(type){

const meanings = {
rose: "Rose: Love and remembrance.",
lily: "Lily: Purity and peace.",
daisy: "Daisy: Innocence and new beginnings."
}

flowerCount++

document.getElementById("flowerCount").innerText =
flowerCount + " Flowers Sent"

const msg = document.getElementById("flowerMessage")
msg.innerText = meanings[type]

msg.classList.add("animate")
setTimeout(()=>msg.classList.remove("animate"),400)

}

// 💬 Condolence wall
function postCondolence(){

const name = document.getElementById("condolenceName").value
const message = document.getElementById("condolenceMessage").value

const list = document.getElementById("condolenceList")

const div = document.createElement("div")

div.innerHTML = "<strong>" + name + "</strong>: " + message

list.appendChild(div)

}

// 🕯 Floating candles animation
function createFloatingCandle(){

const candle = document.createElement("div")
candle.className = "candle"
candle.innerText = "🕯"

candle.style.left = Math.random() * window.innerWidth + "px"
candle.style.animationDuration =
(5 + Math.random() * 5) + "s"

document.getElementById("floatingCandles").appendChild(candle)

setTimeout(()=>{
candle.remove()
},8000)

}

setInterval(createFloatingCandle,2000)


// 🎵 Music
function toggleMusic(){

const music = document.getElementById("bgMusic")

if(music.paused){
music.play()
}else{
music.pause()
}

}

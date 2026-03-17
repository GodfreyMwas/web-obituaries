let candles=0
let flowers=0

function showPopup(msg){
popupText.innerText=msg
popup.style.display="block"
setTimeout(()=>popup.style.display="none",2000)
}

function lightCandle(type){
candles++
candleCount.innerText=candles
showPopup(type+" candle lit 🕯")
}

function sendFlower(type){
flowers++
flowerCount.innerText=flowers
showPopup(type+" sent 🌸")
}

function toggleMusic(){
if(bgMusic.paused){
bgMusic.play()
musicBtn.innerText="Pause Music"
}else{
bgMusic.pause()
musicBtn.innerText="Play Music"
}
}

function addCondolence(){
if(condolenceInput.value==="")return
const p=document.createElement("p")
p.innerText=condolenceInput.value
condolenceWall.appendChild(p)
condolenceInput.value=""
}

function sendFamily(){
if(familyInput.value==="")return
const d=document.createElement("div")
d.innerText="👤 "+familyInput.value
familyWall.appendChild(d)
familyInput.value=""
}

/* Creative floating */
setInterval(()=>{
const el=document.createElement("div")
el.innerText="✨"
el.style.position="fixed"
el.style.left=Math.random()*100+"vw"
el.style.top="100vh"
document.body.appendChild(el)

let pos=100
const move=setInterval(()=>{
pos--
el.style.top=pos+"vh"
if(pos<0){clearInterval(move);el.remove()}
},40)

},1500)

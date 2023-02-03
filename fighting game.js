
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
let reset=document.getElementById('reset')

const updateGame = (p1,p2,gameState) => {
  p1NameDiv.innerText=p1.name
  p2NameDiv.innerText=p2.name
  p1HealthDiv.innerText=p1.health
  p2HealthDiv.innerText=p2.health

  if(p1.health<=0  || p2.health<=0){
     game.isOver=true
    gameState=game.isOver
    resultDiv.innerText= game.declareWinner(game.isOver,p1, p2)
    return gameState
  
class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  strike (player, enemy, attackDmg) {
    

    let damageAmount=Math.ceil(Math.random()*attackDmg)

  enemy.health-=damageAmount
  
   updateGame(p1,p2,gameState)
'
 return `${player.name} hits ${enemy.name} to a damage of ${damageAmount}`
  }
  
  heal (player) {

     let hpAmount=Math.floor(Math.random()*5)
     this.health+=hpAmount
    updateGame(p1,p2,game.isOver)

class Game {
  constructor() {
    this.isOver = false;
  }

  declareWinner(isOver,p1, p2) {

    let message;
    if(isOver==true && p1.health<=0){
     message=`${p2.name} wins!`
    } else if(isOver==true && p2.health<=0) {
    message=`${p1.name} wins!`
  }


 document.getElementById('victory').play()
return message
  }

 
  reset(p1,p2) {

    p1.health=100
    p2.health=100
    this.isOver = false
    resultDiv.innerText=''
    updateGame(p1,p2)
  }
  

  play(p1, p2) {

  this.reset(p1,p2)

    while (!this.isOver) {
      p1.strike(p1,p2,p1.attackDmg)
      p2.heal(p2)
      p2.strike(p2,p1,p2.attackDmg)
      p1.heal(p1)
    }
    return this.declareWinner(this.isOver,p1,p2)
  }

}


const player1=new Player('PRADEEP',100,10)
const player2=new Player('TOP-G',100,10)


let p1=player1;
let p2=player2;


const game=new Game()

updateGame(p1,p2,game.isOver)
let gameState;
document.addEventListener('keydown', function(e) {
  if(e.key=='q' && p2.health>0 && game.isOver==false){
    console.log('its q')
    document.getElementById('p1attack').play()
    p1.strike(p1,p2,p1.attackDmg)
  }

});

document.addEventListener('keydown', function(e) {
if(e.key=='a' && p2.health>0 && game.isOver==false){
  document.getElementById('p1heal').play()
  p1.heal(p1)
}
});


document.addEventListener('keydown', function(e) {
  if(e.key=='p' && p1.health>0 && game.isOver==false){
    console.log('its p')
    document.getElementById('p2attack').play()
    p2.strike(p2,p1,p2.attackDmg)
  }

});

document.addEventListener('keydown', function(e) {
if(e.key=='l' && p1.health>0 && game.isOver==false){
  console.log('its q')
  document.getElementById('p2heal').play()
  p2.heal(p2)
}
});


playButton.onclick=()=>resultDiv.innerText=game.play(p1,p2)
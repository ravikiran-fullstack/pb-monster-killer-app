const ATTACK_VALUE = 5;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 20;
let chooseMaxHealth = 100;
let hasBonusLife = true;

let monsterCurrentHealth = chooseMaxHealth;
let playerCurrentHealth = chooseMaxHealth;

let enteredHealthValue = 100;//prompt('enter Max health players can have',100);

chooseMaxHealth = parseInt(enteredHealthValue);
if(isNaN(chooseMaxHealth) || chooseMaxHealth <= 0){
  chooseMaxHealth = 100;
}

adjustHealthBars(chooseMaxHealth);

function attackMonster(mode){
  let maxDamage;
  if(mode === "ATTACK"){
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK"){
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  monsterCurrentHealth -= damage;
  endGame();
}

function reset(){
  monsterCurrentHealth = chooseMaxHealth;
  playerCurrentHealth = chooseMaxHealth;
  resetGame(chooseMaxHealth);
}

function endGame(){
  const initialPlayerHealth = playerCurrentHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  playerCurrentHealth -= playerDamage;

  if(playerCurrentHealth <= 0 && hasBonusLife){
    hasBonusLife = false;
    playerCurrentHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    removeBonusLife();
    alert('You would have lost if not for one bonus life');
  }

  if(monsterCurrentHealth <= 0 && playerCurrentHealth > 0){
    alert('You won')
  
  } else if(monsterCurrentHealth > 0 && playerCurrentHealth <= 0){
    alert('Monster won')
  } else if(monsterCurrentHealth < 0 && playerCurrentHealth < 0){
    alert('Match is drawn!')
  }

  if(monsterCurrentHealth <= 0 || playerCurrentHealth <= 0){
    reset();
  }
}

function attackMonsterHandler(){
  attackMonster("ATTACK");
}

function strongAttackMonsterHandler(){
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler(){

  let healValue;
  if(playerCurrentHealth >= chooseMaxHealth - HEAL_VALUE){
    healValue = chooseMaxHealth - playerCurrentHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  playerCurrentHealth += healValue;
  increasePlayerHealth(healValue);
  endGame();
}

attackBtn.addEventListener('click', attackMonsterHandler);
strongAttackBtn.addEventListener('click', strongAttackMonsterHandler);
healBtn.addEventListener('click', healPlayerHandler);



const darkMode = document.querySelector("#darkMode");

// Listen for a click on the button
darkMode.addEventListener("change", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
});


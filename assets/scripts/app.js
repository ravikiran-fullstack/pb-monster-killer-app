const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;
let chooseMaxHealth = 100;

let monsterCurrentHealth = chooseMaxHealth;
let playerCurrentHealth = chooseMaxHealth;

adjustHealthBars(chooseMaxHealth);

function attackMonster(){
  const damage = dealMonsterDamage(ATTACK_VALUE);
  monsterCurrentHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  playerCurrentHealth -= playerDamage;
}

attackBtn.addEventListener('click', attackMonster);
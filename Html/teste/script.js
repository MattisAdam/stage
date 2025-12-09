const maxHpchoise = randomInt(200, 400)
let multdmg = 0;
let clickedDuringTimeout = false;
const btn = document.querySelector(".BonusArea button");
const area = document.querySelector(".BonusArea");

let waitingForBonus = false;

btn.addEventListener("click", handleBonusClick);

const monsters = [
    { name: "rico", type: "tenebre", hp: maxHpchoise, maxHp: maxHpchoise, turn: false, attackCount: 0 },
    { name: "mattis", type: "lumier", hp: maxHpchoise, maxHp: maxHpchoise, turn: false, attackCount: 0 },

]

const Monstre1 = monsters[0]
const Monstre2 = monsters[1]

function handleBonusClick() {
    if (!waitingForBonus) return; 

    const maxX = area.clientWidth - btn.clientWidth;
    const maxY = area.clientHeight - btn.clientHeight;

    btn.style.left = Math.random() * maxX + "px";
    btn.style.top = Math.random() * maxY + "px";

    multdmg += 5;
    updateBonus();

    setTimeout(() => {
        btn.style.opacity = 0;
        waitingForBonus = false;
    }, 2000);
}

function Game() {
    btn.style.opacity = 1;
    // choix monstre random
    const monstre = randomInt(1, 2);
    //monstre == 1 (rico)
    if (monstre == 1) {

        //affiche triangle
        Monstre1.turn = true;
        Monstre2.turn = false;
        updatemonster();

        //montre l'attack
        // alert(`${Monstre1.name} attack ${Monstre2.name}`);
        attack(Monstre2);
        Monstre1.attackCount++;

    }
    //monstre == 2 (Mattis)
    else {
        Monstre2.turn = true;
        Monstre1.turn = false;

        updatemonster();

        // alert(`${Monstre2.name} attack ${Monstre1.name}`);
        attack(Monstre1);
        Monstre2.attackCount++;
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function attack(cible) {
    multdmg = 0;
    updateBonus();

    waitingForBonus = true;
    btn.style.opacity = 1;

    setTimeout(() => {
        waitingForBonus = false;

        const dmg = randomInt(30, 100);
        cible.hp -= dmg + multdmg;

        updateHP();

        if (cible.hp <= 0) {
            cible.hp = 0;
            alert(`${cible.name} is dead`);
        }

    }, 2000);
}
    // damage to the target rnd
    const dmg = randomInt(30, 100)
    // calc hp remaining
    if(Monstre1.name == "rico"){
        Monstre1.hp = 1;
    }
    cible.hp = cible.hp - (dmg + multdmg)

    //condition dead
    if (cible.hp <= 0) {
        alert(`${cible.name} = dead`)
        cible.hp = 0;
        updateHP();
        return;
    }
    updateHP();

}

function updateHP() {
    //hpbar
    const pPct = (Monstre1.hp / Monstre1.maxHp) * 100;
    const ePct = (Monstre2.hp / Monstre2.maxHp) * 100;

    document.getElementById("monstre1HpBar").style.width = pPct + "%";
    document.getElementById("monstre2HpBar").style.width = ePct + "%";

    document.getElementById("monstre1HpText").textContent = `HP: ${Monstre1.hp} / ${Monstre1.maxHp}`;
    document.getElementById("monstre2HpText").textContent = `HP: ${Monstre2.hp} / ${Monstre2.maxHp}`;

    document.getElementById("monstre1HpBar").style.background = pPct > 50 ? "#34d399" : pPct > 25 ? "#facc15" : "#ef4444";
    document.getElementById("monstre2HpBar").style.background = ePct > 50 ? "#34d399" : ePct > 25 ? "#facc15" : "#ef4444";
}

function updatemonster() {

    document.getElementById("IsTurnOfMonstre1").textContent = Monstre1.turn ? "▼" : "";
    document.getElementById("monstre1Name").textContent = "Nom: " + Monstre1.name;
    document.getElementById("monstre1Type").textContent = "Type: " + Monstre1.type;
    
    document.getElementById("IsTurnOfMonstre2").textContent = Monstre2.turn ? "▼" : "";
    document.getElementById("monstre2name").textContent = "Nom: " + Monstre2.name;
    document.getElementById("monstre2type").textContent = "Type: " + Monstre2.type;
}

function updateBonus(){
    document.getElementById("bonus").textContent = "Bonus: " + multdmg;
    
}
updateHP();
updatemonster();

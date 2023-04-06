

///////////SOLID Principles (Single-responsibility)
/*
function element()  {
        this.attackbuttom = document.querySelector(`#${this.name}-attact`);
        this.healthbuttom = document.querySelector(`#${this.name}-make-health`);
        this.bothbutton   = document.querySelector(`.${this.name}-health span`);
        this.alive  = document.querySelector(`#${this.name}-alive`);
    }*/
class Fighter {
    constructor(name,power,health){
        this.name = name ;
        this.power = power;
        this.health = health;

        this.attackbuttom = document.querySelector(`#${this.name}-attact`);
        this.healthbuttom = document.querySelector(`#${this.name}-make-health`);
        this.bothbutton   = document.querySelector(`.${this.name}-health span`);
        this.alive  = document.querySelector(`#${this.name}-alive`);

    };

    attack = function(opponent){
                 if(opponent.health > 0){

opponent.health -= this.power;
opponent.bothbutton.style.width = `${opponent.health}%`;
}else{
opponent.attackbuttom.remove();
opponent.healthbuttom.remove();
opponent.alive.innerHTML = `${opponent.name} is died`
};
    }
    status = function(){
        console.log(`name:${this.name}`);
        console.log(`power:${this.power}`);
        console.log(`health:${this.health}`);
    }
    makehealth = function(){
if(this.health < 100){
   
    this.health += 10 ;
 this.bothbutton.style.width = `${this.health}%`;
}
if(this.health >100){
this.health = 100;
    }
    }};
   
let Me = new Fighter("Me",10,100);
let Life = new Fighter("Life",5,100);


Life.attackbuttom.addEventListener('click', function(){
    Life.attack(Me)
    Me.status();
});

Me.attackbuttom.addEventListener('click', function(){
    Me.attack(Life)
    Life.status();
});

Life.healthbuttom.addEventListener('click', function(){
Life.makehealth();
Life.status();
});

Me.healthbuttom.addEventListener('click', function(){
Me.makehealth();
Me.status();
});
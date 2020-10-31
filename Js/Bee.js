class Bee{
    constructor(){
        this.x;
        this.y;
        this.speed;
        this.image = loadImage("Image/bees.png")
    }
    moving(){
        if(frameCount > 250 && gameState === "play"){
            if(frameCount % 50 === 0){
                this.getValues();
                beeSound.play();
            }
            Move(this, -this.speed, 0);
        }
    }
    getValues(){
        this.x = Width + 10;
        this.y = random(50, Height - 50);
        this.speed = frameCount/10;
    }
    display(){
        this.moving();
        this.damage();

        if(frameCount > 250){
            imageMode(CENTER);
            image(this.image, this.x, this.y, 75, 75);
        }
    }
    damage(){
        if(isTouching(this, soilder, 50, 5)){
            var damage = this.speed/10;
            soilderPowerBar.power -= damage;
        }
    }
}
class Enemy{
    constructor(width, height){
        this.width = width;
        this.height = height;

        this.tbs = Math.round(random(0, 2));

        this.image = loadImage("Image/enemy.png");
        this.image1 = loadImage("Image/enemy1.png");

        this.rand = Math.round(random(0, 1));

        this.living = "alive";

        this.reborn = "no";
    }
    display(){
        if(this.tbs === 0){
            this.y = -this.height/2;
            this.x = Math.round(random(Width/2 - 200, Width - 50));
            this.tbs = undefined;
        }
        if(this.tbs === 1){
            this.x = Width + this.width/2;
            this.y = Math.round(random(50, Height - 50));
            this.tbs = undefined;
        }
        if(this.tbs === 2){
            this.y = Height + this.height/2;
            this.x = Math.round(random(Width/2 - 200, Width - 50));
            this.tbs = undefined;
        }

        if(this.living === "alive"){
            if(this.rand === 0){
                imageMode(CENTER);
                image(this.image, this.x, this.y, this.width, this.height);
            }   
            if(this.rand === 1){
                imageMode(CENTER);
                image(this.image1, this.x, this.y, this.width, this.height);
            }
        }
    }

    move(destination, position, divisonForSpeed){
        if(position.x > destination.x && position.y > destination.y){
            Move(position, -(position.x - destination.x)/divisonForSpeed, -(position.y - destination.y)/divisonForSpeed);
        }
        if(destination.x > position.x && position.y > destination.y){
            Move(position, (destination.x - position.x)/divisonForSpeed, -(position.y - destination.y)/divisonForSpeed);
        }
        if(destination.x > position.x && destination.y > position.y){
            Move(position, (destination.x - position.x)/divisonForSpeed, (destination.y - position.y)/divisonForSpeed);
        }
        if(position.x > destination.x && destination.y > position.y){
            Move(position, -(position.x - destination.x)/divisonForSpeed, (destination.y - position.y)/divisonForSpeed);
        }
    }
    displayAndMove(frameCountCondition, speed1Div, speed2Div){
        if(frameCount > frameCountCondition && this.living === "alive"){
            this.display();

            var objSpeed;
            
            if(findC(this, soilder) < 300){
              objSpeed = speed2Div;
            }
            else{
              objSpeed = speed1Div;
            }
            if(soilder.x < this.x){
                this.move(soilder, this, objSpeed);
            }   else{
                this.move(treatment, this, objSpeed);
            }
          }
    }

    attack(frameCountCond, strenght){
        if(this.living === "alive"){
            if(frameCount % frameCountCond === 0 && this.x < Width){
                var distance = findC(this, soilder);
                var reduce = floor((strenght/distance) * 2);
    
                soilderPowerBar.power -= reduce;
    
                if(gameState !== "end"){
                    background(255, 0, 0, 100);
                }
            }
        }
    }

    rebornAndDeath(powerBar){
        if(this.reborn === "no" && powerBar.power < 1){
            powerBar.power = 100;
            this.tbs = Math.round(random(0, 2));
            this.reborn = "yes";
        }
        if(powerBar.power <= 1){
            this.living = "died";
            powerBar.power = 0;
        }   
        if(this.reborn === "yes" && powerBar.power < 0){
            this.living = "died";
        }   
    }
}
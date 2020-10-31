class Soilder{
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.Status = "";

        this.tDiertection = "none";
        this.dierection = "none";

        this.image = loadImage("Image/Soilder.png");

        this.living = "alive";
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 100);
    }
    spawnSoilder(){
        this.x = mouseX;
        this.y = mouseY;
        imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 100);
    }
    MoveSoilderUp(){
        Move(this, 0, -10);
        this.image = loadImage("Image/Soilder4.png");
    }
    MoveSoilderDown(){
        Move(this, 0, 10);
        this.image = loadImage("Image/Soilder3.png");
    }
    MoveSoilderLeft(){
        Move(this, -10, 0);
        this.image = loadImage("Image/Soilder1.png");
    }
    MoveSoilderRight(){
        Move(this, 10, 0);
        this.image = loadImage("Image/Soilder2.png");
    }
    death(){
        if(soilderPowerBar.power <= 1){
            this.living = "died";
        }
    }
}

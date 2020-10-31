class Badges{
    constructor(start){
        this.x = Math.round(random(Width/5, Width - Width/5));
        this.y = Math.round(random(Height/5, Height - Height/5));

        this.image = loadImage("image/Badges.png");

        this.start = start;
        this.stop = this.start + Math.round(findC(soilder, this)/2);
        
        this.collected = "";
    }
    display(){
        rectMode(CENTER);
        fill(0)

        if(frameCount > this.start && frameCount < this.stop){
            if(isTouching(this, soilder, 50, 50)){
                this.collected = "yes";

                fill(0, 255, 0);
            }   else{
                this.collected = "no"; 
                fill(255);    
            }
            ellipse(this.x, this.y, 50, 50);
            image(this.image, this.x, this.y, 50, 50);
        }
        if(frameCount > this.stop && this.collected === "no"){
            gameState = "end";  
            winner = "enemy";
        }

        if(this.collected === "yes"){
            fill(0, 255, 0);
        }
    }
}
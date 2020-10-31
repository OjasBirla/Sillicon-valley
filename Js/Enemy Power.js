class EnemyPower{
    constructor(x, y, width, height, power, orientation){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;  
        this.power = power;
        this.orientation = orientation;

        this.xOut = x;
        this.yOut = y;
        this.widthOut = width;
        this.heightOut = height;
    }
    update(){
        if(this.power >= 0){
            if(this.orientation === 0){
                this.height = this.power + 1;
            }
            if(this.orientation === 1){
                this.width = this.power + 1;
            }
        }
    }

    display(obj){
        if(obj.living === "alive"){
            fill("red");
            stroke(0);
            rect(this.x, this.y, this.width, this.height);
        }   else{
            fill(0, 0, 255, 100);
            rect(this.x, this.y, this.width, this.height)
        }
        if(this.orientation === 0){
            fill(0, 0, 255, 100);
            rectMode(CORNERS);
            rect(this.xOut, this.yOut + this.height, this.xOut + this.widthOut, this.yOut + this.heightOut);
        }
        if(this.orientation === 1){
            fill(0, 0, 255, 100);
            rectMode(CORNERS);
            rect(this.xOut + this.width, this.yOut, this.xOut + this.widthOut, this.yOut + this.heightOut);
        }
        
        noFill();
        rectMode(CORNER);
        rect(this.xOut, this.yOut, this.widthOut, this.heightOut);

        this.update();
    }
}
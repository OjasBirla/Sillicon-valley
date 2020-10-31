class enemyBullet{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    display(){
        rectMode(CENTER);
        rect(this.x, this.y, 100, 50);
    }
}
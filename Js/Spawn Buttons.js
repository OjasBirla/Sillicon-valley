class SpawnButton{
    constructor(){
        this.button1 = createButton("Treatment");
        this.button2 = createButton("Soilder");     
        this.button3 = createButton("How To Play???")  ;
        this.button4 = createButton("Reset");
    }
    display(){
        this.button1.position(50, 20);
        this.button2.position(135, 20); 
        this.button3.position(Width/2, 20);
        this.button4.position(Width - 70, Height - 30)
        
        this.button1.mousePressed(() => {
            treatment.Status = "spawntreatment";
        })

        this.button2.mousePressed(() => {
            if(treatment.x !== 0, treatment.y !== -100){
                soilder.Status = "spawnSoilder";
            }
        })   
        this.button3.mousePressed(() => {
            howToPlay = "show";
        }) 
        this.button4.mousePressed(() => {
            window.location.reload();
        })  
    }
}
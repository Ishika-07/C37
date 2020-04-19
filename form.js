class Form {

    constructor(){

        this.input =  createInput("Name");

        this.button = createButton('Play');

        this.Greeting = createElement('h3');

    }
    hide(){
        this.Greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
    
        var title = createElement('h2');
        title.html("Car Racing"); 
        title.position(170,10);

        this.input.position(130,160);

       this.button.position(250,250);

      
    
    this.button.mousePressed ( ()=> {

        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.Greeting.html("Welcome " + player.name);
        this.Greeting.position(250,50);

    });

    }

}

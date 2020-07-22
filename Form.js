class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    
    
    this.title.html("Hurdle Jump");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button2 = createButton('Clear database');
    this.button2.position(700,700);

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Thank you for coming, " + player.name + ". To move forward, press the right arrow, and to jump, press space. We will be starting your game shortly, after the second player has arrived. ");
      this.greeting.position(displayWidth/2.8, displayHeight/3);

    
      playerid = playerCount;
    });

    this.button2.mousePressed(()=>{
      database.ref('/').set({
        playerCount: 0,
        gameState : 0
      });

    })

  }
  }

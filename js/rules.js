class Rule {
    constructor() {

        this.nextButton = createButton("next");
       this.storyImg = createImg("story.png", "game title");
    }
    setButtonPosition() {
        this.nextButton.position(width / 2 - 90, height / 2 - 20);
    }
    hide() {
        this.nextButton.hide();
    }
    handleMousePressed() {
        this.nextButton.mousePressed(() => {
    
          this.nextButton.hide();
      
     
     
        });
      }
    display() {
       this.setButtonPosition() ;
     
    }
}
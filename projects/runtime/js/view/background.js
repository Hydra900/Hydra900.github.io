var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
      
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
      var trees = [];
      var tree;
        var houses =  [];
        var house;
            
    
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game

                var backgroundFill = draw.rect(canvasWidth,900,'grey');
            background.addChild(backgroundFill);

                       var backgroundFill = draw.rect(canvasWidth,620,'#461308');
            background.addChild(backgroundFill);


                       var backgroundFill = draw.rect(canvasWidth,430,'green');
            background.addChild(backgroundFill);
            
            
                var backgroundFill = draw.rect(canvasWidth,groundY,'navy');
            background.addChild(backgroundFill);
            
                     var backgroundFill = draw.rect(90,90,'gold');
            background.addChild(backgroundFill);        

            //My underground stuff
            
            var coal = draw.bitmap('img/coal.png');
                    coal.x = 500;
                    coal.y = 700;
                    coal.scaleX = 0.18;
                    coal.scaleY = 0.18;
                    background.addChild(coal);
            
               
            var coal = draw.bitmap('img/coal.png');
                    coal.x = 900;
                    coal.y = 650;
                    coal.scaleX = 0.18;
                    coal.scaleY = 0.18;
                    background.addChild(coal);
            
             var iron = draw.bitmap('img/iron.jfif');
                    iron.x = 200;
                    iron.y = 620;
                    iron.scaleX = 0.4;
                    iron.scaleY = 0.4;
                    background.addChild(iron);
                    
            var iron = draw.bitmap('img/iron.jfif');
                    iron.x = 1200;
                    iron.y = 680;
                    iron.scaleX = 0.4;
                    iron.scaleY = 0.4;
                    background.addChild(iron);
            

                    
                    
                    
                    
            //My underground Stuff

            // TODO: 3 - Add a moon and starfield
            
                //Imported moon from minecraft to fit theme

                    
                var star;
                for(var i=0; i < 20; i++) {
                    star = draw.circle(10,'white','LightGray',2);
                    star.x = canvasWidth*Math.random();
                    star.y = 300*Math.random();
                    background.addChild(star);
                 }
            
                            
                var moon = draw.bitmap('img/moon!.jfif');
                    moon.x = 0;
                    moon.y = 0;
                    moon.scaleX = 0.4;
                    moon.scaleY = 0.4;
                    background.addChild(moon);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
                

                  
                  for (var i = 0; i < 3; i++) {
                      
                        house = draw.bitmap('img/New Piskel-1.png.png');
                        houses[i] = house
                        houses[i].x = 280 * (i + 1);
                        houses[i].y = groundY - 117;
                        houses[i].scaleX = 0.28;
                        houses[i].scaleY = 0.28;
                        background.addChild(houses[i]);
                    }
            
                
            
            // TODO 4: Part 1 - Add a tree
          for (var i = 0; i < 1; i++) {    
                tree = draw.bitmap('img/Tree-1.png.png');
                trees[i] = tree
                trees[i].x = 1000 * (i + 1);
                trees[i].y = groundY - 234;
                trees[i].scaleX = 0.3;
                trees[i].scaleY = 0.3;
                background.addChild(tree);
          
            }
            
            
       } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
        
            // TODO 4: Part 2 - Move the tree!
               tree.x = tree.x - 1;
                 if(tree.x < -200) {
                     tree.x = canvasWidth;
                 }

          
            // TODO 5: Part 2 - Parallax

            
            for(var i = 0; i < houses.length; i++) {
                houses[i].x -= 0.5;
                
                if (houses[i].x < -160) {
                   
                    houses[i].x = canvasWidth + 159;
                }
            }
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}

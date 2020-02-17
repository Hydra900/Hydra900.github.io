var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY }
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
          
            

        //Objects
        
        function Blaze(x , y){
        var hitZoneSize = 25;
            var damageFromObstacle = 100;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                sawBladeHitZone.x = 1000;
                sawBladeHitZone.y = groundY - 80;
            game.addGameItem(sawBladeHitZone);
            
            var obstacleImage = draw.bitmap('img/Blaze.png');
                obstacleImage.scaleX = 0.6;
                obstacleImage.scaleY = 0.5;
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = -15;
                obstacleImage.y = -25;

            
        }
                    
        Blaze(400, 373);
                    

   
       function Slime(x , y){
           
             var hitZoneSize = 25;
            var damageFromObstacle = 100;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                sawBladeHitZone.x = x;
                sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            
           
            var obstacleImage = draw.bitmap('img/Slime (2).png');
                obstacleImage.scaleX = 0.18;
                obstacleImage.scaleY = 0.18;
                sawBladeHitZone.addChild(obstacleImage);
                    obstacleImage.x = -25;
                    obstacleImage.y = -25;
           
       }
       
       Slime(400, 373);
       Slime(800, 373);
         
     
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}

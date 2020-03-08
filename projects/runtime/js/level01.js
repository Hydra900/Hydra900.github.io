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
                { "type": "slime", "x": 400, "y": groundY },
                
                { "type": "phantom", "x": 600, "y": groundY },
                
                { "type": "creeper", "x": 1000, "y": groundY },
                { "type": "creeper", "x": 1500, "y": groundY },
                
                { "type": "goldapple", "x": 2000, "y": groundY },
            ],
         
            
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        for (var key = 0; key < levelData.gameItems.length; key++) {
            var gameItemObject = levelData.gameItems[key];
                if (gameItemObject.type === 'slime'){
                    createObstacleSlime(gameItemObject.x, gameItemObject.y);
                    
                }
                

                if (gameItemObject.type === 'phantom'){
                    createObstaclePhantom(gameItemObject.x, gameItemObject.y);
                    
                }
                
                if (gameItemObject.type === 'creeper'){
                    createEnemyCreeper(gameItemObject.x, gameItemObject.y);
                    
                }
        }
            
        //Objects

   
        function createObstacleSlime(x , y){
           
            var hitZoneSize = 20;
            var damageFromObstacle = 1000;
            var slimeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            slimeHitZone.x = x - 2;
            slimeHitZone.y = y - 10;
            
            game.addGameItem(slimeHitZone); 
            
            var obstacleImage = draw.bitmap('img/Slime (2).png');
            slimeHitZone.addChild(obstacleImage);
            obstacleImage.x = -23;
            obstacleImage.y = - 30;
            obstacleImage.scaleX = .2;
            obstacleImage.scaleY = .2;
            
        };   
        
         function createObstaclePhantom(x , y){
           
             var hitZoneSize = 25;
            var damageFromObstacle = 100;
            var phantomHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                phantomHitZone.x = x + 20;
                phantomHitZone.y = y - 120;
            game.addGameItem(phantomHitZone);
            
           
            var obstacleImage = draw.bitmap('img/Phantom (1).png');
                obstacleImage.scaleX = 0.12;
                obstacleImage.scaleY = 0.12;
                phantomHitZone.addChild(obstacleImage);
                    obstacleImage.x = -25;
                    obstacleImage.y = -15;
           
       }

     
        
                
        function createEnemyCreeper(x , y){
 
            
                var enemy =  game.createGameItem('creeper', 25);
                enemy.x = x + 20;
                enemy.y= y - 50;
                enemy.velocityX = - 1;
                game.addGameItem(enemy);
                
                
                var creeper = draw.bitmap('img/Creeper.png');
                 creeper.x = -25;
                 creeper.y = - 70;
                 creeper.scaleX = .8;
                 creeper.scaleY = .8;
                 
                enemy.addChild(creeper);

               enemy.onPlayerCollision = function (){
                   game.changeIntegrity(-30);
                   enemy.fadeOut();
               };
        
                enemy.onProjectileCollision = function() {
                        game.increaseScore(50);
                        enemy.fadeOut();
                };
                       function createGameItem(x, y) {
                           var goldapple = game.createGameItem('gold apple', 30);
                           goldapple. x = x;
                           goldapple.y = y;
                           goldapple.velocityX = 1;
                           game.addGameItem(goldapple);
                           
                       }            
                        var goldapple = draw.bitmap('/img/golden apple.png');
                            creeper.x = -25;
                            creeper.y = - 70;
                            creeper.scaleX = .8;
                            creeper.scaleY = .8;
                 
                    enemy.addChild(goldapple);

                        enemy.onPlayerCollision = function (){
                         game.changeIntegrity(50);
                         enemy.fadeOut();
               };
                           
                                  
                
            }    
  
     
        
        // DO NOT EDIT CODE BELOW HERE
        }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}

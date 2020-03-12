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
                { "type": "slime", "x": 600, "y": groundY },
                { "type": "slime", "x": 1850, "y": groundY },
                { "type": "slime", "x": 2050, "y": groundY },
                { "type": "slime", "x": 3050, "y": groundY },
                { "type": "slime", "x": 3250, "y": groundY },
                { "type": "slime", "x": 3450, "y": groundY },
                
                
                { "type": "rock", "x": 930, "y": groundY },
                { "type": "rock", "x": 1200,"y": groundY },
                { "type": "rock", "x": 1650,"y": groundY },
                { "type": "rock", "x": 2599,"y": groundY },
                { "type": "rock", "x": 3600,"y": groundY },
                { "type": "rock", "x": 3800,"y": groundY },
                
                { "type": "phantom", "x": 800, "y": groundY },
                { "type": "phantom", "x": 1400, "y": groundY },
                { "type": "phantom", "x": 2450, "y": groundY },
                { "type": "phantom", "x": 2200, "y": groundY },
                { "type": "phantom", "x": 3900, "y": groundY },
                
                
                { "type": "creeper", "x": 1300, "y": groundY },
                { "type": "creeper", "x": 1700, "y": groundY },
                { "type": "creeper", "x": 2600, "y": groundY },
                { "type": "creeper", "x": 2850, "y": groundY },
                
                
                { "type": "goldapple", "x": 1050, "y": groundY - 90},
                { "type": "goldapple", "x": 1650,"y": groundY - 90 },
                { "type": "goldapple", "x": 3600,"y": groundY - 90 },
                
                
                { "type": "toothless", "x": 4500, "y": groundY },
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
                
                if(gameItemObject.type === 'goldapple') {
                  createEnemyApple(gameItemObject.x, gameItemObject.y);
                }
                
                if(gameItemObject.type === 'toothless'){
                    createEnemytoothless(gameItemObject.x, gameItemObject.y);
                }
                    if(gameItemObject.type === 'rock'){
                    createObstacleRock(gameItemObject.x, gameItemObject.y);
                }
                
        }
            
        //Objects

   
        function createObstacleSlime(x , y){
           
            var hitZoneSize = 20;
            var damageFromObstacle = 50;
            var slimeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            slimeHitZone.x = x - 2;
            slimeHitZone.y = y - 10;
            
            game.addGameItem(slimeHitZone); 
            
            var obstacleImage = draw.bitmap('img/Slime (2).png');
            slimeHitZone.addChild(obstacleImage);
            obstacleImage.x = -23;
            obstacleImage.y = - 32;
            obstacleImage.scaleX = .2;
            obstacleImage.scaleY = .2;
            
        
            
        };   
        
                function createObstacleRock(x , y){
           
            var hitZoneSize = 20;
            var damageFromObstacle = 50;
            var rockHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            rockHitZone.x = x - 2;
            rockHitZone.y = y - 10;
            
            game.addGameItem(rockHitZone); 
            
            var obstacleImage = draw.bitmap('img/rock.png');
            rockHitZone.addChild(obstacleImage);
            obstacleImage.x = -23;
            obstacleImage.y = - 52;
            obstacleImage.scaleX = .15;
            obstacleImage.scaleY = .15;
            
        
            
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
            enemy.velocityX = - 2;
            game.addGameItem(enemy);
            
            
            var creeper = draw.bitmap('img/Creeper.png');
             creeper.x = -25;
             creeper.y = - 70;
             creeper.scaleX = .8;
             creeper.scaleY = .8;
             
            enemy.addChild(creeper);

           enemy.onPlayerCollision = function (){
               game.changeIntegrity(-100);
               enemy.fadeOut();
           };
    
            enemy.onProjectileCollision = function() {
                    game.increaseScore(50);
                    enemy.fadeOut();
            };
                
        }
                
                     function createEnemytoothless(x , y){
 
            
            var enemy =  game.createGameItem('toothless', 25);
            enemy.x = x + 20;
            enemy.y= y - 70;
            enemy.velocityX = - 2;
            game.addGameItem(enemy);
            
            
            var toothless = draw.bitmap('img/toothless.png');
             toothless.x = -25;
             toothless.y = - 100;
             toothless.scaleX = .8;
             toothless.scaleY = .8;
             
            enemy.addChild(toothless);

           enemy.onPlayerCollision = function (){
               game.changeIntegrity(-1000);
               
           };
    
            enemy.onProjectileCollision = function() {
                    game.increaseScore(5000);
                    enemy.fadeOut();
            };
                
        }   
                
                
                
                
       function createEnemyApple(x, y) {
           
           var reward = game.createGameItem('goldapple', 30);
           reward. x = x + 10;
           reward.y = y - 30;
           reward.velocityX = -2;
           game.addGameItem(reward);
           
                  
        var goldapple = draw.bitmap('img/golden apple.png');
            goldapple.x = -27;
            goldapple.y = - 42;
            goldapple.scaleX = .75;
            goldapple.scaleY = .75;
 
             reward.addChild(goldapple);

          reward.onPlayerCollision = function (){
             game.changeIntegrity(50);
             reward.fadeOut();
            };
        
        }   
  
                     
       
        
        // DO NOT EDIT CODE BELOW HERE
   };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}

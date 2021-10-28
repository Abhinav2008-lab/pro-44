
var canvas, gameState = 0 , playerCount = 0;
var database, form, player, game;

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth , displayHeight);

    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    
}
'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var players;
var ship;

function preload() {
  game.stage.backgroundcolor = '#4444FF';
  game.load.image('background', 'space.gif');
  game.load.image('player', 'player.gif');
  game.load.image('background', 'background.png');
  game.load.image('player', 'player.png');
}


function create() {
  background = game.add.tileSprite(0,0,800,600, 'background');
  background.autoScroll(-100,0);
  player = game.add.sprite(20,300, 'player');
  missle = game.add.sprite(
  game.physics.enable(player, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
  enemy.angle += -90;
  ship.scale.x = -5;
  ship.scale.y = -5;
}

function update() {
game.physics.arcade.overlap(missle, enemy, collisionHandler, null, this);

player.body.velocity.x = 0;
player.body.velocity.y = 0;

if (! missle.shooting) {
  missle.body.velocity.x = 0;
  missle.body.velocity.y = 0;
  missle.x = player.x + 105;
  missle.y = player.y + 72;
  missle.renderable = true;
 }

if missle x

 //move up
 if (cursors.up.isdown)
   player.body.velocity.y = 300;
function render() {
}

function collisionHandler(missle,enemy) {
  missileReset();
  enemy.kill();
}

function missileReset() {
  missile.shooting = false;
  missile.renderable = false;
  missile.body.velocity.x = 0;
  missile.body.velocity.y = 0;
  missile.x = player.x
  missile.y = player.y
  missile.renderable = true;
}

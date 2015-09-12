'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var player;
var ship;
var background;
var missile;
var enemy;
var cursors;

function preload() {
  game.stage.backgroundcolor = '#4444FF';
  game.load.image('background', 'space.gif');
  game.load.image('player', 'player.gif');
  game.load.image('background', 'background.png');
}


function create() {
  background = game.add.tileSprite(0,0,800,600, 'background');
  background.autoScroll(-100,0);
  missile = game.add.sprite(60,350, 'missile');
  player = game.add.sprite(20,300, 'player');
  enemy = game.add.sprite(600,300, 'enemy');
  game.physics.enable(player, Phaser.Physics.ARCADE);
  game.physics.enable(missile, Phaser.Physics.ARCADE);
  game.physics.enable(enemy, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
  player.scale.x = .5;
  player.scale.y = .5
}

function update() {
  game.physics.arcade.overlap(missile, enemy, collisionHandler, null, this);

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (! missile.shooting) {
    missile.body.velocity.x = 0;
    missile.body.velocity.y = 0;
    missile.x = player.x + 105;
    missile.y = player.y + 72;
  }



  //move up
  if (cursors.up.isdown) player.body.velocity.y = 300;
}

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

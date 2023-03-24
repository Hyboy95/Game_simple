/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function(){
    this.top += this.speed;
    console.log('ok: ' + this.top);
  }
  this.moveLeft = function(){
    this.left -= this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveUp = function(){
    this.top -= this.speed;
    console.log('ok: ' + this.top);
  }
}

var hero = new Hero('duck.png', 10, 30, 200, 150);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top === 10){
    hero.moveRight();
  } else if (hero.left >= window.innerWidth - hero.size && hero.top <= window.innerHeight - hero.size) {
    hero.moveDown();
  } else if (hero.left >= 0 && hero.top >= window.innerHeight - hero.size){
    hero.moveLeft();
  } else {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}
start();
var Game = function()
{
  // COMPOSITION
  this.persos = [
    new Gendarme( "gerard" )
    ,new Gendarme( "marianne" )
    ,new Pieton( "gerald" )
    ,new Pieton( "gertrude" )
    ,new Pieton( "bachar" )
    ,new Thief( "nicolas" )
  ];
  this.init();
};

/**
 *  Déplace tous les personnages
 */
Game.prototype.next = function()
{
  this.persos.forEach
  (
    function( perso )
    {
      // POLYMORPHISME
      if( perso instanceof Gendarme )
      perso.move
      (
        Math.round(Math.random()*200)
        ,Math.round(Math.random()*200)
      );
      console.log( perso );
    }
  )
  // for( var i=0, l=this.persos.length; i<l; i++ )
  // {
  //     console.log(this.persos[ i ].move());
  // }
};

/**
 *  Initialise les positions
 */
Game.prototype.init = function()
{
  this.persos.forEach
  (
    function( perso )
    {
      perso.move
      (
        Math.round(Math.random()*200)
        ,Math.round(Math.random()*200)
      );
    }
  )
}

Game.prototype.start = function()
{
  var self = this;
  setInterval
  (
    function()
    {
      // Prochaine étape du jeu
      self.next();
    }, 500
  )
}



var Gendarme = function( nom ){
  Personnage.call( this, nom );// super() // parent
}
var Thief = function( nom ){
  Personnage.call( this, nom );
}
var Pieton = function( nom ){
  Personnage.call( this, nom );
}

var Personnage = function( nom ){
  this.name = nom;
  this.x = this.y = 0;
}
Personnage.prototype.move = function( x, y )
{
  this.x += x;
  this.y += y;
};

Personnage.prototype.toString = function()
{
  return this.x +", "+this.y;
}

// Héritage de classe
Gendarme.prototype = Object.create( Personnage.prototype );
Thief.prototype = Object.create( Personnage.prototype );
Pieton.prototype = Object.create( Personnage.prototype );

Gendarme.prototype.move = function( x, y )
{
  // Super méthode
  Personnage.prototype.move.call( x/2, y/2 );
}


var monjeu = new Game();
monjeu.start();

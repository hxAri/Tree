
/*
 * Faiba.JS v1.0.0
 *
 * @author hxAri
 * @create 02.03-2022
 * @update 02.03-2022
 * @github https://github.com/hxAri/
 *
 */
(function( global, factory ) {
  if( typeof exports === "object" && typeof module !== "undefined" ) {
    module.exports = factory();
  } else {
    if( typeof define === "function" && define.amd ) {
      define( factory );
    } else {
      global.Faiba = factory();
    }
  }
}( this, function() {
  
  const STRAIGHT = atob( "JiM5NDc0OyAgIA==" );
  const MIDDLE = atob( "JiM5NTAwOyYjOTQ3MjsmIzk0NzI7IA==" );
  const SPACE = atob( "ICAgIA==" );
  const LAST = atob( "JiM5NDkyOyYjOTQ3MjsmIzk0NzI7IA==" );

  var obj = {};
    obj.toString = function( e ) {
      return Object.prototype.toString.call( e ).replace( /\[object\s*(.*?)\]/, `$1` );
    };
    obj.isDefined = function( e ) { return this.toString( e ) !== "Undefined"; };
    obj.isInteger = function( e ) { return this.toString( e ) === "Number"; };
    obj.isObject = function( e ) { return this.toString( e ) === "Object"; };
    obj.isArray = function( e ) { return this.toString( e ) === "Array"; };
    obj.isNull = function( e ) { return this.toString( e ) === "Null"; };
    obj.looper = function( e, s = "" ) {

      var n = 0;
      var r = "";

      var lk = MIDDLE;
      var la = STRAIGHT;

      if( this.isObject( e ) || this.isArray( e ) ) {
        for( let i in e ) {

          n++;

          if( Object.keys( e ).length === n ) {
            var lk = LAST;
            var la = SPACE;
          }

          r += s;
          r += lk;

          if( this.isInteger( i ) ) {
            if( this.isObject( e[i] ) || this.isArray( e[i] ) ) {
              r += "Array\n";
              r += this.looper( e[i], s + la );
            }
          } else {

            r += i + "\n";

            if( this.isObject( e[i] ) || this.isArray( e[i] ) ) {
              r += this.looper( e[i], s + la );
            } else {
              r += s;
              r += la;
              r += LAST;
              r += e[i] + "\n";
            }
          }
        }
      } else {
        r += s;
        r += LAST;
        r += this.toString( e ) + "\n";
      }
      return r;
    };
    obj.create = function( e ) {
      if( e.el.match( /\#([a-z0-9]+)/ ) ) {
        e.el = document.getElementById( e.el.replace( /\#([a-z0-9]+)/, `$1` ) );
      } else
      if( e.el.match( /\.([a-z0-9]+)/ ) ) {
        e.el = document.getElementsByClassName( e.el.replace( /\.([a-z0-9]+)/, `$1` ) )[0];
      } else {
        return false;
      }
      e.el.innerHTML = this.looper( e.data );
    };
  
  return obj;
  
}));

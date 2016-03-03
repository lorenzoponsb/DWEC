/**
 * Created by Lorenzo on 24/02/2016.
 */


var coachGate = {};
coachGate.gFunctions = {};
coachGate.gFunctions.isNumber = function (num) {
  return (typeof (num) === 'number');
};

coachGate.gFunctions.isBoolean = function (bool) {
  return (typeof (bool) === 'boolean');
};

coachGate.gFunctions.clone = function (obj) {

  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = coachGate.gFunctions.clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = coachGate.gFunctions.clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");

};

/**
 * Print on console.log() with styles
 *
 * Levels:
 *
 *    0: Error       // Red
 *    1: Waring      // Yellow
 *    2: Success     // Green
 *    3: Info        // Blue
 *    other: Info    // Blue
 *
 * Formats:
 *
 *    showMessage(var);                           // Prints a simple var with default color
 *    showMessage(number, var, ..);               // Prints all vars with 1º color
 *    showMessage(number, var, number);           // Prints var and number with 1º color
 *    showMessage(number, var, number, var);      // Prints 1º var with 1º color and 2º var with 2º color
 *    showMessage(number, var, number, var, var); // Prints 1º var with 1º color, 2º var with 2º color, 3º var with 1º color
 *
 * Usage:
 *
 *    base.showMessage = function(){
     *        coachGate.gFunctions.showMessage("PluginName", arguments);
     *    };
 *
 * @param pluginName
 * @param args[]
 */
coachGate.gFunctions.showMessage = function (pluginName, args) {

  function getColor(level) {

    switch (level) {

      // Error
      case 0:
        return 'color: #AA0000;';
      // Waring
      case 1:
        return 'color: #FFEA00;';
      // Success
      case 2:
        return 'color: #004A00;';
      // Info
      case 3:
        return 'color: #000AA0;';

    }
  }

  function print(level, text) {

    switch (level) {

      // Error
      case 0:
        console.exception(text);
        break;
      // Waring
      case 1:
        console.warn(text);
        break;
      // Success
      case 2:
        console.debug('%c' + text, 'color: #004A00;');
        break;
      // Info
      case 3:
        console.info('%c' + text, 'color: #000AA0;');
        break;
      // Object
      case 4:
        console.dir(text);
        break;
    }
  }


  var ini = 0;
  var defaultC = 3;

  try {
    if (coachGate.gFunctions.isNumber(args[0])) {
      defaultC = args[0];
      ini++;
    }

    console.groupCollapsed('%ccoachGate.' + pluginName + ':', getColor(defaultC));

    if (typeof (args) !== 'object') {
      print(defaultC, args);
    }

    for (; ini < args.length; ini++) {

      if (coachGate.gFunctions.isNumber(args[ini]) && (typeof (args[ini + 1]) !== 'object' || ini === 0)) {
        print(args[ini], args[ini + 1]);
        ini++;
      } else if (typeof (args[ini]) === 'object') {
        print(4, args[ini]);
      } else if (!args[ini]) {
        print(defaultC, 'undefined')
      } else {
        print(defaultC, args[ini]);
      }

    }

  } catch (e) {
    console.exception(e);
  }
  console.groupEnd();
};

coachGate.gFunctions.each = function (obj, callback) {

  for (var i = 0, len = obj.length; i < len; i++) {
    callback(i, obj[i]);
  }

  throw new Error("Unable to each obj! Its type isn't supported.");
};

coachGate.gFunctions.extend = function () {

  if (arguments.length === 0 || (arguments.length === 1 && typeof (arguments[0]) !== 'object')) {
    return {};
  }

  function extend(obj) {
    coachGate.gFunctions.each(obj, function (key, value) {

    })
  }

  var newObject = {};
  var recursivity = false;

  if (coachGate.gFunctions.isBoolean(arguments[0])) {
    recursivity = arguments[0];
  }

  if (arguments.length === 1) {
    recursivity = true;
    extend({})
  }


};


// Crear objecto desde fuera

var p = function(a,b){
  return new p.prototype.init(a,b);
};

p.prototype.variables = {"primera":"primera"};

p.prototype.init = function(a,b){
  this.variables[a] = b;
  return this;
};

p.prototype.sendVar = function(a,b){
  this.variables[a] = b;
};

p.prototype.getVars = function(){
  return this.variables;
};

// Crear objeto desde dentro

var m = function(a,b){

  var base = this;
  var fn = m.prototype;

  base.varsPrivadas = {"varOculta":"var"};

  fn.varsPublicas = {"varsPublicas":"var"};

  base.setPublica = function(a,b){
    fn.varsPublicas[a]=b;
  };



  fn.getPrivada = function(){
    return this.varsPrivadas;
  };

  fn.init = function(){
    return this;
  };

};

m.prototype.setPrivada = function(a,b){
  this.varsPrivadas[a] = b;
};


var coach = {prueba: "prueba"};

coach.gate = function(a){
  var b = [];
  b.push(a);
  this.name = this.prueba;
  this.set = function(a){
    b.push(a);
  };
  this.get = function(){
    return b;
  };



return this;
};

var a = coach.gate.bind();
console.log(coach);
console.log(coach.gate("e"));
console.log(a("a"));

var b = new coach.gate();

console.log(coach);
console.log(coach.gate("e"));
console.log(b);

var c = coach.gate();

console.log(coach);
console.log(coach.gate("e"));
console.log(c("a"));
/*

coach.gate = function(a){

  var b = [];
  b.push(a);
  this.name = this.prueba;
  this.set = function(a){
    b.push(a);
  };
  this.get = function(){
    return b;
  };

  return coach.gate.prototype.init();
};
coach.gate.prototype.init = function(){return this};
coach.gate.prototype.enabled = true;
coach.gate.prototype.myName = (function(){return this.name;})();
coach.gate.prototype.name = "prototype";

var d = coach.gate.bind();
console.log(coach);
console.log(coach.gate("e"));
console.log(d("a"));

var e = new coach.gate();

console.log(coach);
console.log(coach.gate("e"));
console.log(e);

var f = coach.gate();

console.log(coach);
console.log(coach.gate("e"));
console.log(f.constructor("e"));*/

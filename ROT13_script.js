/* this rotates a string: "lohel".rotate(3) is "hello" */
String.prototype.rotate = function(n) { // n is an integer
    n %= this.length;                   // if n too large: modulo
    var cut = n < 0 ? -n : this.length - n; // cutting point
    return this.substr(cut) + this.substr(0,cut);
};

function rot13_creator() {
    // compose the dictionary
    var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var keys = (alph + alph.toLowerCase()).split("");
    var values = (alph.rotate(13) +
                  alph.rotate(13).toLowerCase()).split("");
    var rot13_dict = {}; // dict: {A:'N', ..., z:'m'}
    keys.forEach( function(key, index){
        rot13_dict[key] = values[index]; } );
    
    // slightly changed to make the code shorter
    return function(text) {
        return text.split("")
               .map(function(x) {return rot13_dict[x] || x;})
               .join("");
    };
}

// make a rot13 function
var rot13 = rot13_creator();

window.onload = function() {
    // when the document is loaded, do this:
    // get the input field and the output paragraph 
    var input  = document.getElementById("input");
    var output = document.getElementById("output");
    
    // move focus to input field so user can start typing immediately
    input.focus();
    
    // bind the input's "key up" event to rot13 translation action
    input.onkeyup = function() {
        /* Your code here! */
        output.innerHTML = rot13(input.value);
    };
};
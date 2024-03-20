/* EXERCICE 1 */

function monMax(a,b) {
    if(a==b){
        return "a et b on la meme valeur"
    }
    if (a>b) {
        return a;
    } else {
        return b;
    }
    //ou
    /* 
    return Math.max(a,b)
    */
}

console.log(monMax(8,6));


/* EXERCICE 2 */

typeof variable=="number"
function calculer(a,b) {
    if (typeof a=="number" && typeof b=="number") {
        return Math.max(a,b);
    } else {
        return "Pas de nombre"
    }
}

console.log(calculer("8",6));

/* EXERCICE 3 */

a = document.getElementById("Saisie1").value
b = document.getElementById("Saisie2").value

if (typeof a=="number" && typeof b=="number") {
    console.log(calculer("8",6));
} else {
    console.log( "Pas de nombre");
}
function calculer(a,b) {
    return Math.max(a,b);
}

/* EXERCICE 5 */
function max4(a,b,c,d) {
    return Math.max(a,b,c,d);
}

/* EXERCICE 6*/
function max8(a,b,c,d,e,f,g,h){
    return Math.max(max4(a,b,c,d),max4(e,f,g,h));
}
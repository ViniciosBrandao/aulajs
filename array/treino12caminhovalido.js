/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/
function isValidWalk(walk) {
    let contadorW = 0;
    let contadorE = 0;
    let contadorN = 0;
    let contadorS = 0;

    if (walk.length !== 10) return false;

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'w':
                contadorW++;
                break;

            case 'e':
                contadorE++;
                break;

            case 'n':
                contadorN++;
                break;

            case 's':
                contadorS++;
        }
    }

    return (contadorN === contadorS && contadorW === contadorE);    
}
function isValidWalkForOF(walk) {
    if (walk.length !== 10) return false;

    let ns = 0;
    let ew = 0;

    for (const dir of walk) {
        if (dir === 'n') ns++;
        else if (dir === 's') ns--;
        else if (dir === 'e') ew++;
        else if (dir === 'w') ew--;
    }

    return ns === 0 && ew === 0;
}
function isValidWalkObjeto(walk) {
    const directions = {};
    
    if (walk.length !== 10) return false;

    for (const elemento of walk) {
       directions[elemento] = (directions[elemento] || 0) + 1;
    }


   return (directions["n"] === directions["s"] && directions["w"] === directions["e"]); 
}
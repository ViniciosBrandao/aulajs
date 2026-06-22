/*
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
*/
function arrayDiff(a, b) {
    let i = 0;

    while (i < a.length) {
        if (b.includes(a[i])) a.splice(i, 1);
        else i++;
    }

    return a;
}
function arrayDiffcomFor(a, b) {
    let i = 0;
    
    while (i < a.length) {
        let encontrou = false;

        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) { 
                a.splice(i, 1);
                encontrou = true;
                break; // ja achou nao precisa continuar comparando
            }
        }
        
        if (!encontrou) i++; // so avança se nao encontrou
    }

    return a;
}
// 3. filter (sem mutação)
function arrayDiffDeclarativa(a, b) {
    return a.filter(el => !b.includes(el));
}

let a = [1, 2, 2, 3, 4]; 
let b = [2, 2,];
console.log(arrayDiffcomFor(a,b));
//console.log(arrayDiff(a, b));
console.log(arrayDiffDeclarativa(a, b));

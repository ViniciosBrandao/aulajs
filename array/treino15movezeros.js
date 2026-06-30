/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZerosMutavel(arr) { // se é mutavel, isto é altera o array, é necessario tratar o indice e consequentemente o length
    const shallow = [...arr];
    let limit = shallow.length;

    for (let i = 0; i < limit; i++) {
        if (shallow[i] === 0) {
            shallow.push(...shallow.splice(i, 1));
            i--;
            limit--;
        }
    }
    //arr.push(...removed); // return aqui devolve o length do array. Isto porque push é um método mutável, apenas métodos imutáveis retornam o novo array
    return shallow;
}
function moveZerosImutavel(arr) {
    const zeros = arr.filter(element => element === 0);
    const rest = arr.filter(element => element !== 0);

    //rest.push(...zeros); muta rest dando push nos elementos de zeros
    return [...rest, ...zeros]; // outra forma, primeiro os elementos de rest, depois de zeros  
}
console.log(moveZerosMutavel([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]));
console.log(moveZerosImutavel([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]));
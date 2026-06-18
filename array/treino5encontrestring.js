/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/
function findNeedleComFor(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") return `found the needle at position ${i}`
    }
}
function findNeedleDeclarativa(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
// Processamento e Saída da Informação
let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];

console.log(findNeedleComFor(haystack_1));
console.log(findNeedleComFor(haystack_2));
console.log(findNeedleDeclarativa(haystack_1));
console.log(findNeedleDeclarativa(haystack_2));
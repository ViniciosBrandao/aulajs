/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/
function queueTime(customers, n) { // return o tempo total para atender todos clientes
    const time = new Array(n).fill(0); // cria um array length n, cada elemento sendo 0. n = 3 => [0, 0, 0]

    for (let i = 0; i < customers.length; i++) {
        time[0] +=  customers[i];
        time.sort((a, b) => a - b); // muta o array em ordem crescente
    }

    return time.at(-1); // return no ultimo elemento, no caso, o maior, representando o caixa mais lento que é o tempo total de fila
}
function queueTimeMax(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w); // (...w) spread operator distribui os elementos do array [1,2,3] => (1, 2, 3)
}
console.log(queueTime([2,2,3,3,4,4], 2));


'use strict';

const kPrimes = require('./primes.js').kPrimes;

const atkinPrimeGenerator = (num) => {
   let filter = [,,true,true];

   for (let i = 1; i <= num; i++) {
     let i2 = i*i;
     for (let j = 1; j <= num; j++) {
       let j2 = j*j;
       let firstQuad = ((4 * i2) + j2)
       let secondQuad = ((3 * i2) + j2)
       let thirdQuad = ((3 * i2) - j2)

       if(i2 + j2 < num && firstQuad <= num && (firstQuad % 12 === 1 || firstQuad % 12 === 5)) {
         filter[firstQuad] = !filter[firstQuad];
       }
       if(i2 + j2 < num && secondQuad <= num && (secondQuad % 12 === 7)) {
         filter[secondQuad] = !filter[secondQuad];
       }
       if(i2 + j2 < num && i > j && thirdQuad <= num && (thirdQuad % 12 === 11)) {
         filter[thirdQuad] = !filter[thirdQuad];
       }
     }
   }

   for (let k = 5; k <= num; k++) {
     if (filter[k]) {
         let m = k * k;
         for (let l = m; l <= num; l += m) {
             filter[l] = false;
         }
     }
   }
   let result = [];
   for(let n = 2, len = filter.length; n <= len; n++) {
     if(filter[n] === true) {
       result.push(n);
     }
   }

   return result;
};


let testVal = 12998;
console.time('sieve-test');

let result = atkinPrimeGenerator(testVal);
let resultLength = result.length;

console.timeEnd('sieve-test');

let flag = true;

for(let j = 0; j < result.length; j++) {
  if(result[j] !== kPrimes[j]) {
    flag = false + ' result[j]: ' + result[j] + ' kPrimes[j]: ' + kPrimes[j] + ' j: ' + j + ' result[j - 1]: ' + result[j - 1];
  }
}

console.log('sieve-match: ', flag, result[result.length - 1]);









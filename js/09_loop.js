//loop
//1 for loop
//2 while loop
//3 do while loop

//1 for loop

let numbers = [1,2,3,4,5];
let sum = 0;

for(let i = 0; i < numbers.length; i++){  //Loop tab tak chalega jab tak i ki value numbers array ke length se chhoti hai.
    sum += numbers[i]; //sum = sum + numbers[i] Yahaan sum variable mein numbers[i] ka value add hota ja raha hai.
}

console.log(sum); //15

//2 while loop

let j = 0;
let total = 0;

while(j < numbers.length){  //Loop tab tak chalega jab tak j ki value numbers.length se chhoti hai. Jaise hi j numbers.length ke barabar ya bada ho jayega, loop ruk jayega.
    total += numbers[j];
    j++;
}

console.log(total); //15

//3 do while loop

let k = 0;
let total2 = 0;

do{  //Loop tab tak chalega jab tak k ki value numbers.length se chhoti hai. Jaise hi k numbers.length ke barabar ya bada ho jayega, loop ruk jayega.
    total2 += numbers[k];
    k++;
}while(k < numbers.length);
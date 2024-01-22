function solveProblem(setOne, setTwo) {
    let sum = 0;
   

    for (let i = 0; i < setOne.length; i++) {
       let found = false;
   
       for (let j = 0; j < setTwo.length; j++) {
         if (setOne[i] === setTwo[j]) {
           found = true;
           break;
         }
       }
   
       if (!found) {
         sum += setOne[i];
       }
    }
   

    for (let i = 0; i < setTwo.length; i++) {
       let found = false;
   
       for (let j = 0; j < setOne.length; j++) {
         if (setTwo[i] === setOne[j]) {
           found = true;
           break;
         }
       }
   
       if (!found) {
         sum += setTwo[i];
       }
    }
   
    return sum;
   }
   
   
   let setOne = [1, 2, 3, 4, 5];
   let setTwo = [4, 5, 6, 7, 8];
   
   console.log(solveProblem(setOne, setTwo)); 
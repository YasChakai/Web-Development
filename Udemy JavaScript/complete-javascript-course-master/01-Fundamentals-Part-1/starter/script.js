// let js = "amazing";
// console.log(40 + 8 + 23 - 10);


// console.log("Yassin");
// console.log("23"); 


// let firstName = "Yassin";


// console.log(firstName);


// let PI = 3.1415;

// let myFirstJob = "Coder";

// // console.log(myFirstJob);




 

// let javascriptIsFun = true;
// console.log (javascriptIsFun);
// // console.log (true);

// console.log (typeof javascriptIsFun);
// // console.log (typeof 32);
// // console.log (typeof 'ýassin');


// jacascriptIsFun = 'YES!';
// console.log (typeof javascriptIsFun);



// let year;
// cosnole.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);

// console.log(typeof null)


// let age = 30;
// age = 31;
// console.log(age)

// const birthYear = 1991;
// // birthYear = 1990;
// console.log(birthYear)



// var job = 'programmer';
// job = 'teacher';

// // lastName = 'Chakai';

// // console.log(lastName);
// const now = 2038
// const ageJonas = now - 1991;
// const ageSarah = now - 1995;
// console.log(ageJonas,ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2**3);	
// // 2**3 means 2 to the power of 3 = 2*2*2*


// const firstName = 'Jonas';
// const lastName = 'Mokmez';

// console.log(firstName +' '+ lastName);


// let x = 10 + 5;     

// x += 10;    
// x *= 4;
// x++;  /// +1
// x--;      //-1
// console.log(x);

// // Comparison operators 

// console.log (ageJonas > ageSarah);

// //  > , < , >= , <= ,

// console.log(ageSarah >= 18);


// const isFullAge = ageSarah >= 18;

// // console.log (now - 1991 > now - 2018)


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;



// console.log (now - 1991 > now - 2018);


// let x, y;
// x = y = 25 - 10 - 5; 

// console.log(x,y);

// const avarageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas,ageSarah, avarageAge )

// Avarage score


// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �


// let marksHeights = 1.69;
// let marksWeight = 78;

// let markBmi = marksWeight / (marksHeights * marksHeights);

// console.log (markBmi);






// let johnHeights = 1.95;
// let johnWeight = 92;

// let johnBmi = johnWeight / (johnHeights * johnHeights);

// console.log (johnBmi);

// const markHigherBMI = markBmi > johnBmi;

// console.log (markHigherBMI);


// const firstName = 'Yassin';
// const job = 'programmer';   
// const birthYear = 1998;
// const year = 2020;

// const yassin = "I'm "  + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

// console.log (yassin);


// const yassinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;

// console.log(yassinNew);

// console.log(`Just a regular string...`);


const age = 15;


if(age >= 18) {

    console.log('Yassin can start driving license ');





} else {
    const yearsLeft = 18 - age;
    console.log(` You need to whait ${yearsLeft} years before you can drive `);

}



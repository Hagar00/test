 //var age = prompt("please enter your age : ");
//    while(age < 0){
//        age = prompt("please enter the correct age ");
//     }

    do{
       var age = prompt("please enter the correct age ");
    }while(age<0)


        switch (true)
        {
            case age >= 1 && age <= 10 :
                alert("child");
                break;
            case age >=11 && age <= 18 :
                alert("teenager");
                break;
            case age >= 19 && age <= 50:
                alert("Grown up ");
                break;
            case age > 50 :
                alert("old");
                break;
        }
    
     /******************************************************/
    function countVowel(str) { 

        const count = str.match(/[aeiou]/gi).length;
        return count;
    }
    const string = prompt('Enter a string: ');
    
    const result = countVowel(string);
    
   alert (`the unmber of vowel = ${result}`);
   
    /************************** ***********************************/
    
    var hours = prompt("enter the hours ");
    var ti = (hours >= 12)? 'pm' : 'am';
    hours = (hours > 12)? hours -12 : hours;
    hours = (hours == '00')? 12 : hours;
    alert (`${hours} ${ti}`);






































/*
var fName = prompt("please enter your first name : ");
var lName = prompt("please enter your last name : ");
confirm("are you sure to confirm...");
var birthDay = prompt("enter your age : ");
var date = 2022 - birthDay;
if(fName != null && lName != null ) {
    
    alert(`hello ${fName} ${lName} and your age is : ${date}`);
    document.writeln(`hello ${fName} ${lName} and your year : ${date} `);
}
else 
{
    alert("please enter your name");
    document.writeln("please enter your name");
}
alert(`hello ${fName} ${lName} and your age is : ${date} years old`);

let fNum =Number(  prompt ("please enter first number : "));
let lNum =Number(  prompt ("please enter first number : "));
var result = fNum + lNum;
alert(`${fNum} + ${lNum} = ${result}`)

document.write(`${fNum} + ${lNum} = ${result}`) ;






/*
function sum (fNum,lNum){
    var result = fNum+ lNum;
    return result;
}
document.write(`${fNum} + ${lNum} = ${sum()}`);

switch (fName != null && lName != null && birthDay!= null) {
    case 0 : 
        document.write(`hello ${fName} ${lName} .. your age is : ${birthDay}`);
    break;
    case 1 : 
        document.write(`please enter`)

}
*/


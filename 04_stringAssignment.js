function length(str){

    var list = str.split(" ");
    var result =  list[list.length-1].length;
    console.log(result);
}

length("Hello World");
length("fly me to the moon");

function isAnagram(str1, str2){

    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();


    if(str1.length !== str2.length){

        return false;
    }

    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    return str1 === str2;


}

const check1 = isAnagram('silent', 'listen');
const check2 = isAnagram('Hello', 'World');

console.log(check1);
console.log(check2);

function checkPalindrome(string) {

    const length = string.length;

    for(let i=0; i<length/2; i++){

        if(string[i] !== string[length-1-i]){

            return 'Its not a palindrome';
        }
    }
    return 'Its a palindrome'
}

const check = checkPalindrome('madam');
console.log(check);
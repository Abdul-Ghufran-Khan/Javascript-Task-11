// Question 1
var First_Name = prompt("ENTER YOUR FIRST NAME")
var Last_Name = prompt("ENTER YOUR LAST NAME")
var Full_Name = First_Name + " " + Last_Name
alert(`HELLO ${Full_Name}`)

// Question 2
var mobile = prompt("ENTER YOUR FAVOURITE MOBILE PHONE")
document.write(`My favourite phone is : ${mobile} <br/>`)
var length = mobile.length
document.write(`Length of string is : ${length}`)

// line
document.write("<br/>")

// Question 3
var word = "Pakistani"
var index = word.indexOf("n")
document.write(`String : ${word}<br/>`)
document.write(`Index of 'n' : ${index}`)

// line
document.write("<br/>")

// Question 4
var word1 = "Hello World"
var index1 = word1.lastIndexOf("l")
document.write(`String : ${word1}<br/>`)
document.write(`Index of 'n' : ${index1}`)

// line
document.write("<br/>")

// Question 5
var word2 = "Pakistani"
var index2 = word2.charAt(3)
document.write(`String : ${word2}<br/>`)
document.write(`Character at index 3  is : ${index2}`)

// line
document.write("<br/>")

// Question 6
var first_name = prompt("ENTER YOUR FIRST NAME")
var last_name = prompt("ENTER YOUR LAST NAME")
var full_name = first_name.concat(last_name)
alert(`HELLO ${full_name}`)


// line
document.write("<br/>")

// Question 7
var city1 = "Hyderabad"
var city2 = city1.replace("Hyder", "Islam")
document.write(`City : ${city1}<br/>`)
document.write(`After replacement : ${city2}`)

// line
document.write("<br/>")

// Question 8
var str1 = "Ali and Sami are best friends. They play cricket and football together"
var str2 = str1.replaceAll("and" , "&")
document.write(str2)

// line
document.write("<br/>")

// Question 9
var string = "472"
document.write(`Value : ${string}<br/>`)
document.write(`Type : ${typeof(string)}<br/>`)
var number1 = Math.floor(string)
document.write(`Value : ${number1}<br/>`)
document.write(`Type : ${typeof(number1)}`)

// line
document.write("<br/>")

// Question 10
var input = prompt("Enter Word in small letters")
document.write(`Your input : ${input}<br/>`)
var cap_input = input.toUpperCase()
document.write(`Upper case : ${cap_input}<br/>`)

// line
document.write("<br/>")

// Question 11
var input1 = prompt("Enter word in small letter")
var after = input1.charAt(0).toUpperCase()+ input1.slice(1)
document.write(`Input : ${input1}<br/>`)
document.write(`After : ${after}`)

// line
document.write("<br/>")

// Question 12
var dec = 35.36
var not_dec = dec*100
document.write(`Number : ${dec}<br/>`)
document.write(`Result : ${not_dec}`)

// line
document.write("<br/>")

// Question 13
var user_name = prompt("Enter Your Name")
var count = 0
for (let i = 0; i < user_name.length; i++) {
    var ch = user_name.charCodeAt(i)
    if (ch == 33 || ch == 44 || ch == 46 || ch == 64)
    {
       count++
    }
}
if (count >= 1) {
    console.log(`${user_name} contain special character Please enter valid name`);
}
else
{
    console.log(`${user_name} doesn"t contain special character`);
}

// line
document.write("<br/>")

// Question 14
var item = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt("Welcome to ABC Bakery, what do you want to order sir?")
var count = 0

for(let i = 0 ; i < item.length ; i++) {
    if (userInput.toLowerCase() == item[i]) {
        console.log(`${item[i]} is available at index ${i} in our bakery`)
        count++
        break;
    }
} 
if (count != 1){
   console.log(`We are sorry, ${userInput} is not avaible in our bakery`)
}

// line
document.write("<br/>")

// Question 16
var uni = "University of Karachi"
var arr = uni.split("")
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}`);
}

// line
document.write("<br/>")

// Question 17
var input2 = prompt("Enter string")
console.log(`User Input : ${input2}`);
var last_alpha = input2.charAt(input2.length - 1)
console.log(`Last character of input : ${last_alpha}`);

// line
document.write("<br/>")

// Question 18
var str3 = 'The quick brown fox jumps over the lazy dog'
var con = str3.split(" ")
var counts = 0
console.log(`Title : ${str3}`);
for (let i = 0; i < con.length; i++) {
    if (con[i][0] == "t" || con[i][0] == "T")
    {
        counts++
    }
}
console.log(`There are ${counts} occurrence of the word "the"`);
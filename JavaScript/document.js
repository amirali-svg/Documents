// variables

let userage = 20
console.log(userage)

userage = 9
console.log(userage)

const price = 90000
console.log(price)

// String = متن
let username = 25
console.log(typeof username)
// Number = عددد
let age = 'Amir'
    console.log(typeof age)
// Boolean = True , False
let isLogin = true
console.log(typeof isLogin)
// تبدیل کردن فرمت
// 1
let userage2 = String(25) 
console.log(userage2)

let isLogin2 = true
console.log(typeof String(isLogin2))
// 2
let age2 = "25"
console.log(age)
console.log(typeof age)

let got = Number(age2)
console.log(typeof got)
// 3
let castedage2 = +age
console.log(castedage2)
console.log(typeof castedage2)
// 4
let number = 1
console.log(number)
console.log(typeof number)

let boolnumber = Boolean(number)
console.log(boolnumber)
console.log(typeof boolnumber)

// getting data of user

let age = +prompt("Please enter your age", "18") 

alert(`You are ${age} years old!`)

// عملیات های ریاضی

let number1 = 12
let number2 = 3
let number3 = 5
let plus = number1 + number2
let minus =  number1 - number3
let multi = number2 * number3
let division = number1 / number2
let remaining = number1 % number2
let power = number1 ** number3

console.log(plus)

console.log(minus)

console.log(multi)

console.log(division)
// تقسیم

console.log(remaining)
// باقی مانده

console.log(power)
// توان

// تمرین ماشین حساب

let num1 = Number(prompt("enter num1:"))
let num2 = Number(prompt("enter num2:"))

let plus = num1 + num2 
let minus = num1 - num2
let multi = num1 * num2
let devide = num1 / num2

alert(plus)
alert(minus)
alert(multi)
alert(devide)



let age = +prompt("Please enter your age", "18") 

if (age < 18){
    alert("خیلی بی ادبی")
    
}else{
    alert("خوش امدید")
}


let price = +prompt("لطفا مبلغ را وارد کنید")
let discount = +prompt("لطفا درصد تخفیف را وارد کنید")
let finalprice = price - (price / 100) * discount

alert(finalprice)

// عملگر های دیگر

let num1 = 12
let num2 = 10

console.log(num1 == num2)
console.log(num2 == "12")

console.log(num2 === "12")

console.log(num1 != num2)
console.log(num1 !== num2);
console.log(num1 !== 1);

console.log(num1 < num2);
console.log(num1 > num2);

console.log(num1 <= 12);
console.log(num1 >=12);

console.log("js" === "js");

console.log( true == 1)
console.log( false == 0)

// تمرین با شرط ها

// محاسبه زوج بودن عدد

let num = +prompt("enter num1:")

if(num % 2 == 0){
    alert("true")
}
else{
    alert("false")
}

// میانگین

let num1 = +prompt("enter num1:")
let num2 = +prompt("enter num2:")
let num3 = +prompt("enter num3:")

let resault = (num1 + num2 + num3) / 3

alert(resault)

// تشخیص سن

let age = +prompt("Enter your age")

if (age <= 18){
    alert("سن شما کمتر از ۱۸ است")
}
else{
    alert("سن شما بیشتر از ۱۸ است")
}

// توان

let  num1 = +prompt("Enter num1:")
let  num2 = +prompt("Enter num2:")

let resault = num1 ** num2

alert(resault)

// محاسبه سن

let age = +prompt("سال تولد خود را وارد کنید")
alert( "سن شما برابر است با:" + (1403 - age))

// دقیقه
let userminuts = +prompt("دقیقه را وارد کنید")

let hours = Math.floor(userminuts / 60)
let minuts = userminuts % 60

alert(hours + "H, " + minuts + "M")

// تعیین سطح نمره

let grade = +prompt("لطفا نمره را وارد کنید")

if (grade > 20){
    alert("عدد صحیح نمیباشد")
} else{
    if(grade >= 15){
        alert("A")
    } else if(grade >= 12){
        alert("B")
    } else{
        alert("c")
    }
}

let grade = +prompt("لطفا نمره را وارد کنید")

if (isNaN(grade)){
    alert("لطفا یک عدد وارد کنید")
} else{
    if (grade > 20){
        alert("عدد صحیح نمیباشد")
    } else{
        if(grade >= 15){
            alert("A")
        } else if(grade >= 12){
            alert("B")
        } else{
            alert("c")
        }
    }
}

// switch

let grade = +prompt("لطفا نمره را وارد کنید")

if (isNaN(grade)){
    alert("لطفا یک عدد وارد کنید")
} else {
    switch (true) {

        case grade > 20:{
            alert("عدد صحیح نمیباشد")
            break;
        }
        case grade >= 15: {
            alert("A")
            break;
        }
    
        case grade >= 12: {
            alert("B")
            break;
        }
    
        default:{
            alert("C")
            break;
        }
    }
}

// ternary cond

let num1 = +prompt("عدد اول را وارد کنبد")
let num2 = +prompt("عدد دوم را وارد کنید")

num1 * num2 ===10
? alert("مساوی با ۱۰")
: alert("مساوی نیست با ۱۰")

// دریافت سن و جنسیت کاربر و اعتبار سنجی انها با AND & OR

// AND

let age = +prompt("سن خود را وارد کنید")
let gender = prompt("جنیست را وارد کنید")

if (isNaN(age)){
    alert("please enter a number")
} else{
    if(gender === "F" || gender === "M"){
        if(gender === "F" || age < 18){
            alert("you dont have permission")
        } else{
            alert("you have permision")
        }
    }else{
        alert("the entered gender is wrong")
    }
}

// ریفکتور مثال بالا با استفاده از AND

let age = +prompt("سن خود را وارد کنید")
let gender = prompt("جنیست را وارد کنید")

if (isNaN(age)){
    alert("please enter a number")
} else{
    if(gender !== "F" && gender !== "M"){
        alert("please Enter M or F for gender")
    } else{
        if(age < 18 || gender === "F"){
            alert("you do not  have permission")
        } else{
            alert("you have permisson")
        }
    }
}  



// function

// function decpression

function plus () {
    let num1 = 1
    let num2 = 2

    alert(num1 + num2)
}
plus()

// exercise

function plus (a = 0,b = 0) {
    if (isNaN(a) || isNaN(b)){
        alert("enter a num")
    } else{
        alert(a * b)
    }
}
plus(+prompt("enter num1"),+prompt("enter num2"))




function iseven (a = 2){
    if(isNaN(a)){
        alert("please enter a number")
    }   else{
        if (a % 2 ===0){
            alert(a + " is even")
        } else{
            alert( a + " is not even")
        }
    }
}
iseven (+prompt("enter a number"))



function average (a = 0,b,c){
    if(isNaN(a) || isNaN(b) ||isNaN(c)){
        alert("please enter a number")
    }   else{
        alert(Math.floor((a + b + c) /3))
    }
}
average(+prompt("enter num1"),+prompt("enter num2"),+prompt("enter num3"))

function plus (a,b = 4) {
    if (isNaN(a) || isNaN(b)){
        alert("enter a num")
    } else{
        alert(a * b)
    }
}
plus(+prompt("enter num1"),+prompt("enter num2"))

// Default Value
function plus (n1 = 0, n2 = 0){
    console.log(n1, n2)
    console.log(n1 + n2);
}

plus()

// return
function plus (n1 = 0, n2 = 0){
    const resault = n1 + n2
    return resault
}
plus()

// حل تمرین محاسبه تعداد کرکتر های یوزرنیم و پسورد

let username = prompt("usernaem:")
let password = prompt("password:")

if( username.length < 3 || password.length < 8){
    alert("enter more charechters")
}else{
    alert("Welcome!")
}

// متود های کاربردی String ها

let user = "i love JS"

console.log(user.length)
console.log(user.trim())
console.log(user.includes("JS"))
console.log(user.search("JS"));


// In sesitive case کردن یک متن
let username = prompt("لطفا نام کاربری خود را وارد کنید")
if (username.toLowerCase() === "ali"){
    alert("خوش آمدید")
} else{
    alert("نام کاربری اشتباه است")
}

// تمرین پیدا کردن کلمه در جمله

let sentense = prompt("لطفا جمله ای را وارد کنید")
let word = prompt("لطفا کلمه ای را وارد کنید")

 alert(sentense.toLowerCase.includes(word.toLowerCase()))

//  راه حل بهتر تمرین بالا

let sentense = prompt("لطفا جمله ای را وارد کنید")
let word = prompt("لطفا کلمه ای را وارد کنید")

 let wordExisting = sentense.toLowerCase().includes(word.toLowerCase())

 if (wordExisting === -1){
     alert("کلمه مورد نظر یافت نشد")
 } else{
     alert("کلمه مورد نظر یافت شد")
 }

//  متود slice برای برش دادن یک متن

let user ="i love JS"

console.log(user.slice(2,6)); // love

// تمرین اعتبار ستجی ssl

let url = prompt("لطفا لینک را وارد کنید")

if (url.includes("https://")) {
    alert( url + " امن میباشد ")
} else {
    alert( url + " امن نمیباشد " )
}

//ریفکنور نمرین بالا با استفاده از Slice

let url = prompt("ادرس را وارد کنید")

let siteProtocol = url.slice(0,5)

if (siteProtocol === "https"){
   alert("امن است")
} else{
   alert("امن نیست")
}






// متد های math

console.log(Math.pow(2,3)) //هدد اول را به توان دومی میرساند

console.log(Math.sqrt(16)) // جذر یک عدد را محاسبه میکند

console.log(Math.abs(2.4)) // عدد مثبت را برمیگرداند

console.log(Math.min(2,3)) // کمترین عدد را برمیگرداند
console.log(Math.max(5,3)) // بزرگترین عدد را برمیگرداند

console.log(Math.floor(2.9)) // عدد را به پایین گرد میکند
console.log(Math.ceil(2.1)) // عدد را به بالا گرد میکند
console.log(Math.round(2.4)) // عدد را گرد میکند

console.log(Math.random()) // عدد تصادفی بین 0 تا 1 برمیگرداند  
console.log(Math.random() * 10) // عدد تصادفی بین 0 تا 10 برمیگرداند    
console.log(Math.floor(Math.random() * 10)) // عدد تصادفی بین 1 تا 10 برمیگرداند که عددی صحیح میشود



// تمرین کپچا

let code = Math.floor(Math.random() * 100000)
console.log(code)
let userCode = prompt(" :کد را وارد کنید " + code)

if (code == userCode) {
   alert("کد صحیح است")
} else{
   alert("کد اشتباه است")
}





// Assignment operators

let num = 10

num += 5
num =+ 5

num -= 5
num =- 5

num /= 5
num %= 5
num * 5
num ** 5

// تفواوت در جمع و تفریق
// حالت اول
// جمع

let num1 = 10

num1 =+ 5 // 5 //مفدار را جایگزین میکند
console.log(num1);

let num2 = 10 

num2 += 5 //15 // مقدار اول را جمع میکند و برمیگرداند
console.log(num2); 

// تفریق

let num1 = 10

num1 =- 5 //مقدار  -۵ را جایگزین میکند
console.log(num1);

let num2 = 10 

num2 -= 5 // ۵ تا کم میکند
console.log(num2); 


// جالت دوم
// اضافه یا کم کرن ۱

// اضافه کردن

let num1 = 10

++num1; //(پیش افزایش)دقیقا همون موقع یکی اضافه میکند و جاگزین مقدار قبلی میکند
console.log(num1);

let num2 = 10 

num2++; //(پس افزایش)اول مقدار اول را برمیگرداند بعداضافه میدهد 
console.log(num2)

// کم کردن

let num1 = 10

--num1; //(پیش کاهش)دقیقا همون موقع یکی کم میکند و جاگزین مقدار قبلی میکند
console.log(num1);

let num2 = 10 

num2--; //(پس کاهش)اول مقدار اول را برمیگرداند بعد کاهش میدهد 
console.log(num2)
..
let num = 5;
let result = num--;  // مقدار num برگردانده می‌شود، سپس کاهش می‌یابد
console.log(result); // 5 (مقدار قبلی num)
console.log(num);    // 4 (بعد از کاهش)







// حلفه for

for (let i = 0; i < 10; i++){
    console.log(i) // 0,1,2,3,4,5,6,7,8,9 اعداد 0 تا 9 را چاپ میکند
}

//

for (let i = 0; i <= 100; i +=2) {
    console.log(i); //اعداد روجفت از 0 تا 100 را چاپ میکند
}

// تمرین محاسیه مبلغ کل سبد خرید

let currentPrice;
let sum = 0

for(i = 1; i <= 5; i++){
   currentPrice = +prompt("لطفا مبلغ محصول" + i + "ام را وارد نمایید")
   sum += currentPrice

}
alert("مبلغ کل " + sum + " تومان می باشد")

// Trace:

//    sum    currentPrice
//    0        undefined
//    10       10
//    20       10
//    30       10
//    40       10
//    50       10

// تمرین محاسبه میانگین ۵ عدد ورودی از کاربر

let number;
sum = 0;
let average = 0;

for (i = 1; i <= 5; i++) {
   number = +prompt("لطفا عدد " + i + " را وارد نمایید")
   sum += number
}

average = sum / 5

alert("میانگین اعداد وارد شده " + average + " می باشد")

// تمرین محاسبه تعدادارقام یک عدد

let number = +prompt('Enter a number:', 0);
let count = 0;

if(isNaN(number)){
   alert('Invalid number');
} else {
   if(number === 0){
      count = 1;
   } else{
      for(i = 0; number / 10 != 0; i++){
         count++;
         number = Math.floor(number / 10);
      }
   }
   alert("Number of digits: " + count);
}

// Tracing 

// number   count   i
// 123      0       0
// 12       1       1
// 1        2       2
// 0        3       3

// حل تمرین مجموع ارقام ورودی کاربر

let number = +prompt('Enter a number:', 0);
let sum = 0;

if(isNaN(number)){
   alert('Invalid number');
} else {
   if(number === 0){
      count = 0;
   } else{
      for(i = 0;number / 10 != 0 ; i++){
         sum += number % 10;
         number = Math.floor(number / 10);
      }
   }
   alert("Number of sum: " + sum);
}

// Tracing

// numebr   sum   i
// 123      0     0
// 12       3     1
// 1        5     2  
// 0        6     3

// 123 % 10
// 3
// Math.floor(123 / 10)
// 12

// 12 % 10
// 2
// Math.floor(12 / 10)
// 1

// 1 % 10
// 1
// Math.floor(1 / 10)
// 0




// حلقه while

let i = 0
while (i < 10){
    console.log(i)
    i++
}

// تمرین محاسبه تعداد ارقام عدد ورودی کاربر

let number = +prompt('Enter a number', 0);
let count = 0;
let i = 0;

if (isNaN(number)) {
  alert('Please enter a valid number');
} else {
   if( number === 0) {
      count = 1;
   } else{
      while ( number / 10 != 0){
         count++
         number = Math.floor(number / 10);
         i++
      }
   }
   alert(" The number of digits in the number is " + count);
}

// حل تمرین مجموع ارقام ورودی کاربر

let number = +prompt('Enter a number?', 0);
let sum = 0;
let i = 0;

while (number / 10 != 0) {
   sum += number % 10
   number = Math.floor(number / 10)
   i++
}

alert("the sum of the digits is " + sum);

// ترکیب این دو تمرین

let number = +prompt('Enter a number?', 0);
let sum = 0;
let i = 0;

while (number / 10 != 0) {
   sum += number % 10
   number = Math.floor(number / 10)
   i++
}

alert("the sum of the digits is " + sum + "\n" + "and the number of digits is " + i) 

// حل تمرین نمایش اعداد زوج در محدود اعداد ورودی کاربر

let = number1 = +prompt('Enter the first number');
let = number2 = +prompt('Enter the second number');

let minNumber = Math.min(number1, number2);
let maxNumber = Math.max(number1, number2);

if (minNumber % 2 === 0){
   
while (minNumber <= maxNumber){
   console.log(minNumber);
   minNumber += 2 ;
}

} else{
   minNumber++
   while (minNumber <= maxNumber){
      console.log(minNumber);
      minNumber += 2 ;
   }
}

// حل تمرین محاسبه میانگین اعداد ورودی به تعداد دلخواه کاربر

let number = 0
let sum = 0
let count = 0

while (number != -1) {
   sum += number
   number = +prompt("enter Number" + "\n" + "if you don't have Number enter -1")

   if(number != -1) {
      count++
   }
}

let average = sum / count

alert("sum: " + sum + "\n" +
      "count: " + count + "\n" +
      "average: " + average 
)

console.log(average)


// حلفه Do..while

do{
    کد های حلقه
} while(شرط اتمام حلقه)

// حل تمرین محاسبه توان اعداد با 3 حلقه مختلف

let num1 = +prompt("enter num1")
let num2 = +prompt("enter num2")

function power (num1, num2) {
   let power = 1;
   // * for loop//

   // for(let i = 0; i < num2; i++) {
   //     power *= num1;
   // }

   // * while loop//

   // let i = 0
   // while(i < num2){
   //    power *= num1;
   //    i++
   // }

   // * Do...while loop//

   // let i = 0;
   // do {
   //    power *= num1;
   //    i++;
   //  } while (i < num2);

   // alert("Power: " + power)
}

power(num1, num2);






// Arrays

let users = ["Amir", "Ali", "Mmd"]

users.pop()
users.push("Parsa")

user.shift()
user.unshift("Amirreza")


//حل تمرین محاسبه میانگین اعداد ورودی به تعداد دلخواه کاربر با آرایه

let userNumber = 0;
let userNumbers = [];
let sum = 0

while (userNumber !== -1) {
   userNumber = +prompt("enter Number" + "\n" + "if you don't have Number enter -1")

   if(userNumber != -1) {
      userNumbers.push(userNumber)
   }
}

for (let i = 0; i < userNumbers.length; i++) {
   sum += userNumbers[i]
}

let average = sum / userNumbers.length

alert("average: " + average)

// تمرین طراحی سیستم ثبت نام کاربر در سایت




let users = [
    {id:1, firstName: "Ali",lastName:"Goodarzi" , age:22, email:"Ali@gmail.com"},
    {id:2, firstName: "Amir",lastName:"Noori" , age:22, email:"Amir@gmail.com"},
    {id:3, firstName: "Reza",lastName:"Foroghi" , age:22, email:"Reza@gmail.com"}
 ]
 
 // دریافت اطلاعات از کاربر
 let firstName = prompt("Enter first name")
 let lastName = prompt("enter last name")
 let age = +prompt("enter age")
 let email = prompt("enter email")
 
 // اعتبار سنجی اطلاعات
 
 if (firstName.length < 3 || firstName.length > 10) {
    alert("please enter a valid first name")
 }  else{
    if (lastName.length < 3 || lastName.length > 15) {
       alert("please enter a valid las name") 
    } else {
       if (isNaN(age) || age < 18){
          alert("please enter valid informations")
       } else{
          alert("Registration was successful!")
          // قرار دادن اطلاعات در object
 
          let newUser = {
          id:users.length + 1,
          firstName:firstName,
          lastName:lastName,
          age:age,
          email:email
          }
 
          users.push(newUser)
       }
    }
 }
 
 console.log(users); 


 //حل تمرین نمایش اطلاعات کاربران

 let users = [
    {id:1, firstName: "Ali",lastName:"Goodarzi" , age:22, email:"Ali@gmail.com"},
    {id:2, firstName: "Amir",lastName:"Noori" , age:22, email:"Amir@gmail.com"},
    {id:3, firstName: "Reza",lastName:"Foroghi" , age:22, email:"Reza@gmail.com"}
 ]
 
 users.forEach(function (user) {
    console.log("Name: " + user.firstName + "\nage: " + user.age + "\nemail: " + user.email);
 });

//  متد includes برای جستچوی استرینگ ها و اعداد در ارایه

let users = ["amir", "amin"]

console.log(users.includes("amin")); // true
console.log(users.includes("amin", 1)); // false //هدد بعد از استرینگ نشان دهنده این است که از ایندکس چندم به بعد دنبال این عدد یااسترینگ بگرده


// متد some برای پیدا کردن ابچکت درون ارایه

let users = [
    {id:1, firstName: "Ali",lastName:"Goodarzi" , age:22, email:"Ali@gmail.com"},
    {id:2, firstName: "Amir",lastName:"Noori" , age:22, email:"Amir@gmail.com"},
    {id:3, firstName: "Reza",lastName:"Foroghi" , age:22, email:"Reza@gmail.com"}
 ];
 
 let isInUser = users.some(function (user) {
    return user.firstName === "amir";
 });

 //متد some یا حلقه some تا زمانی اجرا میشه که خروچی true بشه
 
 console.log(isInUser)

 // حل تمرین فروشگاه با قابلیت سبد خرید

 let products = [
    {id: 1, name: "ps5", qty: 10, price: 40},
    {id: 2, name: "s25", qty: 10, price: 70},
    {id: 3, name: "iphone16", qty: 0, price: 90},
    {id: 4, name: "laptop", qty:12, price: 100}
 ]
 let basket = [
    {id: 1, name: "ps5", price: 40},
    {id: 2, name: "laptop", price: 100}
 ]
 
 let search = prompt("Enter the product name:")
 
 if (search.length > 0){
    let isInShop = products.some(function(products) {
       return products.name === search && products.qty != 0
    });
 
    if(isInShop === true){
       let newBasketProduct = {
          id: basket.length + 1,
          name: search,
      };
 
      products.forEach(function(product) {
       if(product.name === search) {
          newBasketProduct.price = product.price
       }
      })
 
       basket.push(newBasketProduct)
 
      let totalPrice = 0
      basket.forEach(function(product) {
       totalPrice += product.price;
      }) 
 
      alert("your total basket price is " + totalPrice)
 
       console.log("Basket: " , basket);
       
    }  else{
       alert("The ordered product didn't find")
    }
 } else{
    alert("Please enter a name!")
 }

 //حل تمرین تعیین صلاحیت برای تماس کنفرانسی

 //مقدار بازگشتی
//true: اگر تابع تست برای همه عناصر آرایه مقدار true برگرداند
//false: اگر تابع تست برای حداقل یک عنصر مقدار false برگرداند

 let users = [
    {id: 1, age:20},
    {id: 2, age:24},
    {id: 3, age:19},
    {id: 4, age:30},
    {id: 5, age:17},
 ]
 
 let isAll = users.every(function(user){
    console.log(user)
    return user.age > 18;
 })
 
 if(isAll === true) {
    alert("You can make a setion")
 }  else{
    alert("You can not make a setion")
 }

 //متد find
 //متد find کل ایتم ها و object های ارایه را به دنبال شرطی که بهش دادیم میگرده و در صورت پیدا شدن اون رو بهمون برمیگردونه

let users = [
    {id: 1, age:20},
    {id: 2, age:24},
    {id: 3, age:19},
    {id: 4, age:30},
    {id: 5, age:17},
 ]
 
 let mainUser = users.find(function(user) {
    return user.id === 5 && user.age > 1 
 })
 
 console.log(mainUser);

//  متد findindex
// همان index است ولی بجای اینکه کل ابچکت را برگرداند فقط index ان را برمیگرداند مثلا ۰ یا ۱

let users = [
    {id: 1, age:20},
    {id: 2, age:24},
    {id: 3, age:19},
    {id: 4, age:30},
    {id: 5, age:17},
 ]
 
 let mainUser = users.findIndex(function(user) {
    return user.id === 5 || user.age < 18 
 })
 
 console.log(mainUser);

 //حل تمرین فراموشی رمز عبور

 let users = [
    {username: 1, password: 6},
    {username: 2, password: 7},
    {username: 3, password: 8},
    {username: 4, password: 9},
    {username: 5, password: 10},
 ]
 
 let userName = prompt("Enter your username:")
 
 if(userName.trim().length === 0){
    alert("username hasn't entered, please enter it")
 } else{
    let mainUser = users.findIndex(function(user) {
       return user.username == userName
    })
    
    if (mainUser !== -1) {
       alert(users[mainUser].password);
    } else {
       alert("User not found");
    } 
 }

 //متد splice

 let users = [ "amir", "ali", "amirreza", "sasan"]

//Splice
// 2 Param = Remove item
// +3 Param = Add item

users.splice(1, 1) //"alir" را پاک میکند

users.splice(0, 1 , "ghdir") // "amir" رو پاک میکنه و ghdir رو جایگرین میکنه

//حل تمرین فروشگاه آنلاین پیشرفته

let products = [
   {id: 1, name: "ps5", qty: 10, price: 40},
   {id: 3, name: "iphone16", qty: 0, price: 90},
   {id: 4, name: "laptop", qty:12, price: 100},
   {id: 2, name: "s25", qty: 10, price: 70},
   {id: 2, name: "PocoF4", qty: 10, price: 70},
   {id: 2, name: "Desktop", qty: 10, price: 70},
]
let basket = [
   {id: 1, name: "ps5", price: 40},
   {id: 2, name: "laptop", price: 100},
]

let choice = +prompt("1.Remove product from basket\n2.Add product to the basket")

if(choice === 1 || choice === 2) {
   if(choice === 1){
      let removeName = prompt("Enter the name of the product you want to remove:")
   
      if(removeName.length > 0){
         inBasket = basket.some(function(basketItem) {
            return basketItem.name === removeName
         })
         if(inBasket === true){
            let itemIndex = basket.findIndex(function(basketItem) {
               return basketItem.name === removeName
            })
            basket.splice(itemIndex, 1)
            alert(removeName + " removed successfuly!")
   
            console.log(basket);
         }
      }
   
   
   } else{
      let productName = prompt("Enter the name of the product that you want to add:")
   
      if(productName.length > 0){
         let inShop = products.some(function(product) {
            return product.name === productName && product.qty != 0
         })
      
         if(inShop === true){
            let newBasketProduct = products.find(function(product) {
               return product.name === productName
            })
   
            basket.push(newBasketProduct)
            alert(productName + " added successfuly!")
   
            console.log(basket);
            
         } else{
            alert("The ordered product didn't find")
         }
      }
   }
} else{
   alert("please enter 1 or 2")
}


// متد filter

// استفاده در ابجکت

let users = [
   {name: "amir", age:15, sport: "soccer"},
   {name: "farzad", age:17, sport:"handball"},
   {name: "Reza", age:25, sport: "vollyball"}
]


let filteredUsers = users.filter(function(user) {

   return user.age > 18

})

console.log("filteres users:",  filteredUsers);



//استفاده در ارایه

let admins = ["aii","farhad","mmd","ghadir","saeed"]

let filteredUsers = admins.filter(function(admin) {

   return admin.length > 4
})

console.log("filtered users:", filteredUsers);


// حل تمرین جستجو در سایت 

let weblogs = [
   "JS", "Java", "Python", "C++", "C#", "PHP", "Ruby", "Swift", "Go", "Rust",
]

let searchInput = prompt("Enter a search term:");

let searchResults = weblogs.filter( function(weblog){
   return weblog.toLowerCase().includes(searchInput.toLowerCase())
})

if (searchResults.length === 0){
   console.log("No results found");
} else {
   console.log("Search Results: ", searchResults);
}

//متد map برای انجام یه کاری روی تمام ایتم های ارایه هست

//متال با ارایه

let scores = [12, 15, 17, 20, 10, 14];

let mappedUsers = scores.map(function (score) {
   console.log(score);
   if(score > 15){
      return score + 10
   }

   return score
})

console.log(mappedUsers)

//مثال با ارایه با ابجکت

let users = [
   {name: "amir", age:15, sport: "soccer"},
   {name: "farzad", age:17, sport:"handball"},
   {name: "Reza", age:25, sport: "vollyball"}
]

let mappedUsers = users.map(function(user) {
   user.age = user.age + 10

   return user
})

console.log(mappedUsers)

// تمرین map و filter

const basket = [
   {id: 1, name: "water", price: 10},
   {id: 3, name: "chips",  price: 20},
   {id: 4, name: "specialSoda", price: 150},
   {id: 2, name: "nooshabe", price: 110},
   {id: 5, name: "panir", price: 50},
   {id: 6, name: "mast", price: 70},
]

//way 1 (filter method)

let filteredProduct = basket.filter(function(product) {
   return product.price < 100;
})

let postCost = filteredProduct.length

let sum = 0
basket.forEach(function(product) {
   sum += product.price 
})

let totalPrice = sum + postCost


console.log("Your total price is: " + totalPrice);

//way 2 (map method)

let postCost = 0
let sum = 0

basket.map(function(product) {
   if(product.price < 100){
      postCost += 1
   }

   sum += product.price
})

let totalPrice = sum + postCost


console.log("Your total price is: " + totalPrice);

// نکته 
// indexof = includes for Arrays whitout object
// findIndex = some for Arrays whit object

//چندتا متد ارایه و ابجکت جهت اشنایی
// ویدیو اموزشی: جلسه ۶۶ سطح مقدماتی

const users = ["amin", "amir", "qadir", "sasan", "ali"]; // amin/amir/qadir
const scores = [12, 34, 56, 56, 90, 43];
const students = [
  { id: 1, name: "amin", age: 24, score: 20 },
  { id: 2, name: "amir", age: 23, score: 19 },
  { id: 3, name: "babak", age: 19, score: 17 },
];
let number = 19;
let usernames = "amin-amir/ali";
let text = "abcdefjh";

// console.log(Array.isArray(number));
// console.log(scores.indexOf(56));
// console.log(scores.lastIndexOf(56));
// console.log(scores.slice(2, 4));
// console.log(scores.join("/"));
// console.log(scores.reverse());
// console.log(usernames.split("/"));

// console.log(text.padEnd(8, "x"));
console.log(text.padStart(8, "x"));

// scores.fill(51, 2, 4);

//حل تمرین تشخیص خوانایی

let word = prompt("enter the word")

let reversedWord = word.split("").reverse().join("");


if(reversedWord === word){
   console.log("true");
}else {
   console.log("false");
   
}

// حل تمرین TODOLIST

let toDoList = [
   {id:1, name:"callmom", condition:"false"},
   {id:2, name:"trainjs", condition:"false"},
   {id:3, name:"goout", condition:"false"}
];

let choice = +prompt("1.Add todo\n2.Remove todo\n3.Change todo condition");

if(choice == 1 || choice == 2 || choice == 3){
   if(choice === 1 || choice === 2){
      if(choice === 1){
         let newToDoName = prompt("Enter new todo name:");
         toDoList.push({id: toDoList.length + 1, name: newToDoName, condition: "false"});
      } else {
         let toDoRemoveName = prompt("Enter the name of the todo you want to remove:");
         let toDoIndex = toDoList.findIndex(function(toDoItem){
            return toDoItem.name === toDoRemoveName;
         });
   
         if(toDoIndex !== -1){
            toDoList.splice(toDoIndex, 1);
            alert("Todo removed successfully!");
         } else {
            alert("Todo not found.");
         }
      }
   } else {
      let changeConditionName = prompt("Enter the name of the todo you want to change the condition:");
   
      let inToDoList = toDoList.find(function(toDoListItem) {
         return toDoListItem.name === changeConditionName;
      });
   
      if (inToDoList) {
         let toDoNewCondition = prompt("Enter the new todo condition (true/false):");
         inToDoList.condition = toDoNewCondition;
         alert("Todo condition updated successfully!");
      } else {
         alert("The todo item couldn't be found.");
      }
   }
   console.log(toDoList);
} else{
   alert("Enter 1,2 or 3")
}

//حل تمرین چالشی Task Management

const tasks = {
   ali:["html", "css", "js"],
   reza:["react", "vue", "angular"],
   mohammad:["seo", "link building"],
   amir:["admi", "contact"],
}

let newTaskName = prompt("Please enter the new task")
let empleyName = prompt("Please ener the empley")


let empleyTasks = tasks[empleyName]
if(empleyTasks === undefined){
   alert("the worker doesnt exist")
} else{
   empleyTasks.push(newTaskName)
      console.log(tasks);
}

//حل تمرین فروش آنلاین بلیط

const Ostans = {
   tehran:["tehran", "eslamshahr", "firoozkooh"],
   alborz:["karaj", "mehrshahr", "gohardasht"],
   esfahan:["esfahan", "shahinshahr"]
}

let search = prompt("Please enter the ostan")
let resault = Ostans[search]
if(resault === undefined){
   console.log("the ordered ostan doesnt exist");
}else {
   console.log(resault);
   
}
//حل تمرین فروش بلیط

const Ostans = {
   tehran:["tehran", "eslamshahr", "firoozkooh"],
   alborz:["karaj", "mehrshahr", "gohardasht"],
   esfahan:["esfahan", "shahinshahr"]
}

let search = prompt("Please enter the ostan")
let resault = Ostans[search]

if(resault === undefined){
   alert("the ordered ostan doesnt exist");
} else{
   let citiesText = ""
   resault.forEach(function(city) {
   citiesText += city + "\n"
   });

   alert(citiesText); 
}

//حل تمرین ازمون

let qs = [
   {id:1, q:"1+1", answer:2},
   {id:2, q:"2+2", answer:4},
   {id:3, q:"3+3", answer:6},
   {id:4, q:"4+4", answer:8},
   {id:5, q:"5+5", answer:10},
]

let score = 0

qs.forEach(function(qItem) {
   let userAnswer = prompt(`${qItem.q}=?`);

   if(userAnswer == qItem.answer) {
      score += 20
   }

})

if(score == 100) {
   alert(`congratulations you got the complete score! ${score}` )
} else{
   alert(`your score is ${score}`)
}

//تمرین ماشین حساب

let num1 = +prompt("Enter number 1:")
let num2 = +prompt("Enter number 2:")

let operator = +prompt("Enter operration:\n1. *\n2. /\n3. +\n4. - ")

if(isNaN(num1) || isNaN(num2)) {
   alert("Please enter number for numbers")
} else{
   if(operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4 ) {
      alert("Please enter 1-4 for operators")
   } else{
      if(operator == 1){
         let multi = num1 * num2
         alert(`the resault is ${multi}`)
      } else if(operator === 2){
         let devide = num1 / num2 
         alert(`the resault is ${devide}`)
      }  else if(operator === 3){
         let plus = num1 + num2
         alert(`the resault is ${[plus]}`)
      }  else{
         let minus = num1 - num2
         alert(`the resault is ${minus}`)
      }
   }
}

// حل تمرین کپجای پیشرفته

let wordsAndNumber = "0123456789qwertyuiopasdfghjklzxcvbnm"
let capcha = 0;
let randomCharIndex = 0;

for(let i = 0; i < 5; i++) {
   randomCharIndex = Math.floor(Math.random() * wordsAndNumber.length)
   capcha += wordsAndNumber[randomCharIndex]
}


let answer = prompt(`Please enter the capcha (${capcha})`)

if(answer == capcha){
   alert("correct!")
} else{
   alert("False!")
}

//حل تمربن لینک کوتاه

let products = [
   {link:"6655", name:"BMW", location:"tehran" },
   {link:"3344", name:"Benz", location:"ahvaz" },
   {link:"1122", name:"Civic", location:"karaj" },
]

let userLink = +prompt("Please enter short link")

let mainProduct = products.find(function(product) {
   return product.link == userLink
})

if(mainProduct === undefined) {
   alert("The ordered product coudnt find")
} else{
   alert(`Product info:\nTitle: ${mainProduct.name}\nLocation: ${mainProduct.location}`)
}

//تمرین تایمر

let minuts = +prompt("Enter the minutes:");
let seconds = +prompt("Enter the seconds:");

let timer = setInterval(function() {
   if(seconds === -1) {
      minuts--
      seconds = 59
   }

   if(minuts === 0 && seconds === 0) {
      clearInterval(timer)
      alert("Time is up!");
   }

   console.log(`${minuts}:${seconds}`)
   seconds--

}, 1000); 

//حل تمرین set timeout

setTimeout( function(Boolean) {
   if(Boolean === false) {
      alert("please set your profile picture!")
   }
   
}, 2000,false)

//! Truthly value - Falsy value

//* Numbers

// T = !0
// F = 0

//* String 

// T = !""
// F = ""

//* Objects

// همه ابجکت ها T هستند

//*Arrays

//همه ارایه ها هم T هستند

//مفهوم Hoisting

//فانکشن ها موقع اجرا به بالا ترین خط سورس کد میرن که نتیجش میشه قابلیت استفاده از فانکشن قبل از تعریف





//سطح متوسط

const div1 = document.getElementById("div") // Elemmnts
const div2 = document.getElementsByTagName("div") //Elemments Array
const div3 = document.getElementsByClassName("div") //Elemments Array
const div4 = document.querySelector("container") //مثل css میشه به المنت ها درسترسی پیدا کرد 
// و اگر با کلاس دنبال المنت خاصی بگردیم به اولین المنتی برسه که اون کلاس رو داشته باشه همون رو انتخاب میکنه ودیگه پایین تر نمیره
const div5 = document.querySelectorAll("container") // Element Array
//ولی اگر اخرش all بذاریم همه اون المنت هایی که این کلاس داشته باشن انتخاب میکنه و اگر لاگ بگیریم به صورت ارایه نشون میده

//دوتا روش اخر از همه بهتر هستند از همه نظٰر

//Attrebiuts

const itemElems = document.querySelectorAll(".list-item"); // Elements Array

const inputElem = document.querySelector("input"); //Elements

// console.log(liElem.className); class
// liElem.innerHTML = "New Content"; محتوای داخل اون تگ رو میشه عوض کرد
// console.log(liElem.innerHTML); محتوای داخل تگ رو نشون میده
// console.log(liElem.id); ایدی رو نشون میده
// console.log(inputElem.value); مقدار چیز هایی مثل input یا همون چیزی که داخلشون مینویسم رو نشون میده
// liElem.style.color = "blue"; استایل تگ رو عوض میکنه
// console.log(liElem.test); 
// liElem.test = "testValue";
// console.log(liElem.test);

// console.log(itemElems[0].className); یک چایلدی رو از بین المنت ها پیدا میکنه و کلاس اون رو لاگ میندازه

//بجای خط بالا میشه از خط پایین هم استفاده کرد

// itemElems.forEach(function (element) { 
//   console.log(element);
// });

//

console.log(Element1);

// setatrebiute,getatrebiute

liElem.setAttribute("id", "li-id-test"); //set
console.log(liElem.getAttribute("id")); //get and log

console.log(itemElems);

itemElems.forEach(function (li) {
  li.style.color = "red";
}); // changing color

// onclick event

//way 1

<button class="click-btn">Clikc me</button>

let btn = document.querySelector(".click-btn")

btn.addEventListener("click", logger)

function logger() {
  console.log("Clicked!");
  
}

// or

<button class="click-btn">Clikc me</button>

let btn = document.querySelector(".click-btn")

btn.addEventListener("click", function() {
   console.log("Clicked!");
})


 //way 2

 <button onclick="logger()">Clikc me</button>

 function logger () {
   console.log("Clicked");
 }

//پروژه لامپ

<img src="bulboff.gif" alt="" />
<button class="button">لامپ را روشن کنید</button>


let btn = document.querySelector(".button")
let img = document.querySelector("img")
let isOn = false //flag
 
btn.addEventListener("click", function() {

  if(isOn) {
    img.setAttribute("src", "bulboff.gif")
    btn.innerHTML = "لامپ را روشن کنید"
    isOn = false
  } else{
    img.setAttribute("src", "bulbon.gif")
    btn.innerHTML = "لامپ را خاموش کنید"
    isOn = true
  }
})

// Ajax

// Ajax widthout JQuery

let btn = document.querySelector("#button");

btn.addEventListener("click", function() {
   let xmlHttp = new XMLHttpRequest();
   xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
         document.querySelector("#p").innerHTML += xmlHttp.responseText;
      }
   }

   xmlHttp.open("GET", "ajax.php", true);
   xmlHttp.send();
   
});

// Ajax with JQuery

$('#button').click(function() {

   $.ajax(
      'ajax.php', {
         success: function(data) {
            alert("your data is: " + data)
         },

         error: function(data) {
            alert("some errors")
         }
         
      }
   )
});

// event 

let button = document.querySelector('button')

button.addEventListener('click', function(event) { // این event اطلاعات زیاد و دقیقی بهمون میده
  console.log('Event =>', event);

  if(event.ctrlKey == true) {
    alert('کلید Ctrl را نگه داشتید')
  } else {
    alert('کلید Ctrl را نگه نداشتید')
  }
})

// event 

const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', function(event) { // این event اطلاعات زیاد و دقیقی بهمون میده
  console.log('Event =>', event);

  if(event.ctrlKey == true) {
    alert('کلید Ctrl را نگه داشتید')
  } else {
    alert('کلید Ctrl را نگه نداشتید')
  }
})

input.addEventListener('keyup', function(event) {
  console.log(event.key);
  // انجام تکنیک KEYLOGGER
})

//* Remove element form DOM

// example 1

const removeBtn = document.querySelector(".remove-btn");
const titleElem = document.querySelector(".title");
const addBtn = document.querySelector(".add-btn");

removeBtn.addEventListener("click", () => {
  titleElem.remove();
});

addBtn.addEventListener("click", () => {
  document.body.insertAdjacentHTML("afterbegin", "<h1 class='title'>Hello World</h1>");
});

// Example 2

const listItems = document.querySelectorAll(".list-item");

listItems.forEach((li) => {
  li.addEventListener('click', () => {
    li.remove()
  })
});


//* Node Type

const titleElem = document.querySelector('h1')

console.log(titleElem.nodeName); //H1
console.log(titleElem.nodeType); //1
console.log(titleElem.DOCUMENT_NODE); //9 
console.log(document.nodeType === Node.DOCUMENT_NODE); //True

// * DOM Navigation

const header1 = document.querySelector(".h1-title-1");
const header2 = document.querySelector(".h1-title-2");
const header3 = document.querySelector(".h1-title-3");
const header4 = document.querySelector(".h1-title-4");
const header5 = document.querySelector(".h1-title-5");

const listElem = document.querySelector(".list");

console.log(header3.nextElementSibling.previousElementSibling); // فقط المنت هارو حساب میکنه
console.log(header3.nextSibling.nextSibling); // توی اچ تی ام ال هرچی که باشه رو حساب میکنه یعنی همون نود رو. حتی \n رو
// خروجی میشه hader4
// به عبارتی خیلی دقیق تر هست ولی واقعا کاربردی نیست
console.log(header1.parentElement); // پرنت المنت رو برمیگردونه
// console.log(header1.parentElement.remove());// میشه این شکلی پرنت رو پاک کرد

//

console.log(listElem.children); //یک ارایه از فرزندان این المنت برمیگردونه
console.log(listElem.childElementCount); // تعداد فرزند های المنی رو برمیگردونه
console.log(listElem.firstElementChild);
console.log(listElem.lastElementChild);
console.log(listElem.hasChildNodes()); // Bool


// * OnSelect(input,textarea)
// میشه تنظیم کرد وقتی فردی متنی رو انتخاب میکنه اتفاقی بیوفته
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

input.addEventListener("select", () => {
  console.log("selected");
});

textarea.addEventListener("select", () => {
  console.log("selected");
});

// * DblClick(all elements)
// دابل کلیک
const btn = document.querySelector("button");

btn.addEventListener("dblclick", (event) => {
  console.log("Dubble clicked");
  console.log(event);
});


//* clipboard events(copy,paste,cut)
//!(cancelable)

textarea.addEventListener('copy', () => {
   console.log('copy');
   
})
textarea.addEventListener('cut', () => {
   console.log('cut');
   
})
textarea.addEventListener('paste', () => {
   console.log('paste');
   
})


//* Oncontextmenu event
// به راست کلیک کاربر میشه دسترسی پیدا کرد
document.addEventListener("contextmenu", (event) => {
   event.preventDefault();//! برای خاموش کردن راست کلیک
   console.log(event);
 });
 

 //* OnLoad and DOMContentLoaded
// هردو برای نشون دادن اینکه سایت لود شده استفاده میشن
//? Onload نمیشه تو خود فایل جی اس صداش زد باید داخل خود اچ تی ام ال صدا زده بشه
//? وقتی که کل سند لود شده باشه اجرا میشه

//? DOMContentLoaded میشه تو خود فایلر جی اس فراخوانی بشه
//? وقتی که محتوای دام یعنی تگ بادی لود بشه اجرا میشه

const loadSite = () => {
   console.log("site loaded");
 };
 
 document.addEventListener("DOMContentLoaded", () => {
   console.log("DOMContentLoaded");
 });
 


 

 //* OnScroll
// میشه فهمید کاربر اسکرول کرده
document.addEventListener('scroll', () => {
   console.log('scroll');
   
})

console.log(document.documentElement.scrollTop);
// نشون میده کاربر از بالا چقدر اسکرول کرده
console.log(document.documentElement.scrollLeft);
// نشون میده کاربر چقدر اسکرول افقی کرده

const Btn = document.querySelector('button')

const scrollHandler = () => {
   document.documentElement.scrollTo(0,0)
   // این متد برای این استافاده میشه که کاربر رو به این مکان از اسکرول ببره و واحد ها بر حسب پیکسل هستند
   document.documentElement.scrollBy(0,100)
   // فرق این متد با قبلی این هست که این باعث میشه به اندازه ورودی به اسکرول کاربر اضافه بشه
}

Btn.addEventListener('click', scrollHandler)



//* Media (Audio - Video)

const music = document.querySelector('audio')

// music.play()
// music.pause()
// music.duration( مدت زمان اهنگ بر حسب ثانیه)
// music.currentTime(زمان سپری شده)
// music.playbackRate(سرعت پخش)

//* Drag - Drop

/* <h1 draggable="true" ondragstart="dragStartHandler(event)" id="React">React</h1>
<h1 draggable="true" ondragstart="dragStartHandler(event)" id="Vue">Vue</h1>
<h1 draggable="true" ondragstart="dragStartHandler(event)" id="Angular">Angular</h1>

<br>
<br>

<div ondrop="dropHandler(event)" ondragover="dragOverHandler(event)" class="drop-box"></div> */


const dragStartHandler = (event) => {
   event.dataTransfer.setData("elementId", event.target.id);
   // ایدی المنتی که درگ کردیم رو به دیتا ترنسفر ارسال میکنیم
 };
 
 const dropHandler = (event) => {
   const elementId = event.dataTransfer.getData("elementId");
   // دیتایی که ارسال کرده بودیم رو از دیتا ترنسفر میگیریم
   const targetElement = document.getElementById(elementId);
   // و اون المنتی رو که درگ کرده بودیم و الان دراپ کردیم روی همین المنت رو پیدا میکنیم
   event.target.append(targetElement);
   // و به المنتی روش دراپ کردیم اضافه میکنیم
 };
 
 const dragOverHandler = (event) => {
   event.preventDefault();
   // حتما باید این کار انجام بشه تا ایونت دراپ اجرا بشه
 };

//  * کل ایونت هایی که در طول درگ اند دراپ کردن اتفاق میوفتند
//* Dragged -> onDragStart onDrag onDragEnd
//* Drapped -> onDragEnter onDragOver onDragLeave onDrop



//* localStorage

<button onclick="setDataDark()">set Data Dark</button>
<button onclick="getItem()">get data</button>
<button onclick="removeData()">remove data</button>
<button onclick="clearAllData()">clear all data</button>

const setDataDark = () => {
   localStorage.setItem("theme", "dark");
   // اولی برای ست کردن کلید و دومی برای ست کرد ولیو
 };
 
 const getItem = () => {
   console.log(localStorage.getItem("theme"));
 };
 
 const removeData = () => {
   localStorage.removeItem('theme')
 }
 
 const clearAllData = () => {
   localStorage.clear()
 }
 


// * Animation

const animationBtn = document.querySelector("button");
const divElem = document.querySelector("div");
const statusElem = document.querySelector("p");

const setAnimation = () => {
  divElem.style.animation = "move 2s 3";
};

const animationStart = () => {
  console.log("animation started");
};

const animationIteration = () => {
  console.log("animation repeat");
};

const animationEnd = () => {
  console.log("animation end");
};
animationBtn.addEventListener("click", setAnimation);
// برای ست کردن انمیشن به هنگام کلیک روی دکمه
divElem.addEventListener("animationstart", animationStart);
divElem.addEventListener("animationiteration", animationIteration);
divElem.addEventListener("animationend", animationEnd);
// وقتی روی یک المنت انیمشن ست میشه این ایونت ها اتفاق میوفته به ترتیب


// * Method chaining
// به معنی متد های زنجیره ای که یعنی میشه از متد ها به شکل پشت سر هم استفاده کرد
let text = 'amir'

console.log(text.split("").reverse().join("").trim());


//* DOM => Document Object Model
//* BOM => Browser Object Model

// بام یعنی همون مرورگر و ما میتونیم به مرورگر کاربر دسترسی داشته باشیم
// مثل هیستوری و ایپی کاربر 
// تمام دستوراتی که داخل browser اجرا میشن زیر مجموعه window هستند

//* screen object
// اطلاعات صفحه نمایش کاربر رو نشون میده


// * Browser history 
// ادرس هایی که ما در یک تب مرورگر رفتیم رو نشون میده
history.back() //به ادرس قبلی برمیگرده
history.forward() // به ادرس بعدی میره
history.go() // یک دلتا میگیره و به اون میره و. خود ادرس الان میشه صفر و قبلی ها با منفی یک شروع میشن
history.length() // نشون میده کاربر به چندتا ادرس رفته

// * گرفتن ایدی از url

// ! Bad Way 
let userId = location.search.slice(1).split('=')[1];

// * Good way
const searchParams = new URLSearchParams(location.search)
userId = searchParams.get('id')//چیزی رو به اسم ایدی داریم میگیریم-

// مثال

const h1Elem = document.querySelector("h1");

const users = [
  { id: 1, username: "amin", email: "amin@gmail.com", age: 24 },
  { id: 2, username: "qadir", email: "qadir@gmail.com", age: 22 },
  { id: 3, username: "babak", email: "babak@gmail.com", age: 25 },
  { id: 4, username: "sasan", email: "sasan@gmail.com", age: 28 },
];

const searchParams = new URLSearchParams(location.search);
console.log(searchParams);

const userId = searchParams.get("id");

const mainUser = users.find((user) => {
  return user.id === +userId;
});

if (mainUser) {
  h1Elem.innerHTML = `username: ${mainUser.username}, email:${mainUser.email}, id: ${mainUser.id}`;
} else {
  h1Elem.innerHTML = `user not found with id ${userId}`;
}


// اگر بخوایم ایونت لیسنری رو پاک بکنیم از 
btn.removeEventListener("click", clickHandler)







// *سطح پیشرفته

// *Event Confings

// ایونت لیسنر وروردی سومی هم میگیره که تنظیماتش هست
btn.addEventListener('click', clickHandler, {
   // میتونیم از وانس استفاده بکنیم تا ایونت فقط یکبار اجرا بشه
   once: false
})


// * Event Delegation

event.stopPropagation() //Prevent Bubbling

//* Capture
btn.addEventListener('click', clickHandler, {
   // تغییر از بابلینگ به کپچر
   capture: true
})


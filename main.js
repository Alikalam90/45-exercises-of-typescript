var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//task0
console.log("hello world");
//task1
var person = "ali";
console.log("hello," + person + " how are you");
//task2
var nam1 = "ali";
//lower case
console.log("lower case " + nam1.toLowerCase());
//upper case
console.log("uppercase " + nam1.toUpperCase());
//titlecase
console.log("title case " + nam1.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//task4
var quote = "That's one small step for a man, a giant leap for mankind.";
var author = "Neil Armstrong";
console.log(author + " once said " + quote);
//task5
var famous_person = "Neil Armstrong";
var message = (famous_person + " once said " + quote);
console.log(message);
//task6
var personname = "\t\n Ali Kalam \n\t";
console.log("orignal:" + personname);
console.log("stripped:" + personname.trim());
//task7 and task8
console.log(5 + 3);
console.log(12 - 4);
console.log(16 / 2);
console.log(4 * 2);
//task9
var fav_num = 2;
console.log("my favourite number is " + fav_num);
//task10
//author: [Ali Kalam]
//date: [23-2-2024]
//task9: revealing my favourite number
var fav_num1 = 2;
console.log("my favourite number is " + fav_num1);
//task11
var names = ["Ali", "Hassan", "Adeel", "Saad"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//task12
console.log(names[0] + " how are you?");
console.log(names[1] + " how are you?");
console.log(names[2] + " how are you?");
console.log(names[3] + " how are you?");
//task13
var transportation = ["bike", "bicycle", "car"];
console.log("I like to travel by " + transportation[0]);
console.log("I like to travel by " + transportation[1]);
console.log("I like to travel by " + transportation[2]);
//task14
var guests = ['Ali', 'Babar', 'Rizwan', 'Fahad'];
console.log("Hey " + guests[0] + ", I'm throwing a dinner party and would like to invite you please do attend.");
console.log("Hey " + guests[1] + ", I'm throwing a dinner party and would like to invite you please do attend.");
console.log("Hey " + guests[2] + ", I'm throwing a dinner party and would like to invite you please do attend.");
console.log("Hey " + guests[3] + ", I'm throwing a dinner party and would like to invite you please do attend.");
//task15
var guest = ['Ali', 'Babar', 'Rizwan', 'Fahad'];
var not_attending = ('Fahad');
console.log(not_attending + ' can not attend the dinner.');
var newguest = 'Saim';
guest[guest.indexOf(not_attending)] = newguest;
guest.map(function (items) {
    return console.log("Dear ".concat(items, " , you are invited to the dinner"));
});
//task16
var guest1 = ['Ali', 'Babar', 'Rizwan', 'Saim', 'Fahad'];
var cannotattend = ('Fahad');
var Newguest = ('Asad');
guest1[guest1.indexOf(cannotattend)] = Newguest;
console.log(guest1);
guest1.map(function (items1) {
    return console.log("Dear ".concat(items1, ", I found a bigger dinner table so I am inviting more peaple"));
});
//part2
var guestbeg = 'hassan';
guest1.unshift(guestbeg);
console.log(guest1);
//part3
var guestmid = 'umer';
var midindex = guest1.length / 2;
guest1.splice(midindex, 1, guestmid);
console.log(guest1);
//part4
guest1.push('sami');
console.log(guest1);
guest1.map(function (items2) {
    return console.log("Dear ".concat(items2, " ,I would like to invite you to a dinner party please do attend."));
});
//task17
guest1.map(function (item2) {
    return console.log("hey ".concat(item2, ", the dinner table won't be able to arrive in time. So, I can only invite two people for dinner"));
});
while (guest1.length > 2) {
    var removedGuest = guest1.pop();
    console.log("sorry, ".concat(removedGuest, ", you're no longer invited to dinner."));
}
guest1.map(function (items) { return console.log("Hey ".concat(items, ", you are still invited to the dinner")); });
guest1.splice(guest1.length / 3);
console.log(guest1);
//task18
var favplace = ['Skardu', 'Mecca', 'Madina', 'Bali', 'Turkey'];
console.log('Places to visit: ' + favplace);
console.log('In alphabetical order:', __spreadArray([], favplace, true).sort());
console.log('Original series: ' + favplace);
console.log("In reverse alphabetic order", __spreadArray([], favplace, true).sort().reverse());
console.log('Original series: ' + favplace);
favplace.reverse();
console.log(favplace);
favplace.reverse();
console.log(favplace);
favplace.sort();
console.log(favplace);
favplace.sort().reverse();
console.log(favplace);
//task19
var num_guest = guest.length;
console.log("".concat(num_guest, " will attend the dinner."));
//task20
var things = ['cow', 'hill', 'river', 'sky'];
console.log(things);
//task21
var job_app = { name: 'Ali', gender: 'Male', age: 17 };
console.log(job_app);
//task22
//let n:string[]=[1,2,3,4]
//console.log(n)
var n = [1, 2, 3, 4];
console.log(n);
//task23
//for true
var weather = 'sunny';
console.log("Is weather == 'sunny'? I predict True.");
console.log(weather == 'sunny');
var match = 'pakvsind';
console.log("Is match == 'pakvsind'? I predict True.");
console.log(match == 'pakvsind');
var charge = '70';
console.log("Is charge == '70'? I predict True.");
console.log(charge == '70');
var car = 'supra';
console.log("Is car == 'supra'? I predict True.");
console.log(car == 'supra');
var animal = 'cat';
console.log("Is animal == 'cat'? I predict True.");
console.log(animal == 'cat');
//for false
console.log("Is weather == 'sunny'? I predict false.");
console.log(weather == 'cloudy');
console.log("Is match == 'pakvsind'? I predict false.");
console.log(match == 'pakvsaus');
console.log("Is charge == '70'? I predict false.");
console.log(charge == '20');
console.log("Is car == 'supra'? I predict false.");
console.log(car == 'BMW');
console.log("Is animal == 'cat'? I predict false.");
console.log(animal == 'dog');
//task24
var name_1 = "Ali";
var name_2 = "Ali Kalam";
var name_3 = "Muhammad Ali Kalam";
if (name_1 == name_3) {
    console.log('names are equal');
}
else {
    console.log('names are not equal');
}
if (name_1 != name_2) {
    console.log('names are equal');
}
else {
    console.log('names are not equal');
}
if (name_1 != name_3) {
    console.log('names are equal');
}
else {
    console.log('names are not equal');
}
var age_1 = 18;
var age_2 = 17;
if (age_1 >= 18) {
    console.log("eligible for vote.");
}
if (age_2 < 18) {
    console.log("not eligible for vote.");
}
var age_3 = 18;
var age_4 = 22;
if (age_3 == 18 && age_4 == 22) {
    console.log("person eligible for vote.");
}
if (age_3 == 18 || age_4 != 22) {
    console.log("person not eligible for vote.");
}
//let bowlers: string []= ["naseem,rauf,shaheen,abrar"]
//if (bowlers.includes ("abrar")) {
//    console.log("abrar is in bowlers list")
//}                                                                           
//if (bowlers.includes("shami")) {
// console.log("shami is in bowlers list")
//} else {console.log("shami is not in the list")}
//task25
//let alien_color=['green','yellow','red']
//if (alien_color.includes ('green') ) 
//{console.log('player got 10 points')}
//if (alien_color.includes('red'))
//{console.log('player got 20 points')}
//if (alien_color.includes('blue'))
//{console.log('player got 10 points')}
//task28
var person1 = 25;
if (person1 < 2) {
    console.log("person is a baby.");
}
if (person1 >= 2 && person1 < 4) {
    console.log("person is a toddler.");
}
if (person1 >= 4 && person1 < 13) {
    console.log("person is a kid.");
}
if (person1 >= 13 && person1 < 20) {
    console.log("person is a teenager");
}
if (person1 >= 20 && person1 < 65) {
    console.log("person is an adult");
}
if (person1 >= 65) {
    console.log('person is an elder');
}
//task29
//let favourite_fruits : string [] = ["apple,mango,peach,berry,orange"]
//if (favourite_fruits.includes ("mango")) {console.log("mango")}
//if (favourite_fruits.includes ("apple")) {console.log("apple")}
//if (favourite_fruits.includes ("peach")) {console.log("peach")}
//if (favourite_fruits.includes ("berry")) {console.log("You really like bananas")}
//if (favourite_fruits.includes ("orange")) {console.log("You really like bananas")}
//task30
var users = ["admin", "ali", "hassan", "eric", "snippet"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log("Hello " + user + ",welcome back");
    }
}
//task31
var clients = ["admin", "ali", "hassan", "eric", "snippet"];
for (var _a = 0, clients_1 = clients; _a < clients_1.length; _a++) {
    var client = clients_1[_a];
    if (client === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log("Hello " + client + ",welcome back");
    }
}
clients = [];
if (clients.length === 0) {
    console.log("We need to find more clients!!!");
}
//task 32
//let current_users : string [] = ["admin","Ali","Hassan","Eric","Snippet"]
//let new_users : string [] = ["admin","John","Arpit","Ahsan","Salah"]
//let current_users_lower : string [] =current_users.map(user => user.toLowerCase())
//for (let new_user of new_users){
// if(current_users_lower.includes(new_user.toLowerCase())){
//    console.log("sorry " +new_user+ " is already taken")
// } else {
//    console.log("Yes " +new_user+ " ,is still available" )
// }
//}
//task 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    if (number === 1) {
        console.log(+number + "st");
    }
    else if (number === 2) {
        console.log(+number + "nd");
    }
    else if (number === 3) {
        console.log(+number + "rd");
    }
    else {
        console.log(+number + "th");
    }
}
//task 34
var pizzas = ["chicken_fajita", "chicken_tikka", "afghani_pizza"];
for (var _c = 0, pizzas_1 = pizzas; _c < pizzas_1.length; _c++) {
    var pizza = pizzas_1[_c];
    console.log(pizza);
}
console.log("\n");
for (var _d = 0, pizzas_2 = pizzas; _d < pizzas_2.length; _d++) {
    var pizza = pizzas_2[_d];
    console.log("I really like" + pizza + " pizza!");
}
console.log("I really love pizza!");
//task 35
var animals = ["Dog", "Cat", "Rabbit"];
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal_1 = animals_1[_e];
    console.log(animal_1);
}
console.log("\n");
for (var _f = 0, animals_2 = animals; _f < animals_2.length; _f++) {
    var animal_2 = animals_2[_f];
    console.log("A " + animal_2 + "has soft fur");
}
console.log("all of these are great pets but I love cats more");
//task 36
function makeshirt(size, text) {
    console.log("you ordered a " + size + " shirt that says " + text + '');
}
makeshirt("large", '"Way Of The ACE"');
makeshirt("medium", '"Way Of The ACE"');
//task 37
function makeshirts(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("you ordered a " + size + " shirt that says " + text + '');
}
makeshirts();
makeshirts("large");
//diff msg
makeshirts("small", "Way Of The ACE");
//task 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log('' + city + ' is in ' + country + '');
}
describe_city('karachi');
describe_city('France', 'europe');
describe_city('lahore', 'punjab');
//task 39
function city_Country(City, Country) {
    console.log('' + City + ' , ' + Country + '');
}
var c1 = city_Country('lahore', 'pakistan');
var c2 = city_Country('california', 'america');
var c3 = city_Country('sydney', 'australia');
//task 40
function makeAlbum(artist, title) {
    var dictionarties = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionarties;
}
var album = makeAlbum("anuv", "husn");
console.log(album);
album = makeAlbum("arpit", "mahrani");
console.log(album);
album = makeAlbum("eminem", "slim shady");
console.log(album);

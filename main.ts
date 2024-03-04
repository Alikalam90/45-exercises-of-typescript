//task0
console.log("hello world");

//task1
let person = "ali";
console.log("hello," + person + " how are you");

//task2
let nam1: string = "ali"
//lower case
console.log("lower case " + nam1.toLowerCase())
//upper case
console.log("uppercase " + nam1.toUpperCase())
//titlecase
console.log("title case " + nam1.replace(/\b\w/g, c => c.toUpperCase()))

//task4
let quote: string = "That's one small step for a man, a giant leap for mankind."
let author: string = "Neil Armstrong"
console.log(author + " once said " + quote)

//task5
let famous_person: string = "Neil Armstrong"
let message: string = (famous_person + " once said " + quote)
console.log(message)

//task6
let personname: string = "\t\n Ali Kalam \n\t"
console.log("orignal:" + personname)
console.log("stripped:" + personname.trim())

//task7 and task8
console.log(5 + 3)
console.log(12 - 4)
console.log(16 / 2)
console.log(4 * 2)

//task9
let fav_num: number = 2
console.log("my favourite number is " + fav_num)

//task10
//author: [Ali Kalam]
//date: [23-2-2024]
//task9: revealing my favourite number
let fav_num1: number = 2
console.log("my favourite number is " + fav_num1)

//task11
let names: string[] = ["Ali", "Hassan", "Adeel", "Saad"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

//task12
console.log(names[0] + " how are you?")
console.log(names[1] + " how are you?")
console.log(names[2] + " how are you?")
console.log(names[3] + " how are you?")

//task13
let transportation: string[] = ["bike", "bicycle", "car"]
console.log("I like to travel by " + transportation[0])
console.log("I like to travel by " + transportation[1])
console.log("I like to travel by " + transportation[2])

//task14
let guests: string[] = ['Ali', 'Babar', 'Rizwan', 'Fahad']
console.log("Hey " + guests[0] + ", I'm throwing a dinner party and would like to invite you please do attend.")
console.log("Hey " + guests[1] + ", I'm throwing a dinner party and would like to invite you please do attend.")
console.log("Hey " + guests[2] + ", I'm throwing a dinner party and would like to invite you please do attend.")
console.log("Hey " + guests[3] + ", I'm throwing a dinner party and would like to invite you please do attend.")

//task15
let guest: string[] = ['Ali', 'Babar', 'Rizwan', 'Fahad']
let not_attending: string = ('Fahad')
console.log(not_attending + ' can not attend the dinner.')
let newguest: string = 'Saim'
guest[guest.indexOf(not_attending)] = newguest;
guest.map((items) =>
    console.log(`Dear ${items} , you are invited to the dinner`))

//task16
let guest1: string[] = ['Ali', 'Babar', 'Rizwan', 'Saim', 'Fahad']
let cannotattend: string = ('Fahad')
let Newguest: string = ('Asad')
guest1[guest1.indexOf(cannotattend)] = Newguest
console.log(guest1)
guest1.map((items1) =>
    console.log(`Dear ${items1}, I found a bigger dinner table so I am inviting more peaple`))
//part2
let guestbeg: string = 'hassan'
guest1.unshift(guestbeg);
console.log(guest1)
//part3
let guestmid: string = 'umer'
let midindex = guest1.length / 2
guest1.splice(midindex, 1, guestmid)
console.log(guest1)
//part4
guest1.push('sami')
console.log(guest1)
guest1.map((items2) =>
    console.log(`Dear ${items2} ,I would like to invite you to a dinner party please do attend.`))

//task17
guest1.map((item2) =>
    console.log(`hey ${item2}, the dinner table won't be able to arrive in time. So, I can only invite two people for dinner`))
while (guest1.length > 2) {
    const removedGuest = guest1.pop();
    console.log(`sorry, ${removedGuest}, you're no longer invited to dinner.`);
}
guest1.map((items) => console.log(`Hey ${items}, you are still invited to the dinner`))
guest1.splice(guest1.length / 3)
console.log(guest1)

//task18
let favplace: string[] = ['Skardu', 'Mecca', 'Madina', 'Bali', 'Turkey']
console.log('Places to visit: ' + favplace)
console.log('In alphabetical order:', [...favplace].sort())
console.log('Original series: ' + favplace)
console.log("In reverse alphabetic order", [...favplace].sort().reverse())
console.log('Original series: ' + favplace)
favplace.reverse()
console.log(favplace)
favplace.reverse()
console.log(favplace)
favplace.sort()
console.log(favplace)
favplace.sort().reverse()
console.log(favplace)

//task19
let num_guest: number = guest.length
console.log(`${num_guest} will attend the dinner.`)

//task20
let things: string[] = ['cow', 'hill', 'river', 'sky']
console.log(things)

//task21
let job_app: { name: string, gender: string, age: number } = { name: 'Ali', gender: 'Male', age: 17 }
console.log(job_app)

//task22
//let n:string[]=[1,2,3,4]
//console.log(n)
let n: number[] = [1, 2, 3, 4]
console.log(n)

//task23
//for true
let weather = 'sunny'
console.log("Is weather == 'sunny'? I predict True.")
console.log(weather == 'sunny')
let match = 'pakvsind'
console.log("Is match == 'pakvsind'? I predict True.")
console.log(match == 'pakvsind')
let charge = '70'
console.log("Is charge == '70'? I predict True.")
console.log(charge == '70')
let car = 'supra'
console.log("Is car == 'supra'? I predict True.")
console.log(car == 'supra')
let animal = 'cat'
console.log("Is animal == 'cat'? I predict True.")
console.log(animal == 'cat')
//for false
console.log("Is weather == 'sunny'? I predict false.")
console.log(weather == 'cloudy')
console.log("Is match == 'pakvsind'? I predict false.")
console.log(match == 'pakvsaus')
console.log("Is charge == '70'? I predict false.")
console.log(charge == '20')
console.log("Is car == 'supra'? I predict false.")
console.log(car == 'BMW')
console.log("Is animal == 'cat'? I predict false.")
console.log(animal == 'dog')

//task24
let name_1: string = "Ali"
let name_2: string = "Ali Kalam"
let name_3: string = "Muhammad Ali Kalam"
if (name_1 == name_3) { console.log('names are equal') } else { console.log('names are not equal') }
if (name_1 != name_2) { console.log('names are equal') } else { console.log('names are not equal') }
if (name_1 != name_3) { console.log('names are equal') } else { console.log('names are not equal') }

let age_1: number = 18
let age_2: number = 17

if (age_1 >= 18) { console.log("eligible for vote.") }
if (age_2 < 18) { console.log("not eligible for vote.") }

let age_3: number = 18
let age_4: number = 22

if (age_3 == 18 && age_4 == 22) { console.log("person eligible for vote.") }
if (age_3 == 18 || age_4 != 22) { console.log("person not eligible for vote.") }

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
let person1 :number = 25
if (person1 <2) {console.log("person is a baby.")}
if (person1>=2 && person1<4) {console.log("person is a toddler.")}
if (person1>=4&&person1<13) {console.log("person is a kid.")}
if (person1>=13&&person1<20) {console.log("person is a teenager")}
if (person1>=20&&person1<65){console.log("person is an adult")}
if (person1>=65){console.log('person is an elder')}

//task29
 //let favourite_fruits : string [] = ["apple,mango,peach,berry,orange"]
 //if (favourite_fruits.includes ("mango")) {console.log("mango")}
 //if (favourite_fruits.includes ("apple")) {console.log("apple")}
 //if (favourite_fruits.includes ("peach")) {console.log("peach")}
//if (favourite_fruits.includes ("berry")) {console.log("You really like bananas")}
 //if (favourite_fruits.includes ("orange")) {console.log("You really like bananas")}
  
 //task30
 let users : string [] = ["admin","ali","hassan","eric","snippet"]
 for(let user of users) {
    if (user === "admin")
    {
        console.log ("Hello admin,would you like to see a status report?")
    } 
 else
  {
    console.log("Hello "  + user +",welcome back")
  }   
 }

 //task31
 let clients : string [] = ["admin","ali","hassan","eric","snippet"]
    for(let client of clients){
        if (client === "admin")
        {
            console.log ("Hello admin,would you like to see a status report?")
        } else {
            console.log("Hello "  + client +",welcome back")
        }
    }
 clients = []
 if (clients.length === 0){
    console.log ("We need to find more clients!!!")
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

let numbers : number [] =[1,2,3,4,5,6,7,8,9]

for (let number of numbers){
if (number ===1) {
    console.log(+number+ "st")
 } else if (number ===2) {
    console.log(+number+ "nd")
 } else if (number ===3) {
    console.log(+number+ "rd")
 }else {
    console.log(+number+ "th")
 }
}

//task 34

let pizzas : string [] = ["chicken_fajita","chicken_tikka","afghani_pizza"]
for (let pizza of pizzas){
    console.log(pizza)
}
    console.log("\n")

    for(let pizza of pizzas){
        console.log("I really like" +pizza+ " pizza!")
    }

    console.log("I really love pizza!")

//task 35

let animals : string [] = ["Dog","Cat","Rabbit"]
for(let animal of animals) {
    console.log(animal)
}
    console.log("\n")

    for(let animal of animals) {
        console.log("A "+animal+ "has soft fur") 
    }
    console.log("all of these are great pets but I love cats more")

//task 36

 function makeshirt(size : string, text: string): void {
    console.log("you ordered a " +size+ " shirt that says " +text+'')
}

makeshirt("large",'"Way Of The ACE"')
makeshirt("medium",'"Way Of The ACE"')

//task 37
function makeshirts(size : string = "large", text: string ="I love TypeScript"): void{
    console.log("you ordered a " +size+ " shirt that says " +text+'')
}

makeshirts();
makeshirts("large")

//diff msg

makeshirts("small","Way Of The ACE")

//task 38

function describe_city(city: string,country: string = "Pakistan"): void{
    console.log( ''+city+ ' is in ' +country+ '')
}
describe_city('karachi')
describe_city('France' , 'europe')
describe_city('lahore' , 'punjab')

//task 39
function city_Country(City: string, Country: string): void {
    console.log( ''+City+ ' , ' +Country+ '')
}

let c1 = city_Country('lahore' , 'pakistan')
let c2 = city_Country('california' , 'america')
let c3 = city_Country('sydney' , 'australia')

//task 40

function makeAlbum (artist: string, title: string): {artist: string, title: string} {
    const dictionarties = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionarties;
} 

let album = makeAlbum("anuv","husn")
console.log(album)

album = makeAlbum("arpit","mahrani")
console.log(album)

album = makeAlbum("eminem","slim shady")
console.log(album)
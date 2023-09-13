//print a message of person
var userName:string = "Eric";
//console.log(`"Hello, ${userName} would you like to learn some python today?"`);
//question#2
//print person name in uppercase lower ande titlecase
var personName:string="Marwa nasir"
var upercase=personName.toUpperCase();
var lowecase=personName.toLowerCase();
//console.log(`Uppercase name ${upercase}`);
//console.log(`Lowecase name ${lowecase}`)
//titlecase
function title_case(str:string){
  var stri = str.toLowerCase().split('');
  for(var i =0; i<stri.length; i++){
    stri[i]= stri[i].charAt(0).toUpperCase()+stri[i].slice(1);
  }
  return stri.join('');
}
var answer=title_case("Hello i'm a web developer");
//console.log(answer)
//question# 3
//print famouse quotes and name
//console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`)

//question#5
var famous_person:string="Albert Einstein";
var message:string="A person who never made a mistake never tried anything new ."
//console.log(`${famous_person} once said,“${message}”`)

//question#6
//remove whitespace
var namePerson:string="\tHusnain Nasir\t";
//console.log(namePerson);
var namePerson1:string="\nHusnain Nasir\n";
//console.log(namePerson1);
var removeSpace=namePerson.trim();
//console.log(removeSpace);
//for "/n"
var removeSpace1=namePerson1.trim();
//console.log(removeSpace1);

//question#7
var num1:number=3;
var num2:number=5;
var addition:number=num1+num2;
//console.log(addition);//8
var num3:number=17;
var num4:number=9;
var sub:number=num3-num4;
//console.log(sub);//8
var num5:number=2;
var num6:number=16;
var division:number=num6/num5;
//console.log(division)//8
var num7:number=4;
var num8:number=2;
var multiply:number=num7*num8;
//console.log(multiply)//8
//question#8
/*console.log(3+5);
console.log(18-10);
console.log(4*2);
console.log(16/2);*/

//question#9
//print message favourit number
var fav_number:number=14;
//console.log(`${fav_number} is my favourit number`);

//question#10 name marwa nasir ,date 5-09-2023
//question#6 adding whitespace using /t and /n then using trim remove whitespace
//question7 perform arthmetic operation and output will show after each operation is 8

//question#11
//store friends name in array
var array1:string[]=["marwa","maha","samen","fatima","rubina"]
//console.log(array1);

//question#12
//print message
var array1:string[]=["marwa","maha","samen","fatima","rubina"]
for(var i=0; i<array1.length; i++);
//console.log(array1[i],"Welcome to web3.0 course");

//question#13
//print favourtie transport and print message
var transport:string[]=["motercycle","cycle","car","bus","riksha"]
//for(var index=0; index<transport.length; index++)
//console.log(transport[index],'"i would like to own a honda motercycle"');

//question#14
//invite for dinner
var list:string[]=["marwa","maha","aiza"]
//for(var i=0; i<list.length; i++){
  //console.log(list[i],'"Welcome to our dinner"')}

//question#15
var list:string[]=["marwa","maha","aiza"]
for(var i=0; i<list.length; i++)
  //console.log(list[i],'"Welcome to our dinner"');}
var list2:string="maha"
 //console.log(list2,'"sorry i cant make a diner"');
 //var indexlist:number=list.indexOf(list2);
 //console.log(indexlist);
 //modify guest list
 for(var i=0; i<list.length; i++)
  //replace name with maha 
  list[1]="fatima";
  //console.log(list[i],'"Welcome to our dinner"');}

  //question#16
  //add more guest in array
  var list:string[]=["marwa","maha","aiza"]
  //for(var i=0; i<list.length; i++){ 
   // console.log(list[i],'"Welcome to our dinner"')}
  //console.log(`"we found bigger dinner table,we're inviting more pepole:"`); 
  list.unshift("mahida")
  list.splice(2,0,"samen")
  list.push("husnain")
  //for(var i=0; i<list.length; i++){  
  //console.log(list[i],'"you are also invited to  dinner"');}

  //question#17
  //shrink guest list from array
  var guest_list:string[]=["mahida","maha","marwa","samen","aiza","husnain"]
  //console.log(` "i have space only for 2 pepole"`)
   var i=5;
   //remove guest name from the array
  while(guest_list.length>2){   
      var remove_list=guest_list.pop()
      i--;
      //console.log(`${remove_list}"sorry i can't invite you for dinner"`);
     }
     //two pepole still invited for dinner
     for(var guest of guest_list)
     //console.log(`${guest} "you are stil invite for dinner"`);
    //remove all guest list name from array 
    guest_list.pop();
    guest_list.pop();
    //console.log(guest_list);
  //questin#18
  //modify actual array
  var modify:string[]=["lahore","france","paris","america","islamabad"]
  //print original array
  //console.log(modify);
  //alphabetical order
  //console.log("alphabetical order:")
  //console.log([...modify].sort());
  //original order
  //console.log("original order:")
  //console.log(modify);
  //reverse alphabetical order
  //console.log("reverse alphabetical order");
  //console.log([...modify].sort().reverse());
  //print again original order
  //console.log("print again original order");
  //console.log(modify);
  //rever order
  //console.log("reverse order");
  //console.log([...modify].reverse());
  //reverse again
  //console.log("again reverse order");
  //console.log([...modify].reverse());
//again alphabetical order
  //console.log("again alphabetical order:")
 // console.log([...modify].sort());
//reverse again alphabetical order
//console.log("reverse order");
 // console.log([...modify].sort().reverse());

 //question#19
//print a message indicating the number of people you are inviting to dinner.
//add more guest in array
var list:string[]=["marwa","maha","aiza"]
//for(var i=0; i<list.length; i++){ 
  //console.log(list[i],'"Welcome to our dinner"')}
//console.log(`"we found bigger dinner table,we're inviting more pepole:"`); 
list.unshift("mahida")
list.splice(2,0,"samen")
list.push("husnain")
//for(var i=0; i<list.length; i++){  
//console.log(list[i],'"you are also invited to  dinner"');}
//number of people you are inviting to dinner
//console.log(`"i ${list.length} people inviting for dinner`)

//question#20
//store name of language
var language:string[]=["english","frasi","urdu","deutsch"]
//console.log(language);

//question#21
type CarType={company:string,year:number,color:string}
var obj=[{ 
company:"otto",
year:2000,
color:"white"
},{
  company:"frari",
year:2019,
color:"black"
},{
  company:"honda",
year:2012,
color:"brown"
}]
//console.log(obj)

//question#22
//Produce Intentional Error Make sure you correct the error before closing the program
var error:number[]=[12,13,34,23,24]
if(error[5]==22){
  console.log(error)
}else{
  //console.log( "index erro",error[5]==22)
}
//error solve
//console.log(`"array length is just ${error.length}, 0-4 ,5 index is not present"`)
 
//question#23
//conditional test
let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//console.log("Is car != 'honda'? I predict True.")
//console.log(car != 'honda')
//console.log("Is car != 'aru'? I predict True.")
//console.log(car != 'aru')
//console.log("Is car != 'sub'? I predict True.")
//console.log(car != 'sub')
//console.log("Is car != 'moter'? I predict True.")
//console.log(car != 'moter')
//5 statement for false
/*console.log("Is car == 'honda'? I predict False.")
console.log(car == 'honda')
console.log("Is car == 'Subaru'? I predict False.")
console.log(car == 'Subaru')
console.log("Is car == 'moter'? I predict False.")
console.log(car == 'moter')
console.log("Is car == 'human'? I predict False.")
console.log(car == 'human')
console.log("Is car == 'ha'? I predict False.")
console.log(car == 'ha')*/

//question#24
//more conditional test
//test for string
var user_Name:string="marwa"
//console.log("is user_Name == 'marwa'? I predict True.")
//console.log(user_Name == 'marwa');
//console.log("is user_Name != 'marwa'? I predict False.")
//console.log(user_Name != 'marwa');
//test for lowercase
var deve:string="DEVELoper"
var lower=deve.toLowerCase();
//console.log("is lower == 'lowercase'? I predict True.")
//console.log(lower == 'developer');
//console.log("is lower == 'DEVELoper'? I predict False.")
//console.log(lower == 'DEVELoper');
//test for numerical 
var number:number=22;
//console.log("is number == 22? I predict True");
//console.log(number==22);
//console.log("is number != 22? I predict False");
//console.log(number!=22);
//greater than and less than test
//console.log("is number >18? I predict True");
//console.log(number>18);
//console.log("is number >24? I predict False");
//console.log(number>24);
//greater than and equal to ,less than and equal to test
//console.log("is number >18? I predict True");
//console.log(number>18);
//console.log("is number >24? I predict False");
//console.log(number<=22);
//test and and or operator
var number1:number=10;
var number2:number=11;
//console.log("is number1==10 && number2==11? I predict True");
 // console.log(number1==10 && number2==11);
//or test
//console.log("is number1==19 || number2==10? I predict True");
  //console.log(number1==19 || number2==10);
//array test
var arra:number[]=[10,23,24,34]
//console.log("Is arra[]=23? I predict True");
//console.log(arra[1]==23);
//console.log("Is arra[]=23? I predict False");
//console.log(arra[2]==23);

//question#25
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//var alien_color:string="green";
//if(alien_color=='green'){
  //console.log("the player just earned 5 points.")
//}else{
  //console.log("print nothing")//
//var alien_color:string="yellow";
//if(alien_color=='green'){
  //console.log("the player just earned 5 points.")}

//Question#26
var alien_color:string="green";
if(alien_color=='green'){
  //console.log("the player just earned 5 points.")
}else{
  //console.log("the player just earned 10 points.")
}
//step 2
var alien:string="red";
//if(alien_color=='green'){
  //console.log("the player just earned 5 points.");
//}else{
  //console.log("the player just earned 10 points.");}

//question#27
//step 1
var alien_color:string="green";
if(alien_color=='green'){
  console.log("the player just earned 5 points.")
}
 else if(alien_color=='yellow'){
  console.log("the player just earned 10 points.")
}
else if(alien_color=='red'){
console.log("the player earned 15 points")
}
//step2
var alien_color:string="yellow";
if(alien_color=='green'){
  console.log("the player just earned 5 points.")
}
 else if(alien_color=='yellow'){
  console.log("the player just earned 10 points.")
}
else if(alien_color=='red'){
console.log("the player earned 15 points")
}
//step 3
var alien_color:string="red";
if(alien_color=='green'){
  //console.log("the player just earned 5 points.")}
 //else if(alien_color=='yellow'){
  //console.log("the player just earned 10 points.")}
//else if(alien_color=='red'){
console.log("the player earned 15 points")}

//Question#28
//Write an if-else chain that determines a person’s stage of life. Set a value for the variable age 
var person_age:number=25;
/*if(person_age<2){
  console.log("the person is a baby")
}else if(person_age==2 || person_age<4){
  console.log("the person is a toddler.");
}else if(person_age==4 || person_age<13){
  console.log("the person is a kid.");
}else if(person_age==13||person_age<20){
  console.log("the person is a teenager.");}
else if(person_age==20||person_age<65){
  console.log("the person is an adult.")}
else if(person_age==65||person_age<65){  
  console.log("the person is an elder.");}*/

//Question#29
//fav_faourit weather present in array or not
var fav_faourit:string[]=["banana","apple","graps"]
  /*if(fav_faourit.includes("banana")){
    console.log("I really like banana");
  }
  if(fav_faourit.includes("apple")){
    console.log("I really like apple");
  }if(fav_faourit.includes("graps")){
    console.log(`"I really like graps"`);
  }if(fav_faourit.includes("mango")){
    console.log(`"I really like mango"`);
  }if(fav_faourit.includes("peach")){
    console.log(`"I really like peach"`);
  }*/

  //Question#30
  //print a message of username
  var person_name:string[]=["maha","admin","fatima","mahida","aiza"]
  //for(var i=0; i<person_name.length;i++){
    if(person_name[i]=="admin"){
      //console.log("Hello admin, would you like to see a status report?")
    }
    //else{
     // console.log(`"thanks your" ${person_name[i]} "for logging in again"`);}}
  
//Question#31
//If the list is empty, print the message We need to find some users!
var username1:string[]=["maha","admin","fatima","mahida","aiza"]
//for(var i=0; i<username1.length; i++){
  username1.splice(0,5);
  //if user list is empty
  //if(username1=[]){
   // console.log("We need to find some users")
  //}else{
   // console.log(username1);}}

  //Question#32
  //how websites ensure that everyone has a unique username.
  var current_user:string[]=["husnain","nasir","ali","asim","subahat"]
  var new_user:string[]=["naisr","kamran","ali","afaq","asad"]
    //for(var i=0; i<current_user.length; i++){
      for(var j=0; i<new_user.length; i++){
        if(new_user==current_user){
         // console.log("the person will need to enter a new username.")
     }else{
       //console.log(`"username is available."`)}
     }}
   
  //Question#33
  // Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
var num:number[]=[1,2,3,4,5,6,7,8,9]
for(var i=0;i<num.length;i++){
  if(num[i]==1){
    console.log('1st')
  }else if(num[i]==2){
    console.log('2nd')
  }else if(num[i]==3){
    console.log('3rd')
  }else if(num[i]==4){
    console.log('4th')
  }else if(num[i]==5){
    console.log('5th')
  }else if(num[i]==6){
    console.log('6th')
  }else if(num[i]==7){
    console.log('7th')
  }else if(num[i]==8){
    console.log('8th')
  }else if(num[i]==9){
    console.log('9th')
  }else{
    console.log("print nothin")
  }}

  //Question#34
//Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizza:string[]=["pepperoni pizza","mali boti pizza","BBQ pizza"]
//for(var i=0; i<pizza.length; i++){
  //console.log(`"i like ${pizza[i]}"`);}
//console.log("I really love pizza!");

//Question#35
//Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
var animal:string[]=["Donkey","Ox","horse"]
//for(var i=0; i<animal.length; i++){
  //console.log(`" ${animal[i]} Would make great pet"`);}
//console.log("thes animal carry heavy load");

//Question#36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
//should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size:number,message:string){
console.log(`""size":${size},"message:${message}"`);}
//make_shirt(26,"I need 26 size of shirt");

//Question#37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function makeShirt(size:string="large",message:string="I love typescript" ){
             console.log(`${size}"size",${message}`)}
//makeShirt();
//makeShirt("Medium");
//makeShirt("small size", "I need small size shirt");
  
//Question#38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string,country:string='pakistan'){
    console.log(`${city} is in ${country}`)}
//describe_city("karachi");
//describe_city("lahore");
//describe_city("neus","Deutschland");

//Question#39
//Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted
function city_country(city:string,country:string){
           return console.log(`"${city},${country}"`)}
//city_country("Faisalabad","Pakistan");
//city_country("Lahore","Pakistan");
// city_country("Karachi","Pakistan");

//Question#40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value
// to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
 function make_album(artistName:string, albumtitle:string, trackNumber?:number){
              type album={artistName:string, albumtitle:string, trackNumber?:number}
          var album2:album={
            artistName,
            albumtitle, 
            trackNumber
            };
            if(trackNumber!==undefined){
              album2.trackNumber=trackNumber;
            }
            return album2;
 }
 var music=make_album("Nusrat Fateh Ali Khan","Afreen Afreen",300);
 console.log(music);
 var music1=make_album("Noor Jahan","Chandni Raatein",500);
 console.log(music1);
 var music2=make_album("Rahat Fateh Ali Khan","Zaroori Tha",100);
 console.log(music2);

 
//Question#41
//Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician:string[]=["Nasir","Ali","Afaq","Subhan"]
//function show_magicians(magicians:string[]){
  //for(var i=0; i<magicians.length; i++)
  //console.log(magicians[i]);}
//show_magicians(magician)

//Question#42
//Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
var magician:string[]=["Nasir","Ali","Afaq","Subhan"]
function show_magicians(magicians:string[]){
  for(var i=0; i<magicians.length; i++)
  console.log(magicians[i]);}
     function make_magicians(element:string[]){
      for(var i=0; i<element.length; i++){
        console.log(`The great ${element[i]}`);}
      }
      
     make_magicians(magician);
     //original array does not change.
     console.log("original magician:")
     show_magicians(magician);

     //Question#43
     // original magicians name does not change when i call show_magicians
     var magician:string[]=["Nasir","Ali","Afaq","Subhan"]
     function show_magicians1(magicians:string[]){
       for(var i=0; i<magicians.length; i++)
       console.log(magicians[i]);}
          function make_magicians1(element:string[]){
                 var showResult=element.map(i=>`The great ${i}`)
                        return showResult;}
          var greetin=make_magicians(magician);
          console.log(greetin)
          //original array does not change because map does not change original array 
          console.log("original magician:")
          show_magicians(magician);

//Question#44
// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects
// as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var sandwich:string[]=["cheez","spicy","chicken"]
function person(items:string[]){
  for(var i=0; i<items.length;i++){
    if(sandwich[i]=='cheez'){
        console.log("Please give me cheezy sandwich" );
    }else if(sandwich[i]=='spicy'){
      console.log("Please give me spicy sandwich" );
    }else if(sandwich[i]=='chicken'){
      console.log("Please give me chicken sandwich");
    }
    else{
      console.log("I don't want eat pizza")}
    }}
//person(sandwich);

//Question#45
//Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
//and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the 
//required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 
function car1(manufacturer:string,model:string, ...optional:[string,any][]):any{
  var fun:any={
    manufacturer,
    model,
  };
  for(var [key,values] of optional){
     fun[key]= values;}
  return fun;}
var solution=car1("Acura","Alfa romeo" ,["speed","good"],["color","black"]);
console.log(solution);


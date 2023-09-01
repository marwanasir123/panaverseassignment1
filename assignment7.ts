//using map methode multiply by 2
var array:number[]=[1,2,3,4,5]
var new_Array = array.map((number)=>{
    return number*2;
});
console.log(new_Array);
// using map method convert temperature in fahrenheit
var temperature:number[]=[0,10,20,30,40]
var celsius= temperature.map((values)=>{
       return (values*9/5)+32;
});
console.log(celsius);

//using filter remove all negative number from the array
var negative_num:number[]=[2,3,-4,-5,-6,1,7,-8]
var remove=negative_num.filter((remove_number)=>{
     if(remove_number>0){
        return remove_number;
     }
});
console.log(remove);

//use filter methode contain only more than 5 characters in array
var fruite:string[]=["apple","banana","cherry","date","graps"]
var chara=fruite.filter((character)=>{
       if(character.length>5){
         return character;
       }
});
console.log(chara);

//containg the squar of even number in array

var  even:number[]=[1,2,3,4,5,6,7,8,9,10]
var even_number = even.filter((even_squar)=>{
  if(even_squar%2==0){ 
  return even_squar; }   
});
    var res=even_number.map((even_squar)=>{
            return even_squar**2;
  });

console.log(res);
//containing the double value of odd number
var odd:number[]=[3,6,9,12,15,18]
var result = odd.filter((values:number)=>{
    if(values%2!=0){
      return values;
    }
});
var odd_value= result.map((values:number)=>{
     return values*values;
}
);
console.log(odd_value)
// using for each method print name with exclamation
var user_name:string[]=['"Alice"','"Bob"','"Charlie"','"David"','"Emily"']
user_name.forEach((name:string)=>{
//console.log(name,"!")
});

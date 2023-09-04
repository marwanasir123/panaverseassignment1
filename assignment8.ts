//print a message of person
var userName:string = "Eric";
//console.log(`"Hello, ${userName} would you like to learn some python today?"`);
//question#2
//print person name in uppercase lower ande titlecase
var personName:string="Marwa nasir"
var upercase=personName.toUpperCase();
var lowecase=personName.toLowerCase();
console.log(`Uppercase name ${upercase}`);
console.log(`Lowecase name ${lowecase}`)
//titlecase
function title_case(str:string){
  var stri = str.toLowerCase().split('');
  for(var i =0; i<stri.length; i++){
    stri[i]= stri[i].charAt(0).toUpperCase()+stri[i].slice(1);
  }
  return stri.join('');
}
var answer=title_case("Hello i'm a web developer");
console.log(answer)
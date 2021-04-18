//Function                      Time(1.12.05)
function Name(){
    console.log('Rakhavendra')
}
Name();

function Marks(name,score){
    var University =75;
    var College = 55;
    if(score >= University){
        console.log(name +' is topper of the University and '+ score + ' Points')
    }else if( score >= College){
        console.log(name +' is topper of the College and '+score+' Points');
    }else{
        console.log(name + ' is fail');
    }
}

function subMarks(tamil,eng,maths){
    var total = tamil + eng + maths 
    return total;
}

Marks('Rakhavendra',80)
Marks('pravin',60)
Marks('baby',40)
Marks('Dhanish',subMarks(20,30,32))

//function statement and function Expressions          Time(1.20.15)

function add(a,b){
    console.log(a+b);
}
add(3,0)

var sum = function add(a,b){
    console.log(a+b);
}
sum(34,88);

//Array part -1                                      Time(1.24.30)

var arr = ['rakhav','pravin',12,445,134,'dhanesh',[12,45,2], function(name){
    return 'Hello ' + name;
}];
console.log(arr[7](arr[1]));

arr = new Array(1,3,5,'Chennai',true);
console.log(arr);

//Array part -2                                     Time(1.31.24)
var colors=['white','black','red','blue'];
colors[1]='yellow';
console.log(colors);

colors.push('gray');   // add last position in item
console.log(colors);

colors.pop();          // remove last position in item
console.log(colors);

colors.shift();        // remove first position in item
console.log(colors);

colors.unshift('purple');  ///add first position in item
console.log(colors);

colors.unshift('pink');
console.log(colors);

colors.shift();
colors.shift();
console.log(colors);

console.log(colors.indexOf('red'));     //find the index of array in last updated value
console.log(colors.indexOf('black'));   //the item is not found in the last updated array it return the -1 value in default
console.log(colors.indexOf('pink'));
console.log(colors.indexOf('blue'));

if(colors.indexOf('pink')===-1){
    colors.push('pink');
    console.log(colors);
}

// Object  Part -1                              Time(1.36.34)
var person = new Object();
var job = "Work";
person.firstname="pravin";
person['lastname']="S M";
person[job]="Developer";
console.log(person);
console.log(person.firstname);
console.log(person.lastname);

person.name="Mohan";
person.initial="G";

person.son = new Object();
person.son.age=7;
person.son.school="KCM";

console.log(person);

//lecture: Object  Part -2                      Time(1.44.40)

var school ={
    name:"R.C.higher sec school",
    city:"Silukuvarpatti",
    color:'pink',
    class:{
        Numberofclass:'21',
        fan:'yes',
        board:true,
        bed:false
    },
    place:function(){
        console.log("It's very good place")
    },
    myfunc:function(name,city,color,Numberofclass){
        console.log("I studyed the "+name+" at "+city+" building color is "+color+" total number of classes is "+Numberofclass);
    },
    myfunc1:function(data){
        console.log("My brother studying the "+data.name+" at "+data.city+" building color is "+data.color+" total number of classes is "+data.Numberofclass);
    }
}
console.log(school);
console.log(school.class.bed);
school.place();
school.myfunc(school.name,school.city,school.color,school.class.Numberofclass);
school.myfunc1( {name:"KCM",city:"NLK",color:"white",Numberofclass:30} );

//Loops                                             Time(1.52.05)
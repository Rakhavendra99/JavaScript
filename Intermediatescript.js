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

//function statement and function Expressions

function add(a,b){
    console.log(a+b);
}
add(3,0)

var sum = function add(a,b){
    console.log(a+b);
}
sum(34,88);

//Array

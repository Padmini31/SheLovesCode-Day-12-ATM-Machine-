function mul() {
    var h=document.getElementById("num").value;
    var s=document.getElementById("d");
  if(h%3==0)
  {
   s.innerHTML="no. is multiple of 3";
  }
  else{
      s.innerHTML="not a multiple of 3";
  }
}

function sbs() {
    var h=document.getElementById("n").value;
   var t=document.getElementById("t").value;
   
    var s=document.getElementById("a");
k=h.toLowerCase() ;
t=t.toLowerCase();
//checks t value present or not.. 
b=k.search(t) ;
if(b>-1){
s.innerHTML="present - at index "+b;
}
else{
   s.innerHTML  ="Not present";
}}


function calci() {
 var p=document.getElementById("p").value;
 var r=document.getElementById("r").value;
 var t=document.getElementById("tm").value;
 var ci=document.getElementById("ci");
 a=p*Math.pow(1+r/100,t);
 c=a-p;
 a=Math.round(a);
 c=Math.round(c);
 console.log(c);
 ci.innerHTML="C.I. "+c;
}

function ly() {
var y=document.getElementById("y").value;
var ly=document.getElementById("l");
if(y%4==0){
  
ly.innerHTML="its a leap year- "+y;
}
else{
 ly.innerHTML=y+" is not a leap year ";
}
}


function y() {
 v=document.getElementById("v").value;
day=document.getElementById("day");
v=Number(v);
//cnsole.log(typeof(v));
  switch(v) 
{
    case 0:
     day.innerHTML="Sunday";
        break;
  case 1:
        day.innerHTML="Monday";
       break;
case 2:
day.innerHTML="Tuesday";
        break;
case 3:
        
day.innerHTML="Wednesday ";
        break;
case 4:
        
day.innerHTML="Thursday";
        break;
case 5:
day.innerHTML="Friday";
        
        break;
        
case 6:
day.innerHTML="Saturday";
        break;
        
default:
       
day.innerHTML="Wrong value enterd.";
}
}
  
 function tab() {
    var y=document.getElementById("m").value;
var tb=document.getElementById("tbl");
tb.innerHTML="Table of "+y+":"+"<br/>";
for(i=1;i<=10;i++)
  {
tb.innerHTML=tb.innerHTML+"<br>"+y+"*"+i+"="+y*i;

}
}

function sod() {
var y=document.getElementById("sum").value;
var tb=document.getElementById("shw");
var s=0;
while(y>9)
{
    d=y%10;
    s=s+d;
    y=y/10;
}
sm=Math.floor(s+y);
tb.innerHTML="the sum of dgits is "+sm;

}
 
function pal() {
 var y=document.getElementById("pl").value;
var tb=document.getElementById("pln");
rev="";
for(i=0;i<y.length;i++){
 rev=y[i]+rev;
}
if(rev==y){

tb.innerHTML="Palindrome";
}
else{
tb.innerHTML="Not a Palindrome";
}
}

function evn() {
    var y=document.getElementById("ev").value;
var tb=document.getElementById("e");

for(i=1;i<=y;i++){
if(i%2==0)
{

tb.innerHTML=tb.innerHTML+"<br>"+i;
}
}
}

function chr() {
    var y=document.getElementById("ch").value;
var tb=document.getElementById("c");
y=y.toLowerCase();
if(y=='a'||y=='e'||y=='i'||y=='o'||y=='u') 
{
tb.innerHTML="vowel";
}
else{
    tb.innerHTML="Consonant";
}
}
function evod() {
    e=0;
    o=0;
var tb=document.getElementById("ei");
for(i=1;i<1000;i++)
{
 if(i%2==0){
     e++;
}
else{
    o++;
}
}
    tb.innerHTML=" even no. is "+e;
    tb.innerHTML=tb.innerHTML+"<br> odd no.is "+o;

}
evod();


 
function cntc() {
   c=0;
var s=document.getElementById("w").value;
var h=document.getElementById("chr").value;
var tb=document.getElementById("cn");

for(i=0;i<s.length;i++) 
{
    if(s[i]==h)
    {
        c++;
        console.log("val of",s[i]);
        console.log("val of h",h);
    }}
   
tb.innerHTML="occurrence "+h+" in "+s+" is "+c;
}



function dem() {
    c=8;
    console.log ("val c", c) ;
}
dem();

function ele(s) {
   smar=0;
   avgar=0;
    console.log(typeof(s));
var tb=document.getElementById("araSum");

var averg=document.getElementById("aavg");
for(i=0;i<s.length;i++){
    smar= smar+s[i];
}
avgar=smar/s.length;
tb.innerHTML="sum [1,9,8] is "+smar;


averg.innerHTML="average [1,9,8] is "+avgar;

    
    
}
ele([1,9,8]) ;



function largel() {
   
var la=document.getElementById("la").value;

var tb=document.getElementById("lag");
ary=la.split("");

max=0;
for(i=0;i<ary.length;i++){
 if(ary[i]>max) 
  {
  max=ary[i];
  }
}
tb.innerHTML="max is "+max;

}




function prntval() {
   
var tb=document.getElementById("valu");

for(i=1;i<=100;i++){
 if(i%3==0 && i%5==0){
    tb.innerHTML=tb.innerHTML+"<br>"+"Hello"+i;
 }
 
 else if(i%3==0) 
  {
  tb.innerHTML=tb.innerHTML+"<br>"+i+"foo";
  }
 else if(i%5==0){
    tb.innerHTML=tb.innerHTML+"<br>bar"+i;
 }
 
 else{
     tb.innerHTML=tb.innerHTML+"<br>"+i;
 }
}}
prntval();


function adevn() {
   
var tb=document.getElementById("sevn").value;
var ae=document.getElementById("ae");

su=0;
 A=tb.split("");
 for(j=0;j<A.length;j++)
 {
     nmb=Number(A[j]) ;
     if(nmb%2==0){
         su=su+nmb;
     }
     console.log("nmb",nmb);
 }
 //console.log("sum of even no.",su) ;
 
ae.innerHTML="sum of even no."+su;
 
}



function find() {
    var inp=document.getElementById("inp");
    var inpval=inp.value;
    //console.log("find function");
    // check whtehr enter any element 
    
    var emp=document.getElementById("emp");
    
    
    if(inpval==0){
        console.log("null");
       emp.innerHTML="please enter an element";
    }
    else
    {
        console.log("not");
    emp.innerHTML=" ";
    
    var abc=document.getElementById("xyz");
    console.log("find");
    
    show.innerHTML=show.innerHTML+inpval+",";
    alert("entr next element. ");
    inp.value="";
    }

}

function res() {
    f=0;
   show=document.getElementById("show");
   var val=show.innerHTML;
   console.log(val, "value of val");
   console.log(typeof(val), "typeofval") ;
  
   ara=val.split(",");
   console.log(ara.length,"aray lengt",ara);
  console.log(typeof(ara[0]));
  
  var ser=document.getElementById("ser");
   serval=ser.value;
   console.log(serval, "serval");
   var sho=document.getElementById("shwres");
   //rsv=sho.innerHTML;
   for(i=0;i<ara.length;i++) {
       if(ara[i]==serval) {
           f=1;
          sho.innerHTML="present at index "+i;
          sho.innerHTML=serval;
       }
   }
   console.log(f,"f");
   if(f==0){
      inp=document.getElementById("inp");
      inp.value=" ";
      
      sho.innerHTML="no match found ";
   }
}


function callfunc(){
    console.log("callfunc fun");
    var abc=document.getElementById("xyz");
   
    abc.innerHTML="Enter next element";
    var inp=document.getElementById("inp");
    var inpval=inp.value;
    var show=document.getElementById("show");
    show.innerHTML=show.innerHTML+inpval+" ";
    inp.value="";
    //console.log("callfun end");
    }

function finsma(){
    var min=Math.min(5,7,99);
    console.log("min val in [5,7,99]",min) ;
   abc=document.getElementById("smal");
   
   abc.innerHTML="smalest val in [5,7,99] is "+min;

}

function smal() {
   
var inp=document.getElementById("in").value
var f=document.getElementById("sml");

 A=inp.split("");
 min=A[0];
 for(j=0;j<A.length;j++)
 {
     nmb=Number(A[j]) ;
     if(nmb<min){
      min=nmb;
     }
 }
      f.innerHTML="smallest no. "+min;
 }


function bigeve() {

var b=document.getElementById("bg");
 A=[10,12, 94, 93, 707];
 max=0;
 B=[];
 for(j=0;j<A.length;j++)
 {
     nmb=Number(A[j]) ;
     if(nmb%2==0){
      B.push(nmb);
     }
 }
 for(j=0;j<B.length;j++){
     if(B[j]>max) {
         max=B[j];
     }
 }
     b.innerHTML="biggest even no. in array "+A+" is "+max;
 }
bigeve();


function adel() {
 var q=document.getElementById("adar");
 a=[10,20,30];
 b=[1,2,3];
 p=[];
 // [10,20,30] + [1,2,3]: [11, 22, 33]
p.push(a[0]+b[0]);
p.push(a[1]+b[1]);
p.push(a[2]+b[2]);
q.innerHTML="addition of array "+p;
}
adel();



function arev() {
 var q=document.getElementById("rv");
 a=[10,78,0];
 rev=[];
 console.log(a[0],"array of arev");
 for(i=a.length-1;i>=0;i--){
    
   rev.push(a[i]);
 }
 q.innerHTML="reverse of array "+a+" is : <br>"+rev;
}
arev();
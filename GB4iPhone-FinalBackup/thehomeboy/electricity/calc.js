// this is for the calculator on the left hand side of the page
// for the voltage/power calculator
// appears to have no bugs.  hopefully.
var E=0;
var I=0;
var R=0;
var P=0;
function clearBoxes(form)
{
form.E.value="";
form.I.value="";
form.R.value="";
form.P.value="";
form.E.focus();
}
function showresults(form) {
form.E.value=E;
form.I.value=I;
form.R.value=R;
form.P.value=P;
}
function solve(form) {
var i = 4;
if (!form.E.value) E=0;
else E=eval(form.E.value);
if (E==0) i--;
if (!form.I.value) I=0; 
else I=eval(form.I.value);
if (I==0) i--;
if (!form.R.value) R=0;
else R=eval(form.R.value);
if(R==0) i--;
if(!form.P.value) P=0;
else P=eval(form.P.value);
if(P==0) i--;
if(i==0) return;
if(i !=2)
{
alert("\nError. Please enter 'two' values.\n");
return;
}
if(E !=0)
{
if(I !=0)
{	
R=E/I;
P=E*I;				
}
else if (R !=0)
{
I=E/R;
P=(E*E)/R;				
}
else if (P !=0)
{
I=P/E;
R=(E*E)/P;				
}
showresults(form);			
form.E.focus();
return; 
}
if(I !=0)
{
if (R !=0)
{				
E=I*R;
P=(I*I)*R;				
}
else if (P !=0)
{		
E=P/I;
R=P/(I*I);			
}
showresults(form);			
form.I.focus();
return;
}	
I=Math.sqrt(P/R);
E=Math.sqrt(P*R);			
showresults(form);			
form.R.focus();
return;
}
// end Calculation: electric power, voltage, current, and resistance -->



// start Calculation n=1
function comp(n)
{
count=0;
if (document.getElementById("a"+n).value!="")
count++;
if (document.getElementById("b"+n).value!="")
count++;
if (document.getElementById("c"+n).value!="")
count++;
if (count!=2)
{
alert("Please enter 2 values, the third leave empty!");
return false;
}
aa=document.getElementById("a"+n).value.replace(",",".");
bb=document.getElementById("b"+n).value.replace(",",".");
cc=document.getElementById("c"+n).value.replace(",",".");
if (document.getElementById("a"+n).value=="")
{
aa=bb*cc;
document.getElementById("a"+n).value=aa;
}
else if (document.getElementById("b"+n).value=="")
{
bb=aa/cc;
document.getElementById("b"+n).value=bb;
}
else if (document.getElementById("c"+n).value=="")
{
cc=aa/bb;
document.getElementById("c"+n).value=cc;
}
}
// end Calculation: voltage, amperage and resistance aa = bb * cc -->

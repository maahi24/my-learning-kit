var i = 0;
var txt = "This Kit is developed by Maahi patel";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function p01Func() {
	
  

   document.getElementById("problem").innerHTML="<p> draw a flowchart for a computer program to receive two numbers and output their sum. </p>";
  
 
     document.getElementById("flowchart").setAttribute("src","IMG_01.jpg");
     document.getElementById("flowchart").style.display="none";

  
  
       document.getElementById("js").setAttribute("src","js01.jpg");
       document.getElementById("js").style.display="none";


       document.getElementById("another").setAttribute("src","images/dosa/dosa2.jpg");
       document.getElementById("another").style.display="none";

 
 
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
} 
  




function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
     
      
     document.getElementById("flowchart").style.display="inline";
	 
  }
  else {
   
     
     document.getElementById("flowchart").style.display="none";
	  
  }
}



function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
   	 
    
     document.getElementById("js").style.display="inline";
	 
  }
  else {
     
     document.getElementById("js").style.display="none";
	  
  }
}





function checkUncheck3(){
  if(document.getElementById("check3").checked==true) {
     
   document.getElementById("another").style.display="inline";

  }

  else{

   document.getElementById("another").style.display="none";

  }

}




function p02Func(){

   document.getElementById("problem").innerHTML="<p> draw a flowchart for a computer program to receive three numbers and store them in memory spaces called a, b, and c as three sides of a triangle and, by using Heron’s formula, calculate and output the area of triangle.  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_02.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js02.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}



function zoomIn(){

   document.getElementById("flowchart").style.width="200%";
   document.getElementById("js").style.width="200%";

}

function zoomOut(){

    document.getElementById("flowchart").style.width="100%";
    document.getElementById("js").style.width="100%";

}


function p03Func(){

   document.getElementById("problem").innerHTML="<p> draw a flowchart for a computer program to receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots. Write a precondition that assumes coefficients are good enough such that a solution in real number exists. That means your design should not concern cases for which a solution does not exist.  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_03.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js03.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p04Func(){

   document.getElementById("problem").innerHTML="<p> draw a flowchart to receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers.  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_04.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js04.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p05Func(){

   document.getElementById("problem").innerHTML="<p> draw a flowchart to receive a number and map it to a letter grade based on York standard.   </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_05.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js05.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p06Func(){

   document.getElementById("problem").innerHTML="<p>assume there is a webpage containing an HTML input of type text and a button. When the button is clicked a function, named Problem06, is called. Draw a flowchart that outputs whether the input is positive or negative until a zero is received. When a zero is received, the button is disabled (so the function cannot be called anymore).  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_06.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js06.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p07Func(){

   document.getElementById("problem").innerHTML="<p> by modifying your flowchart above, draw a flowchart to continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, then it stops. </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_07.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js07.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function p08Func(){

   document.getElementById("problem").innerHTML="<p> considering the same approach above, draw a flowchart to continue receiving numbers and output if they are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 6, then it stops. IMPORTANT RESTRICTION: you are not allowed to divide the number by 6; therefore, you are not allowed to use the modulus operator (%) over 6 to verify the remainder whether the number is divided by 6. You can do any other math trick you wish.  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_08.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js08.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p09Func(){

   document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output each digit separately. For instance, if the input is 692, the program should output 2, 9, 6. Another example, if the number is 135429 the program should out put 9, 2, 4, 5, 3, and 1.  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_09.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js09.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p10Func(){

   document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output how many of its digits are equal to 7. For instance, if the input is 772, the program should output 2, because there are two sevens there. Another example, if the input is 14368, the program should output 0.  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_10.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js10.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p11Func(){

   document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output sum of its digits. For instance, if the input is 63932, the program should output 23, because 6+3+9+3+2 is 23. Another example, if the input is 23 the program should output 5. </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_11.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js11.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p12Func(){

   document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output yes if it's equal to its reverse; otherwise, output no. For instance, if the input is 63936, the program should output yes, because if you read the digits from left to right or from right to left, it's the same number. But, if the input is 632, the program should output no because 632 is not the same as 236.  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_12.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js12.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p13Func(){

   document.getElementById("problem").innerHTML="<p> Devise an algorithm to receive a positive number, as n, and output n! (n Factorial).  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_13.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js13.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}


function p14Func(){

   document.getElementById("problem").innerHTML="<p> Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence. In Fibonacci sequence, the first two values are 0 and 1 and other values are sum of the two values preceding it. For instance, if the input is 4, the program should print 0, 1, 1, 2,. As another example, if the input is 9, the program should output 0, 1, 1, 2, 3, 5, 8, 13, 21,.  </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_14.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js14.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}


function p15Func(){

   document.getElementById("problem").innerHTML="<p> Devise an algorithm to input a positive integer, n, – and by using XX characters – output the figure below that has n rows and each row k has k pairs of XX. For instance, if input is 5, the figure on the left (and if the input is 12, the figure on the right) should be generated by the program. </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_15.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js15.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}



function p16Func(){

   document.getElementById("problem").innerHTML="<p> devise a program to receive a number and determine if it is a prime or not </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_16.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js16.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}


function p17Func(){

   document.getElementById("problem").innerHTML="<p> Devise an algorithm to receive a positive number, n, and output all prime numbers that are smaller than n and have a digit 7. For example, if n is 100, the program should output 7, 17, 37, 47, 67, 71, 73, 79, and 97. </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_17.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js17.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}


function p18Func(){

   document.getElementById("problem").innerHTML="<p>  Draw a flowchart to receive a positive number (in base 10) and output its binary representation (base 2). You are not allowed to use any built-in function to convert the number—such as parseInt() or any other function. Instead, you should use some loops and convert the number through a computational process. </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_18.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js18.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}



function p19Func(){

   document.getElementById("problem").innerHTML="<p>  Devise an algorithm to input 200 numbers and determine how many are positive and how many negative. </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_19.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js19.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}


function p20Func(){

   document.getElementById("problem").innerHTML="<p>  Devise an algorithm to output 12 characters “*”. </p>";

 
   document.getElementById("flowchart").setAttribute("src","IMG_20.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","js20.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}
function p21Func() {
   document.getElementById("problem").innerHTML = "<p>Multipication of two numbers without using mutiply operator.</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_21");

   document.getElementById("js").setAttribute("src", "js21.jpg");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p22Func() {
   document.getElementById("problem").innerHTML = "<p>Show biggest number until the smallest is inputed.</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_22.jpg");

   document.getElementById("js").setAttribute("src", "js22.jpg");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p23Func() {
   document.getElementById("problem").innerHTML = "<p>Show if Sum 1 is equal to Sum2.</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_23.jpg");

   document.getElementById("js").setAttribute("src", "js23.jpg");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}
function p24Func() {
   document.getElementById("problem").innerHTML = "<p>a modulo b without modulus sign</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_24.jpg");

   document.getElementById("js").setAttribute("src", "js24.jpg");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}
function p25Func() {
   document.getElementById("problem").innerHTML = "<p>Sum of number between 10 and 30</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_25.jpg");

   document.getElementById("js").setAttribute("src", "js25.jpg");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p26Func() {
   document.getElementById("problem").innerHTML = "<p> Devise a program to receive a number greater than 1 and determine if it is a power of 2 or not.</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_26.jpg");

   document.getElementById("js").setAttribute("src", "js26.jpg");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}


function p27Func() {
   document.getElementById("problem").innerHTML = "<p> Draw a flowchart to keep receiving numbers from the end-user and determine if they are positive or negative , until a zero is recevied.</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_27.jpg");

   document.getElementById("js").setAttribute("src", "js27.jpg");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}


function p28Func() {
   document.getElementById("problem").innerHTML = "<p> GCD </p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_28.jpg");

   document.getElementById("js").setAttribute("src", "js28.jpg");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p29Func() {
   document.getElementById("problem").innerHTML = "<p>Sum of digit 1 to 100 using Arrays</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_29.jpg");

   document.getElementById("js").setAttribute("src", "js25.png");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p30Func() {
   document.getElementById("problem").innerHTML = "<p>Factorial with Nested Loops</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_30.jpeg");

   document.getElementById("js").setAttribute("src", "js26.png");


   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p31Func() {
   document.getElementById("problem").innerHTML = "<p>Determine Heads or Tails..!!!</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_31.jpeg");

   document.getElementById("js").setAttribute("src", "js31.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p32Func() {
   document.getElementById("problem").innerHTML = "<p>Determine if no. is equal to it's reverse??</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_32.jpeg");

   document.getElementById("js").setAttribute("src", "js32.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p33Func() {
   document.getElementById("problem").innerHTML = "<p>Determine no. of positve and negative digits</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_33.jpeg");

   document.getElementById("js").setAttribute("src", "js33.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p34Func() {
   document.getElementById("problem").innerHTML = "<p>Determine no. is divisible by 6 or not</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_34.jpeg");

   document.getElementById("js").setAttribute("src", "js34.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p35Func() {
   document.getElementById("problem").innerHTML = "<p>Multiplication of a no.</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_35.jpeg");

   document.getElementById("js").setAttribute("src", "js35.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p36Func() {
   document.getElementById("problem").innerHTML = "<p>No. to decimal</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_36.jpeg");

   document.getElementById("js").setAttribute("src", "js36.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p37Func() {
   document.getElementById("problem").innerHTML = "<p>Determine if it's perfect no. or not</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_37.jpeg");

   document.getElementById("js").setAttribute("src", "js37.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p38Func() {
   document.getElementById("problem").innerHTML = "<p>Determine if it's self dividing no. or not</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_38.jpeg");

   document.getElementById("js").setAttribute("src", "js38.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}
function p39Func() {
   document.getElementById("problem").innerHTML = "<p>Determine Max 1s</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_39.png");

   document.getElementById("js").setAttribute("src", "js39.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}

function p40Func() {
   document.getElementById("problem").innerHTML = "<p>Design a pattern 1 12 123...And So one</p>";

   document.getElementById("flowchart").setAttribute("src", "IMG_40.jpeg");

   document.getElementById("js").setAttribute("src", "js40.png");

   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
}
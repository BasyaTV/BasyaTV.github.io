var a=0 ;
var b=0 ;
var c=0 ;
var d=0 ;
var e=0 ;
var f=0 ;
var g=0 ;
var h=0 ;
var i=0 ;
var j=0 ;
var result ;


function V1_1 (){
	a= 1;
}
function V1_2 (){
	a= -1;
}
function V1_3 (){
	a= -1;
}
function V1_4 (){
	a= -1;
}

function V2_1 (){
	b= -1;
}
function V2_2 (){
	b= 1;
}
function V2_3 (){
	b= 1;
}
function V2_4 (){
	b= -1;
}

function V3_1 (){
	c= -1;
}
function V3_2 (){
	c= -1;
}
function V3_3 (){
	c= 1;
}
function V3_4 (){
	c= -1;
}

function V4_1 (){
	d= 1;
}
function V4_2 (){
	d= -1;
}
function V4_3 (){
	d= -1;
}
function V4_4 (){
	d= -1;
}

function V5_1 (){
	e= -1;
}
function V5_2 (){
	e= 1;
}
function V5_3 (){
	e= -1;
}
function V5_4 (){
	e= 1;
}

function V6_1 (){
	f= -1;
}
function V6_2 (){
	f= 1;
}
function V6_3 (){
	f= 1;
}
function V6_4 (){
	f= -1;
}

function V7_1 (){
	g= -1;
}
function V7_2 (){
	g= -1;
}
function V7_3 (){
	g= 1;
}
function V7_4 (){
	g= -1;
}

function V8_1 (){
	h= -1;
}
function V8_2 (){
	h= -1;
}
function V8_3 (){
	h= 1;
}
function V8_4 (){
	h= 1;
}

function V9_1 (){
	i= 1;
}
function V9_2 (){
	i= -1;
}
function V9_3 (){
	i= -1;
}
function V9_4 (){
	i= -1;
}

function V10_1 (){
	j= -1;
}
function V10_2 (){
	j= 1;
}
function V10_3 (){
	j= 1;
}
function V10_4 (){
	j= 1;
}

function result(){
	var first = a + b + c + d + e + f + g + h + i + j;
	result = document.getElementById('result');
	result.innerHTML = 'Ты натурал(ка) на ' + first + '% из 10';
	
}

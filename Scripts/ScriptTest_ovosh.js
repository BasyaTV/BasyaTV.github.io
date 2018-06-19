var x=0 ;
var result ;

function V1_1 (){
	x= x+1;
}
function V1_2 (){
	x= x-1;
}
function V1_3 (){
	x= x-1;
}
function V1_4 (){
	x= x-5;
}

function V2_1 (){
	x= x-1;
}
function V2_2 (){
	x= x+1;
}
function V2_3 (){
	x= x+1;
}
function V2_4 (){
	x= x-3;
}

function V3_1 (){
	x= x-2;
}
function V3_2 (){
	x= x-1;
}
function V3_3 (){
	x= x+1;
}
function V3_4 (){
	x= x=1;
}

function V4_1 (){
	x= x+1;
}
function V4_2 (){
	x= x-1;
}
function V4_3 (){
	x= x-2;
}
function V4_4 (){
	x= x-4;
}

function V5_1 (){
	x= x-1;
}
function V5_2 (){
	x= x+1;
}
function V5_3 (){
	x= x-3;
}
function V5_4 (){
	x= x+5;
}

function V6_1 (){
	x= x-5;
}
function V6_2 (){
	x= x+1;
}
function V6_3 (){
	x= x+2;
}
function V6_4 (){
	x= x-4;
}

function V7_1 (){
	x= x-1;
}
function V7_2 (){
	x= x-5;
}
function V7_3 (){
	x= x+5;
}
function V7_4 (){
	x= x-1;
}

function V8_1 (){
	x= x-1;
}
function V8_2 (){
	x= x-3;
}
function V8_3 (){
	x= x+2;
}
function V8_4 (){
	x= x=1;
}

function V9_1 (){
	x= x+1;
}
function V9_2 (){
	x= x-1;
}
function V9_3 (){
	x= x-2;
}
function V9_4 (){
	x= x-4;
}

function V10_1 (){
	x= x-1;
}
function V10_2 (){
	x= x+2;
}
function V10_3 (){
	x= x=2;
}
function V10_4 (){
	x= x+5;
}

function result(){
	
	result = document.getElementById('result');
	result.innerHTML = 'Ты овощ на ' + x + '% из 10';
	
}

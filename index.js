var numberArray = [];
var resultArray = document.getElementById("result-array");

//find positive number
function findPositiveArray(){
    positiveArray = [];
    for(var i = 0; i< numberArray.length; i++){
        if(numberArray[i]> 0){
            positiveArray.push(numberArray[i]);
        }
    }
    return positiveArray;
}
//button add

function addNumber(){
    var number = document.getElementById("input-array").value*1;
    numberArray.push(number);
    resultArray.innerHTML = numberArray;
}
// bai 1
function sum(){
    var sumPos = 0;
    var result= document.getElementById("result-sum");
    numberArray.forEach(item => {
        if(item >= 0){
            sumPos += item;
        }
    });
    result.innerHTML = `Tổng số dương: ${sumPos}`;
}
//bai 2
function countNumber(){
    var count =0;
    var result = document.getElementById("result-count");
    numberArray.forEach(item =>{
        if(item> 0){
            count++;
        }
    })
    result.innerHTML = `Có <span class="text-danger">${count}</span> số dương`;
}
//bai 3
function findSmallestNumber(){
    var smallest = 0;
    var result = document.getElementById("result-smallest-number");
    numberArray.sort(function(a,b) { return a - b } );
    smallest= numberArray[0];
    result.innerHTML= `Số nhỏ nhất trong mảng: ${smallest}`;
}
//bai 4
function findSmallestPositiveNumber(){
    var smallest = 0;
    var result = document.getElementById("result-smallest-positive-number");
    var posArray = findPositiveArray();
    if(posArray.length >0){
        posArray.sort();
    smallest = posArray[0];
    result.innerHTML= `Số DƯƠNG nhỏ nhất trong mảng: ${smallest}`;
    }
    else{
        result.innerHTML= `Không có số dương trong mảng`;

    }

}
//bai 5
function findLastEven(){
    var evenNumber = 0;
    var evenArray = [];
    var result = document.getElementById("result-last-even");
    numberArray.forEach(e => {
        if(e % 2 == 0){
            evenArray.push(e);
        }
    });
    if( evenArray.length >0){
        evenNumber = evenArray[evenArray.length-1];
        result.innerHTML= `Số chẵn cuối cùng trong mảng: ${evenNumber}`;

    }
    else{
        result.innerHTML= `không có số chẵn trong mảng: -1`;
        return -1;
    }

}
//bai 6
function swapNumber(){
   var swapOne=document.getElementById("swap-1").value;
   console.log("🚀 ~ swapNumber ~ swapOne:", swapOne)
   var swapTwo=document.getElementById("swap-2").value;
   console.log("🚀 ~ swapNumber ~ swapTwo:", swapTwo)
   var t;
    var result = document.getElementById("result-swap");
    for(var i=0 ; i < numberArray.length; i++){
        t = numberArray[swapOne] ;
        numberArray[swapOne] = numberArray[swapTwo] ;
        numberArray[swapTwo] = t;

    }
    result.innerHTML=` chuỗi sau khi đổi chỗ: ${numberArray}`
}
//bai 7
function sortArray(){
    var result = document.getElementById("result-sort");
    var sortedArray=numberArray.sort(function(a,b) { return a - b } );
    console.log(sortArray);
    result.innerHTML= `Mảng tăng dần: ${sortedArray}`;
}
//bai 8
function findPrimeNumber(){
    var result = document.getElementById("result-prime");
    var primeArray = [];
    numberArray.forEach(e => {
        for(var i = 2; i <= e; i++){
            if( e % i == 0 && e>1 ){
                return -1;
            }else{
                primeArray.push(e);
            }
        }
    });
    if(primeArray.length>0){
        console.log(primeArray[0]);
        result.innerHTML= `Số nguyên tố đầu tiên: ${primeArray[0]}`;

    }
    else{
        result.innerHTML= `Không có số nguyên tố: -1`
    }
}
//bai 9
//bai 10
function comparePosNeg(){
    var result = document.getElementById("result-compare");
    var positiveArray = findPositiveArray();    
    var negativeArray = [];
    for(var i = 0; i< numberArray.length; i++){
        if(numberArray[i]<0){
            negativeArray.push(numberArray[i]);
        }
    }
    if( positiveArray.length > negativeArray.length){
        result.innerHTML =`số dương > số âm
        <br/>
        <span>số dương: ${positiveArray.length}</span>
        <br/>
        <span>số âm: ${negativeArray.length}</span>`;
    }
    else if(positiveArray.length == negativeArray.length){
        result.innerHTML = `số dương = số âm
        <br/>
        <span>số dương: ${positiveArray.length}</span>
        <br/>
        <span>số âm: ${negativeArray.length}</span>`;

    }else{
        result.innerHTML= `số dương < số âm
        <br/>
        <span>số dương: ${positiveArray.length}</span>
        <br/>
        <span>số âm: ${negativeArray.length}</span>`;
    }

}
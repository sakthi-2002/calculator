sum = 0;
sumstr="";
function by_add(){
    a=parseInt(document.getElementById("id1").value);
    sum+=a;
    if(sumstr.length==0){
        sumstr+=a;
    }else{
        sumstr +=("+" +a);
    }
    document.getElementById("id2").innerHTML = sumstr;
    document.getElementById("id1").value="";
}
function by_sub(){
    a=parseInt(document.getElementById("id1").value);
    sum-=a;
    if(sumstr.length==0){
        sumstr+=a;
    }else{
        sumstr +=("-" +a);
    }
    document.getElementById("id2").innerHTML = sumstr;
    document.getElementById("id1").value="";
}
function by_mul(){
    a=parseInt(document.getElementById("id1").value);
    sum*=a;
    if(sumstr.length==0){
        sumstr+=a;
    }else{
        sumstr +=("*" +a);
    }
    document.getElementById("id2").innerHTML = sumstr;
    document.getElementById("id1").value="";
}
function by_div(){
    a=parseInt(document.getElementById("id1").value);
    sum/=a;
    if(sumstr.length==0){
        sumstr+=a;
    }else{
        sumstr +=("/" +a);
    }
    document.getElementById("id2").innerHTML = sumstr;
    document.getElementById("id1").value="";
}
function by_result(){
    document.getElementById("id1").value="";
    document.getElementById("result").innerHTML = sum;
    
}

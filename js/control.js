 var arr=[];
 
 var show = document.getElementsByClassName('show')[0];
     show.innerHTML= "";

function sum(itm){
    arr.push(itm.name);
    var result =arr.join('');
    show.innerHTML= result;
    


} //sum

function total(){
    try{
        show.innerHTML = eval(arr.join(''))}

    catch{show.innerHTML='';
         alert("Wrond Eqation") }
    arr=[];
} //total

function myClear(){
       show.innerHTML ='';
       arr =[];
}//clear

function remove(){
    arr.pop();
    var result =arr.join('');
    show.innerHTML= result;

}



 
const btnel= document.querySelector('.btn');
    const fin=document.querySelector('.input')


function computeBMI(){
    const hel= document.getElementById('Height').value/100 ;
    const wel= document.getElementById('Weight').value;

    const bmival= wel/(hel*hel)

    // fin.style.disabled=false;
    fin.value=bmival ;
    console.log(bmival)
    const con=document.querySelector('.para1');

    if (bmival<18.5){
        con.innerHTML=`Under-weight.`

    }else if(bmival>=18.5 && bmival<=24.9){
        con.innerHTML=`Normal-weight.`
    }else if(bmival>=25 && bmival<29.9){
        con.innerHTML=`Over-weight.`
    }else if(bmival>=30){
        con.innerHTML=`Obesity.`        
    }

    // console.log(hel,wel)






}

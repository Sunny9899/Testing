
function sbmt(INC,SAV){

    if(INC<500000){
        if((SAV/2)>=50000){
            INC-=50000;
        }
        else{
            INC-=SAV/2;
        }
        //tax+=(0.1*INC);
    }
    else if(INC>=500000 && INC<1000000){
        if((SAV*0.3)>=50000){
            INC-=50000;
        }
        else{
            INC-=SAV*0.3;
        }
        //tax+=(0.2*INC);       
    }
    else{
        if((SAV*0.1)>=50000){
            INC-=50000;
        }
        else{
            INC-=SAV*0.1;
        }        
    }
    
    return(calculate(INC));
}


function calculate(t){
    if(t<250000){
      return(0);
    }
    else if(t>=250000 && t<500000){
        return(0.1*t);
    }
    else if(t>=500000 && t<1000000){
        return(0.2*t);
    }    
    else{
        return(0.3*t);        
    }
}

module.exports={sbmt,calculate};
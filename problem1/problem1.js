function sbmt(inpt){
    let inptS=(inpt/1000);
    //let out=document.getElementById("out");
    //out.textContent=null;
    if(inptS<=59){
        return(Math.floor(inptS)+"second");
    }
    else if(inptS>59&&inptS<=3599){
        let inptM=inptS/60;
        let inptS2=Math.round((inptM-Math.floor(inptM))*60);
        if(inptS2>=60){
            inptM+=Math.floor(inptS2/60);
            inptS2=(inptS2/60-Math.floor(inptS2/60))*60;
        }         
        if (inptS2!=0){
        return (Math.floor(inptM)+"minute"+" "+inptS2+"second");
        }
        else{
           return (Math.floor(inptM)+"minute");    
        }
    }
    else{
        let inptH=inptS/3600;
        let inptM2=(inptH-Math.floor(inptH))*60;
        let inptS3=Math.round((inptM2-Math.floor(inptM2))*60);
        if(inptS3>=60){
            inptM2+=Math.floor(inptS3/60);
            inptS3=(inptS3/60-Math.floor(inptS3/60))*60;
        }
        if (inptS3!=0 && inptM2!=0){
        return (Math.floor(inptH)+"hour"+" "+Math.floor(inptM2)+"minute"+" "+inptS3+"second");
        }
        else if(inptM2!=0 && inptS3==0){
           return (Math.floor(inptH)+"hour"+" "+Math.floor(inptM2)+"minute");    
        }         
        else if(inptM2==0 && inptS3==0){
           return (Math.floor(inptH)+"hour");    
        }
    }
    }

    module.exports={sbmt};
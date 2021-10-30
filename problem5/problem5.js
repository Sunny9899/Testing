function sbmt(inpt){ 

    var num=false;
    var caps=false;
    var small=false;
    var symbol=false;

    if((inpt).length>=6){
        
        for(var i=0;i<inpt.length;i++){
            var code=inpt.charCodeAt(i);
           // console.log(code);
           if(code>=48&&code<=57){
               num=true;
           }
           if(code>=65&&code<=90){
               caps=true;
           }
           if(code>=97&&code<=122){
               small=true;
           }
           if((code>=33&&code<=47)||(code>=58&&code<=64)||(code>=91&&code<=96)||(code>=123&&code<=126)){
               symbol=true;
           }
        }
        if(!num){
            return("Include Number");
        }
        if(!caps){
            return("Include Capital Letter");
        }
        if(!small){
            return("Include Small Letter");
        }
        if(!symbol){
            return("Include Symbol");
        }                                    
        else if(num,caps,small,symbol){
            num=false;
            caps=false;
            small=false; 
            symbol=false;            
            return ("Password Valid");

        }
    }
    else{
        return("Password Length too Short");
    }
}

module.exports={sbmt};
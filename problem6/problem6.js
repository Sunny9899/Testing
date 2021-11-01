function sum(mat,m,n){
    var s=0;
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(typeof(mat[i][j])=="string"){
                return("Input Invalid");
                break;
            }
        s+=mat[i][j];
        }
    }
    if(typeof(s)=="number"){
        return s;
    }
}

module.exports={sum};
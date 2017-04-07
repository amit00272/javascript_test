var Anagram=function (str) {
    this.str=str;
}

Anagram.prototype.matches=function (...restArgs) {

       var resultantArray=[];
       var restDisArray=[];
       Array.isArray(restArgs[0])?restDisArray=restArgs[0]:restArgs.map(x=>restDisArray.push(x));
       restDisArray.map(val =>{
                        if(this.str.length != val.length || val.toLowerCase() == this.str.toLowerCase())return;
                        let dVal=val;
                        this.str.split('').map(value => dVal = dVal.replace(new RegExp(value,"i"),''));
                        if(dVal.trim()!='') return;
                        resultantArray.push(val);

                    });
       return resultantArray;
}

module.exports=Anagram;
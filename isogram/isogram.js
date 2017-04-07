
var Isogram=function(word){

    this.word=word.toLowerCase();
}

Isogram.prototype.isIsogram=function(){

    return  !/([\w\u00C0-\u01BF]).*\1/.test(this.word);

}
module.exports=Isogram;

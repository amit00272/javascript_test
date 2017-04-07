
var BeerSong=function(){}

BeerSong.prototype.verse=function(num){

    return num==2?"2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n":
           num==1?"1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n":
           num==0?"No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n":
                  num+" bottles of beer on the wall, "+num+" bottles of beer.\nTake one down and pass it around, "+(num-1)+" bottles of beer on the wall.\n";

}

BeerSong.prototype.sing =function(start,end){

    var lastVerse=end==undefined?0:end;
    var result="";

    for(let i=start;i>=lastVerse;result=result+=this.verse(i)+"\n",i--);

    return result.replace(/\n$/,'');

}

module.exports=BeerSong;

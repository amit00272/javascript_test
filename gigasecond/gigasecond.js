
var Gigasecond = function (date) {

    this.givenDate=date;
}

Gigasecond.prototype.date = function(){

    return new Date(((this.givenDate.getTime() / 1000) +  Math.pow(10, 9) ) * 1000);

}

module.exports=Gigasecond;
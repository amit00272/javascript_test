
var Year =function(num) {
            this.year=num;
          };

Year.prototype.isLeap = function() {

    if(this.year%100==0)
       return this.year%400==0;
       return this.year%4==0;
};

module.exports = Year;

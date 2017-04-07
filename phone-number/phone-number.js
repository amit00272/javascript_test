
var PhoneNumber=function(phone) {
  this.phone=phone.trim();
}

PhoneNumber.prototype.number=function(){

    return formatNumber(this.phone);
}

PhoneNumber.prototype.toString=function () {

    return formatNumber(this.phone).replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")
}

PhoneNumber.prototype.areaCode=function () {

    return formatNumber(this.phone).replace(/(\d{3})\d{7}/,"$1")
}

var formatNumber=phone=>{

    phone=phone.replace(/(\d?)\(?(\d{3,4})\)?\s?\.?-?(\d{3,4})-?\s?\.?(\d{4})/,"$1$2$3$4");

    if(phone.length==11)
        return phone.startsWith("1")?phone.replace(/\d(\d{10})/,"$1"):"0000000000";

    return phone;

}

module.exports=PhoneNumber;

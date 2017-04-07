
var Bob=function () {}

Bob.prototype.hey = sentance => {

    return sentance.toUpperCase() == sentance && /[a-z]/i.test(sentance) ? 'Whoa, chill out!':
           sentance.trim() === '' ? 'Fine. Be that way!' :
           sentance.endsWith('?') ? "Sure." : "Whatever.";


}

module.exports = Bob;
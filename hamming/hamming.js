
var Hamming=function () {}

Hamming.prototype.compute=(dna1,dna2)=>{

    if(dna1.length!=dna2.length)
        throw new Error("DNA strands must be of equal length.");

    return dna1.split('').reduce((result,value,index)=>value!=dna2[index]?result+1:result,0);
}


module.exports=Hamming;
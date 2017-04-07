const dna="GCTA";
const rna="CGAU";

var DnaTranscriber=function () {}

DnaTranscriber.prototype.toRna= input => input.split('').reduce((result,value)=>{

                                         if(dna.indexOf(value)<0)
                                            throw "Invalid input";

                                         return result+rna[dna.indexOf(value)];

                                         },"");


module.exports = DnaTranscriber;
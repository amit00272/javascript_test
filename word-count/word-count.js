var Word=function () {}

Word.prototype.count = pGraphs => {

    var ocr={};
    pGraphs.toLowerCase()
           .split(/[.?,¡¿!&@$%^:;\t\n\\\/ ]+/)
           .map(val=>{

               if(val.trim()=='')return;

               val=val.replace(/\'(\w+)\'/,"$1");
               ocr[val] = ocr.hasOwnProperty(val) ? ocr[val] + 1 : 1;

           });

    return ocr;
}

module.exports=Word;


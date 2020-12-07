var process=function(input,index,length){
      var output=input.substr(index,length);
     var outputArray=input.substr(index,length).split("");
     return outputArray;
 }
 console.log(process("amaresh",3,3));
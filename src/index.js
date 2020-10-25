module.exports = function toReadable (number) {
    let result;
    let wholePart;
    let decadePart;
    let hundredPart;
    let simpleNumber=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
    let elevenToNineteen=['thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let decade=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let hundred='hundred';
      if(number<=12){
          result=simpleNumber[number];
        return simpleNumber[number];
      }
      if(number>12 && number<=19){
          result= elevenToNineteen[number-13];
          return elevenToNineteen[number-13];
      }
      if(number>19 && number<=99){
          wholePart=parseInt(number/10);
          decadePart=number%10;
          if(decadePart === 0){
              result=decade[wholePart-2];
              return decade[wholePart-2];
          }
          if(decadePart != 0){
              result=decade[wholePart-2]+' '+simpleNumber[decadePart];
              return decade[wholePart-2]+' '+simpleNumber[decadePart];
          }
  
      }
      if(number>99 && number<=999){
          wholePart=parseInt(number/100);
          decadePart=number%100;
          if (decadePart === 0){
              hundredPart=0;
          }else if(decadePart != 0 && decadePart>9){
            hundredPart=decadePart%10;
          }else if(decadePart != 0 && decadePart<=9){
            hundredPart=decadePart;
            decadePart=0;
            
          }
  
          if(decadePart === 0 && hundredPart === 0){
            result=simpleNumber[wholePart]+' '+hundred;
              return simpleNumber[wholePart]+' '+hundred;
          }
          if(decadePart === 0 && hundredPart != 0){
            result=simpleNumber[wholePart]+' '+hundred+' '+simpleNumber[hundredPart];
              return simpleNumber[wholePart]+' '+hundred+' '+simpleNumber[hundredPart];
          }
  
          if(decadePart != 0 && hundredPart != 0){
              result=simpleNumber[wholePart]+' '+hundred;
              if(decadePart<=12){
                  result+= ' '+simpleNumber[decadePart];
                }
                if(decadePart>12 && decadePart<=19){
                  result+= ' '+elevenToNineteen[decadePart-13];
                }
                if(decadePart>19 && decadePart<=99){
                  wholePart=parseInt(decadePart/10);
                  decadePart=decadePart%10;
                  if(decadePart === 0){
                      result+= ' '+decade[wholePart-2];
                  }
                  if(decadePart != 0){
                      result+= ' '+ decade[wholePart-2]+' '+simpleNumber[decadePart];
                  }
          
              }
              return result;
          }
  
      }
  
  }
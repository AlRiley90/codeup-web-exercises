
var hasTacos= ["blueberry muffin", "banana", "yogurt", "cereal", "brisket ang egg taco"]
var noTacos = ["parfait", "omlette de frumage", "protein shake", "fasting"]
function tacoTuesday(arr){
//arrays have length < use that for my loop
    //a FOR loop is good for set numbers of iterations
   for(var i =0; i<arr.length; i++){
       //as we go through the array: check the element to see if it has the word 'taco'
      if(arr[i].includes("taco")){
          //return true if you find a taco
          return true;
      }
   }
return false;
}
tacoTuesday(hasTacos);
tacoTuesday(noTacos);
function search(searchItemRaw,stringRaw){
    if (typeof searchItemRaw == 'string' && typeof stringRaw == 'string'){
      
      //Tidy input strings

      let searchItem = searchItemRaw.toLowerCase();
      let string = stringRaw.toLowerCase();
      let itemLength = searchItem.length;
      let searchArea = '';
      let count = 0;
  
      for (i=0; i < string.length; i++){
  
        //Extract a section of the string to compare to searched item
        searchArea = string.slice(i, i + itemLength);
  
        //Increase the count if found 
        if (searchArea === searchItem){
          count++;
        }
        //Repeat until the entire string is searched, section by section      
      }
  
      //Display the searched item in the original text by capitalising it
  
      let highlightedString = string.replace(RegExp(searchItem, 'g'),searchItem.toUpperCase());
     
     return [count, highlightedString];
   
    }
  
    else{
      return 'Search Error - Please Ensure Both Inputs are Strings';
      }
      
  }
  //TEST
  
  let paragraph = 'The 8 quick brown foxes jump over the lazy dog - the dog is extremely lazy';
  
  
  console.log(search(8,paragraph));
  console.log(search('E',paragraph));
  console.log(search('dog',paragraph));



  
  

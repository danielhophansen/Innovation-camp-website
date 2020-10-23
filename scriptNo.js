window.addEventListener('load', (e) => {
    let array = Array.from(document.getElementsByClassName("button"));
	array.map( (val) => val.addEventListener('click', e => changeModule.cmpWithArray(val)));
	array[0].click();

});	

var changeModule = (function() {
  'use strict';

  let problems = ["Kostnad","Enkelthet","Område","Implementering"];

  return {
    cmpWithArray: function(val) {
		    let index     = problems.findIndex(x=>x===val.innerHTML);
		    let solutions = Array.from(document.getElementsByClassName("solution"));
	   
			solutions.filter((val,idx)=> idx!=index).forEach(x=>x.style.display = "none");
			solutions.filter((val,idx)=> idx==index).forEach(x=>x.style.display = "block");
	        val.style.backgroundColor = "red";
	        val.style.color = "white";
			let array = Array.from(document.getElementsByClassName("button"));
			array.filter((val,idx)=> idx!=index).forEach(x=>{
				 x.style.backgroundColor = "black";
	             x.style.color = "white";
				
			});
    }	    
  };
})();


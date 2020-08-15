function myFunction()
  {
  
      var x = document.getElementById("links");
      var y=document.getElementById("header_")
      if(x.style.display==="block")
      {
          x.style.display="none";
          y.style.height="70px";
      }
      else{
  
          x.style.display="block";
          y.style.height="fit-content";
          
  
      }
  }
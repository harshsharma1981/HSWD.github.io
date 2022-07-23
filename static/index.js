function myFunction() {
    var x = document.getElementById("mylinks");
    var y = document.getElementById("navbar");
   
    if (x.style.display === "block") {
      x.style.display = "none";
      
      y.style.height = "45px";
    } else {
      x.style.display = "block";
      y.style.height = "230px";
    }
   

  }


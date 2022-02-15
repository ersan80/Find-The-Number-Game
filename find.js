let input = document.getElementById("number");
let check = document.getElementById("check");
let write = document.getElementById("write")
let image = document.getElementById("image")

let num = Math.trunc(Math.random() * 100);
let hak = 1;


check.disabled = false;
check.addEventListener("click", () => {
  
 
    write.innerText = `Number of attempts : ${hak}`
    let veri = input.value;
    
    

    if (hak==10) {
      window.alert("You have no more rights. Number Retained : " + num);
      check.disabled = true;
      
      
    }
    else if (veri == ""){
      window.alert("Please Enter a number!!!")

    }
    
    else if (veri < num) {
      window.alert("Please Enter a Larger Number...");
      hak++;
  
    }
    else if (veri > num) {
      window.alert("Please Enter a Smaller Number...");
      
      hak++;
      
    }
    else /* (veri == num) */ {
      window.alert("Congratulations, you know. Number I keep: " + num);
      window.alert(hak + ". you know about");
      image.style.display = "block"
     
    }
  });


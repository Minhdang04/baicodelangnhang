document.getElementById('button').addEventListener('click', click)
function click() {
    let a = document.getElementById('cc').value;
    let b = document.getElementById('age').value;
    let c = document.getElementById('cn').value;
    let d = document.getElementById('gender').value;
    if (d == 'male'){
        let e = (10*Number(c)) + (25/4*Number(a)) - ((123/35)*Number(b)) - 5
        alert(('Your BMR is ' + e))
    }
    else if (d == 'female'){
        let f = (10*Number(c)) + (25/4*Number(a)) - ((123/35)*Number(b)) - 161
        alert('Your BMR is ' + f)
    }
}function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
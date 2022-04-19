function validate(){
  let confirmtxt=document.getElementById("confirmtxt").value;
  let pswrdtxt=document.getElementById("pswrdtxt").value;
  if(pswrdtxt == "" & confirmtxt==""){
    window.alert("No password detected");
  }
  else if (pswrdtxt == "" || confirmtxt=="") {
    window.alert("All areas should be filled");
  }
  else if (pswrdtxt == confirmtxt) {
    window.alert("Passwords match")
  }
  else {
    window.alert("Passwords don't match, please make sure they match");
  }
}

function addition(){
  let label_tomioka = document.getElementById("tomioka");
  label_tomioka.innerHTML = 1;
  let label_tanjiro = document.getElementById("tanjiro");
  label_tanjiro.innerHTML = 1;
  let label_rengoku = document.getElementById("rengoku");
  label_rengoku.innerHTML = 1;
  label_compra = document.getElementById("compra");
  label_compra.innerHTML = 35 + "Dolares con IVA incluido"
}

function deletion(){
  let label_tomioka = document.getElementById("tomioka");
  label_tomioka.innerHTML = 0;
  let label_tanjiro = document.getElementById("tanjiro");
  label_tanjiro.innerHTML = 0;
  let label_rengoku = document.getElementById("rengoku");
  label_rengoku.innerHTML = 0;
  label_compra = document.getElementById("compra");
  label_compra.innerHTML = 0 + " Dolares con IVA incluido"
}

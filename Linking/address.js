
  document.querySelector("#form").addEventListener("submit", myFunction);

  let ArrayOfObj = JSON.parse(localStorage.getItem("address")) || [];

  // console.log(ArrayOfObj)

  //     if(localStorage.getItem("jobApplications")==null){
  //       jobArr=[]
  //     }
  //     else{
  //       jobArr=JSON.parse(localStorage.getItem("jobApplications"))
  //     }

  let cancel=document.getElementById("cancel").addEventListener("click", cancelFunc);

function cancelFunc(){
  alert("You Clicked Cancel Icon")
}


  function myFunction(event) {
    event.preventDefault();

    var address = {
      name: document.querySelector("#name").value,
      pinCode: document.querySelector("#pincode").value,
      Flat: document.querySelector("#flatNO").value,
      City: document.querySelector("#city").value,
      State: document.querySelector("#state").value,

    };

    ArrayOfObj.push(address);
    //array of objects

    localStorage.setItem("address", JSON.stringify(ArrayOfObj));

  }

  document.querySelector("#form").addEventListener("submit", myFunction);

  let ArrayOfObj = JSON.parse(localStorage.getItem("address")) || [];

  // console.log(ArrayOfObj)

  //     if(localStorage.getItem("jobApplications")==null){
  //       jobArr=[]
  //     }
  //     else{
  //       jobArr=JSON.parse(localStorage.getItem("jobApplications"))
  //     }

  function myFunction(event) {
    event.preventDefault();

    var address = {
      name: document.querySelector("#name").value,
      pinCode: document.querySelector("#pincode").value,
      Flate: document.querySelector("#flateNO").value,
      City: document.querySelector("#city").value,
      State: document.querySelector("#state").value,
    };

    ArrayOfObj.push(address);
    //array of objects

    localStorage.setItem("address", JSON.stringify(ArrayOfObj));

  }
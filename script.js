
let formData = {
    name: "",
    email: "",
    status: "active",
    gender: "female"
}


function submitFormData(){
    let options  = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 7214c4829eb26cc0dbecb4def7d275db6c6435e361615305e2411c681af9cd83"
        },
        body: JSON.stringify(formData)
    }
    let url = "https://gorest.co.in/public/v2/users";
    fetch(url, options)
    .then(function(response) {

            console.log("Status:", response.status);

            return response.json();

        })
        .then((data)=>{
            console.log(data);
            if(data[0].message == "has already been taken"){
                console.log(data[0].message);
                errmessage2.textContent = data[0].message;
                errmessage2.style.color = "red";
            }
            else{
                errmessage2.textContent = "Account Created Successfully";
            }
        })

        .catch(function(error) {

            console.log("Error:", error);


        });
}
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(event){
    console.log("Form submitted");
    event.preventDefault();
    submitFormData(formData);
})
let errmessage1 = document.getElementById("errorMessage1");

let nameEl = document.getElementById("name");
console.log(nameEl.value);
console.log(nameEl.value);
nameEl.addEventListener("blur", function(event)  {
    console.log("blur event triggered");
    console.log(event.target.value);
    if(event.target.value === ""){
        console.log("Enter Your name");
        //warning message
        errmessage1.textContent="* Required";
        errmessage1.style.color = "red";

    }
    else{
        errmessage1.textContent = "good";
    }
    formData.name = event.target.value;
})

let errmessage2 = document.getElementById("errorMessage2");

let emailEl = document.getElementById("email");
console.log(emailEl.value);
emailEl.addEventListener("blur", function(event)  {
    console.log("blur event triggered");
    console.log(event.target.value);
    if(event.target.value === ""){
        console.log("Enter Your Email");
        //warning message
        errmessage2.textContent="* Required";
        errmessage2.style.color = "red";

    }
    else{
        errmessage2.textContent = "";
    }
    formData.email = event.target.value;
})

let workingStatusEl = document.getElementById("status");
console.log(workingStatusEl);
workingStatusEl.addEventListener("change",function(event){
    console.log(event.target.value);
    formData.status = event.target.value;
    console.log(formData);
})

let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value;
    console.log(formData);
})

let genderFemaleEl = document.getElementById("genderFemale");
genderFemaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value;
    console.log(formData);
})
let innerContainer = document.querySelector(".innerContainer")
let resultBox = document.querySelector(".resultBox");
 const akinMale =["Kwasi","Kwadwo", "Kwabena",  "Kwaku","Yaw", "Kofi", "Kwame"];
 const akinFemale =["Akosua","Adwoa", "Abenaa", "Akua","Yaa", "Afua", "Ama"]
 let form = document.getElementById("form");
 let akinName
 form.addEventListener("submit",(e)=>{
    e.preventDefault();// prevents page reload everytime submit btn is clicked

    let formData =  new FormData(e.target)//create an object from formData constructor that collects all form data at once the event is fired
    let date = new Date(formData.get("date")) //create an object from date constructor to help us get the exact date user filled
    let dayOfWeek = date.getDay()//get the exact day from the date using getDay method returns in keys 
    if(formData.get("gender")=== null){
        alert("please select your gender")
    }
     akinName = (formData.get("gender")=== "male")? (akinMale[dayOfWeek]): (akinFemale[dayOfWeek]);

    // alert(akinName);
    showResult()
});



// show results
let showResult = function(){
    resultBox.classList.add("active");
    innerContainer.classList.add("active")
//    document.querySelector("#results").innerHTML =akinName;
   if(akinName == akinMale[0]){
    resultBox.style.backgroundImage="url(../assets/kwesi.png)"
   }
   if(akinName == akinMale[1]){
    resultBox.style.backgroundImage="url(../assets/kwado.png)"
   }
   if(akinName == akinMale[2]){
    resultBox.style.backgroundImage="url(../assets/kwabena.jpeg)"
   }
   if(akinName == akinMale[3]){
    resultBox.style.backgroundImage="url(../assets/kwaku.jpeg)"
   }
   if(akinName == akinMale[4]){
    resultBox.style.backgroundImage="url(../assets/yaa.jpeg)"
   }
   if(akinName == akinMale[5]){
    resultBox.style.backgroundImage="url(../assets/kofi.jpeg)"
   }
   if(akinName == akinMale[6]){
    resultBox.style.backgroundImage="url(../assets/kwame.jpeg)"
   }

}

//go back to home page
let close = document.querySelector(".close");
close.addEventListener("click", (e)=>{
    e.preventDefault();
    resultBox.classList.remove("active");
    innerContainer.classList.remove("active")
    form.reset();

})

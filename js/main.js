const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image_prev");

inpFile.addEventListener("change", function() {
    const file = this.files[0];
    //console.log(file);
    if(file){
        const reader = new FileReader();

        previewImage.style.display="block";

        reader.addEventListener("load", function(){
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    } else{
        previewImage.style.display="null";
        previewImage.setAttribute("src", "");
    }
})

const slider = document.getElementById("myRange");
const output = document.getElementById("valueRange");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function(){
    output.innerHTML = this.value;
    if(this.value>80){
        previewImage.style.filter  = "grayscale(100%)";
    } else if (this.value<80){
        previewImage.style.filter  = "grayscale(0%)";
    }
} 

const slider2 = document.getElementById("myR");
const output2 = document.getElementById("val");
output2.innerHTML = slider2.value; 

slider2.oninput = function(){
    output2.innerHTML = this.value;
    if(this.value>80){
        previewImage.style.filter  = "saturate(.4)";
    } else if (this.value<80){
        previewImage.style.filter  = "saturate(100%)";
    }
}

const slider3 = document.getElementById("myRs");
const output3 = document.getElementById("vals");
output3.innerHTML = slider3.value; 

slider3.oninput = function(){
    output3.innerHTML = this.value;
    if(this.value>80){
        previewImage.style.filter  = "sepia(100%)";
    } else if (this.value<80){
        previewImage.style.filter  = "sepia(0)";
    }
}


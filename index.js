//Classes are finded here
const imagesBox = document.querySelector(".ImagesBox");//Contain Images to be draged
const img = document.querySelector(".Img");//Contain image to drop draged images

//Drag is started for images Box
imagesBox.addEventListener("dragstart", (image)=>{
    console.log("Drag started");
    image.target.className += "hold";
    setTimeout(()=>{
        image.target.className = "hide";
    }, 4000);//given time delay for each image
});

imagesBox.addEventListener("dragend", (image)=>{
    console.log("Drag Ended");
image.target.className = "imagesBox";
});

//For of loop
for(Img of img){
    img.addEventListener("dragover", (image)=>{
        image.perventDefault();
        console.log("Drag Overed");
    })

    img.addEventListener("dragenter", (image)=>{
        console.log("Drag Entered");
        image.target.className += " dashed";
    })

    img.addEventListener("dragleave", (image)=>{
        console.log("Drag Leaved");
        image.target.className = "img";
    })

    img.addEventListener("drop", (image)=>{
        console.log("Drag Dropped");
        image.target.append(imagesBox);
    })
}
/* before draging image it has red border . After Drag done if same image image is draged again it doesn't contain red border*/
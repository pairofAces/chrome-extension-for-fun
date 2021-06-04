// create an array to act as the list of URLs(pics) of John Snow
let johnSnowImages = [
    // insert URLs here
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkkUj9fz7tseoQRgBfwxWfREOeq2cwHSeng&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnu0XhRwiHtyKEkJ8xkKpZWn7ME4YXC629KA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTH5OF4wbIDDpP3D-aRJ_234iO-0LcInDQjA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukG8cnumPFm4a_iV87ZRs53Vpl_sTPTVCgA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGqEUT2BOR3CxdjWwGmoACtFAw7ueOt0BBw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6W2RSJ3F-x5gRYny3Go9Y6rjSznwf6EehQ&usqp=CAU",
];

// create a variable to represent all of the DOM images
// of the website
const images = document.getElementsByTagName("img")

// initialize a for loop to traverse through the array of "img" tags from 
// the (images) variable
for (let i = 0; i < images.length; i++) {
    const random = Math.floor(Math.random() * johnSnowImages.length);
    images[i].src = johnSnowImages[random];
}

// use for loops to change all the header tags
const header1 = document.getElementsByTagName("h1")
for (let i = 0; i < header1.length; i++){
    header1[i].innerText = "Karan is Awesome"
}

const header2 = document.getElementsByTagName("h2")
for (let i = 0; i < header2.length; i++){
    header2[i].innerText = "Karan is Awesome"
}

const header3 = document.getElementsByTagName("h3")
for (let i = 0; i < header3.length; i++){
    header3[i].innerText = "Karan is Awesome"
}
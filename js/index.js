const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Selecting
let header = document.querySelector('header');



const navElements = document.querySelectorAll('a'); //All a's in NodeList

let title = document.getElementsByTagName('h1')[0];
let titleButton = document.querySelector('button');
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', "img/header-img.png")

let topContentTitle = document.querySelectorAll(".top-content .text-content h4");
let topContentContent = document.querySelectorAll(".top-content .text-content p");


let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', "img/mid-page-accent.jpg" );

let bottomContentTitle = document.querySelectorAll(".bottom-content .text-content h4");
let bottomContentContent = document.querySelectorAll(".bottom-content .text-content p");

let contactTitle = document.querySelector(".contact h4");
let contactContent = document.querySelectorAll(".contact p");

//Changing


header.style.display = "flex";


//first \n doesn't work
title.textContent = "DOM\nis\nAWESOME";
//title.textContent = siteContent["cta"]["h1"]

navElements[0].textContent = "Services";
navElements[1].textContent = "Product";
navElements[2].textContent = "Vision";
navElements[3].textContent = "Features";
navElements[4].textContent = "About";
navElements[5].textContent = "Contact";

titleButton.textContent = "Get Started";

topContentTitle[0].textContent = siteContent["main-content"]["features-h4"];
topContentContent[0].textContent = siteContent["main-content"]["features-content"];

topContentTitle[1].textContent = siteContent["main-content"]["about-h4"];
topContentContent[1].textContent = siteContent["main-content"]["about-content"];

console.log("test2");

bottomContentTitle[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentContent[0].textContent = siteContent["main-content"]["services-content"];

bottomContentTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentContent[1].textContent = siteContent["main-content"]["product-content"];

bottomContentTitle[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContentContent[2].textContent = siteContent["main-content"]["vision-content"];

contactTitle.textContent = siteContent["contact"]["contact-h4"];
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

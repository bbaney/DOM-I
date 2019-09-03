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

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Header------------------------------------------------------------------------//
let navBar = document.querySelectorAll('a');
let navItems = siteContent["nav"];

for(let i = 0; i < navBar.length; i++){
  navBar[i].textContent = navItems[`nav-item-${i+1}`];
  navBar[i].style.color = "green";
}

let newNav = document.createElement("a");
let newNavText = document.createTextNode("Sign Up!");
newNav.appendChild(newNavText);
newNav.style.color = "green";
document.querySelector("nav").appendChild(newNav);

let newNav2 = document.createElement("a");
let newNavText2 = document.createTextNode("Login!");
newNav2.prepend(newNavText2);
newNav2.style.color = "green";
document.querySelector("nav").prepend(newNav2);

//CTA Stuff --------------------------------------------------------------------//
let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];

//Main Content -----------------------------------------------------------------//
let pArray = siteContent["main-content"];
let keys = Object.keys(pArray);

let getHContent = document.querySelectorAll(".text-content h4");
let newKeys = keys.filter(n => n.includes("h4"));
for(let i = 0; i < newKeys.length; i++){
  getHContent[i].innerHTML = pArray[newKeys[i]];
}

let getPContent = document.querySelectorAll(".text-content p");
newKeys = keys.filter(n => n.includes("content"));
for(let i = 0; i < newKeys.length; i++){
  getPContent[i].innerHTML = pArray[newKeys[i]];
}

//Contact ----------------------------------------------------------------------//

let contactInfo = siteContent["contact"];
let contactH = document.querySelectorAll(".contact h4");
contactH[0].textContent = contactInfo["contact-h4"];

let contact = document.querySelectorAll(".contact p");
contact[0].textContent = contactInfo["address"];
contact[1].textContent = contactInfo["phone"];
contact[2].textContent = contactInfo["email"];

//Footer -----------------------------------------------------------------------//

let footer = document.querySelectorAll("footer p");
footer[0].textContent = siteContent["footer"]["copyright"];
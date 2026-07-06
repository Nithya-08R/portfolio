// AOS

AOS.init({

  duration:1000

});


// SIDEBAR

const menuBtn = document.getElementById("menu-btn");

const sidebar = document.getElementById("sidebar");

const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {

  sidebar.classList.add("active");

});

closeBtn.addEventListener("click", () => {

  sidebar.classList.remove("active");

});


// EMAIL JS

emailjs.init({

  publicKey:"I9u8F9wMRjtW-Toob",

});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(

    "service_8dzib6s",

    "template_qhfeazq",

    this

  )

  .then(() => {

    alert("Message Sent Successfully!");

    form.reset();

  })

  .catch((error) => {

    console.log(error);

    alert("Failed to send message");

  });

});
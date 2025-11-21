// scripts.js

// Año dinámico
$("#y").text(new Date().getFullYear());

// Validación con jQuery
$("#contactForm").on("submit", function (event) {
  event.preventDefault();

  let nombre = $("#nombre").val().trim();
  let email = $("#email").val().trim();
  let mensaje = $("#mensaje").val().trim();

  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Mensaje:", mensaje);

  if (nombre === "" || email === "" || mensaje === "") {
    $("#formMessage")
      .html("Por favor, completa todos los campos antes de enviar.")
      .removeClass()
      .addClass("mt-3 alert alert-danger");
  } else {
    $("#formMessage")
      .html("¡Gracias por tu mensaje! Me contactaré contigo pronto.")
      .removeClass()
      .addClass("mt-3 alert alert-success");

    $("#contactForm")[0].reset();
  }
});

// Smooth Scroll con jQuery
$("a.nav-link, a.btn").on("click", function (event) {
  const target = $(this).attr("href");

  if (target.startsWith("#")) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 70
      },
      600
    );
  }
});

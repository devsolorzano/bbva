<script type="text/javascript">
  const toggles = document.querySelectorAll(".faq-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.parentNode.classList.toggle("active");
    });
  });
</script>
<script type="text/javascript">
  $(".Click-here").on('click', function () {
    $(".custom-model-main").addClass('model-open');
  });
  $(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass('model-open');
  });
</script>
<script type="text/javascript">
  $(document).ready(function () {
    $("#formulario").validate();
  });
  $(document).ready(function () {
    $("#formulario2").validate();
  });
</script>
<script type="text/javascript">

  $(".checkbox-1").on("click", function () {
    if ($(".submitSolicitar").hasClass('bg-red')) {
      $(".submitSolicitar").removeClass('bg-red');
      $(".submitSolicitar").addClass('bg-grey');
    } else {
      $(".submitSolicitar").addClass('bg-red');
      $(".submitSolicitar").removeClass('bg-grey');
    }
  });
</script>
<script type="text/javascript">
  $("input#id_nombre").bind('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });

  $("input#id_dni").bind('keypress', function (event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });

  $("input#id_tel_contacto").bind('keypress', function (event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });

  document.querySelector('#formulario').addEventListener('submit', function (event) {
    var validation = [{
      selector: 'input[type="email"]',
      regex: /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,
      msg: 'Correo invalido'
    }, {
      selector: 'input[type="tel"]',
      regex: /^9\d{8}$/,
      msg: 'Celular invalido'
    }];

    var hideError = function (input) {
      var error = input.parentNode.querySelector('.custom-error');

      if (error) {
        error.parentNode.removeChild(error)
      }
    };

    var showError = function (input, msg) {
      var error = input.parentNode.querySelector('.custom-error');

      if (!error) {
        error = document.createElement('span');
        error.setAttribute('class', 'custom-error');
        error.textContent = msg;
      }

      input.parentNode.insertBefore(error, input.nextSibling);
    };

    var input, i, l, valid = false;

    for (i = 0, l = validation.length; i < l; i++) {
      input = this.querySelector(validation[i].selector);

      if (validation[i].regex.test(input.value.trim())) {
        hideError(input)
      } else {
        showError(input, validation[i].msg);
        valid = false;
      }
    }

    if (!valid) {
      event.preventDefault();
    }
  });

</script>
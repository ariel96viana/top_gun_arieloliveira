$(document).ready(function () {
  $("#inputPhone").mask("(00) 00000-0000");
  $("#inputCPF").mask("000.000.000 - 00");
  $("#inputCEP").mask("00000-000");

  $("form").validate({
    rules: {
      inputName: {
        required: true,
      },
      inputEmail: {
        required: true,
      },
      inputPhone: {
        required: true,
      },
      inputCPF: {
        required: true,
      },
      inputAddress: {
        required: true,
      },
      inputCEP: {
        required: true,
      },
    },

    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validation) {
      let invalidFields = validation.numberOfInvalids();

      if (invalidFields) {
        alert(`There's ${invalidFields} incorrect fields.`);
      }
    },
  });
});

//Autor: Gustavo Vera
(function ($) {
  $('.validate').click(function () {
    var fieldText = $('#fieldText').val();
    var cleanText = fieldText.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]/g,'')
      .toLowerCase();
    var stringReverse = cleanText.split('').reverse().join('');
    if (cleanText) {
      if (cleanText == stringReverse) {
        $('.c_false').removeClass('active');
        $('.c_true').addClass('active');
      } else {
        $('.c_true').removeClass('active');
        $('.c_false').addClass('active');
      }
      $('.returnpalindromo').html(fieldText);
    } else {
      alert('Ingresa una frase')
    }
  });
})(jQuery);






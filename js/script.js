window.onload = function() {
    var menu = document.getElementById('menu');
    var logo = document.getElementById('logo');

    logo.addEventListener('click', function() {
      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });

    document.addEventListener('click', function(event) {
      var target = event.target;
      if (!menu.contains(target) && target !== logo) {
        menu.style.display = 'none';
      }
    });
  };

  function lenguajes() {
    window.location.href = "lenguajes.html";
  }
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 현재 페이지 내비게이션 강조
  var here = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.sidenav-list a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (target === here || (target !== '/' && here.indexOf(target) === 0)) {
      a.classList.add('active');
    }
  });
})();

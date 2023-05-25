window.addEventListener("scroll", function() {
    var body = document.querySelector("body");
    var topBar = document.querySelector(".top-bar");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      body.classList.remove("scroll-down");
      topBar.style.height = "40px";
      topBar.style.padding = "5px";
    } else {
      body.classList.add("scroll-down");
      topBar.style.height = "60px";
    topBar.style.padding = "10px";
    }
  });
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  function navigateToPage(page) {
    const layout = document.querySelector('.layout');
    layout.classList.add('hide');
  
    setTimeout(function () {
      window.location.href = page;
    }, 300);
  }
  
  function toggleSideMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('open');
  }
  function openInstagram() {
    window.open("https://www.instagram.com/franciscomigueljeronimo");
  }
  function openLinkedin() {
    window.open("https://www.linkedin.com/in/francisco-jer%C3%B3nimo-342125177");
  }
  function openYoutube() {
    window.open("https://youtu.be/Wdg19fUDLY4");
  }
  function showFullscreenImage(imageSrc) {
    var fullscreenImg = document.querySelector('#fullscreen-img img');
    fullscreenImg.src = imageSrc;
    document.getElementById('fullscreen-img').style.display = 'block';
  }
  
  function hideFullscreenImage() {
    document.getElementById('fullscreen-img').style.display = 'none';
  }
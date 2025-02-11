function hideSidebar() {
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  
function showSidebar() {
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

function switchTheme() {
    const body = document.querySelector('body');
    const currentTheme = body.className;
    body.className = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
  }
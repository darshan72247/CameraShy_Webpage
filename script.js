const toogleSwitch = document.querySelector('input[type="checkbox"]');
//Switch Dynamically
function switchTheme(event){

    if(event.target.checked){
      document.documentElement.setAttribute('data-theme','dark');
      document.getElementById('toogle-text-change').textContent = 'Dark Mode';
      document.getElementById('dark-light-symbol').classList.remove('fa-sun');
      document.getElementById('dark-light-symbol').classList.add('fa-moon');
    } else {
      document.documentElement.setAttribute('data-theme','light');
      document.getElementById('toogle-text-change').textContent = 'Light Mode';
      document.getElementById('dark-light-symbol').classList.remove('fa-moon');
      document.getElementById('dark-light-symbol').classList.add('fa-sun');
    }
  }
  
  // event listener
  toogleSwitch.addEventListener('change',switchTheme);
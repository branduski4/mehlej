import{o as n,a}from"./firebase.DTSg3m3I.js";n(a,t=>{const e=document.getElementById("loading-message"),o=document.getElementById("auth-container");t?(e&&(e.innerHTML=`
          <div class="text-luxury-gold mb-2">
            <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <p>Redirigiendo al dashboard...</p>
        `),setTimeout(()=>{window.location.href="/admin/dashboard"},1500)):(e&&(e.style.display="none"),o&&o.classList.remove("hidden"))});

const menuBtn=document.getElementById('menuBtn');const nav=document.querySelector('nav');if(menuBtn)menuBtn.onclick=()=>nav.classList.toggle('open');
const themeBtn=document.getElementById('themeBtn');const root=document.documentElement;
function applyTheme(t,save){root.dataset.theme=t;if(themeBtn){themeBtn.textContent=t==='light'?'\u2600':'\u263E';themeBtn.setAttribute('aria-label',t==='light'?'Switch to dark mode':'Switch to light mode')}if(save){try{localStorage.setItem('theme',t)}catch(e){}}}
applyTheme(root.dataset.theme==='light'?'light':'dark',false);
themeBtn?.addEventListener('click',()=>applyTheme(root.dataset.theme==='light'?'dark':'light',true));
const typed=document.getElementById('typed');const words=['Machine Learning Engineer','Computer Vision Developer','AI Application Builder'];let wi=0,ci=0,del=false;
function type(){if(!typed)return;let w=words[wi];typed.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(type,75)}else if(!del){del=true;setTimeout(type,1300)}else if(ci>0){ci--;setTimeout(type,38)}else{del=false;wi=(wi+1)%words.length;setTimeout(type,300)}} type();
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
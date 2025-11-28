    // Jahr im Footer automatisch setzen
    document.getElementById("year").textContent = new Date().getFullYear();

    // Einfaches Scroll-Navigationsverhalten
    function scrollToTarget(id){
      const el = document.querySelector(id);
      if(!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 80; // Offset unterhalb Header
      window.scrollTo({top:y,behavior:"smooth"});
    }

    // Hauptnavigation
    const navMain = document.querySelector('.nav-main');
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(btn=>{
      btn.addEventListener('click',()=>{
        const target = btn.getAttribute('data-target');
        if(target){ scrollToTarget(target); }
        navItems.forEach(b=>b.classList.remove('current'));
        btn.classList.add('current');
        navMain.classList.remove('open');
      });
    });

    // Hero-Buttons
    document.querySelectorAll('[data-target]').forEach(btn=>{
      if(!btn.classList.contains('nav-item')){
        btn.addEventListener('click',()=>{
          const target = btn.getAttribute('data-target');
          if(target){ scrollToTarget(target); }
        });
      }
    });

    // Mobile-Menü Toggle
    const toggle = document.querySelector('.nav-toggle');
    if(toggle){
      toggle.addEventListener('click',()=>{
        navMain.classList.toggle('open');
      });
    }

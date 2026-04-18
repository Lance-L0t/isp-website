// Toast notification function
    function showToast(message, duration = 3000) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.style.opacity = '1';
      setTimeout(() => {
        toast.style.opacity = '0';
      }, duration);
    }

    // Dark Mode Toggle with local storage
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark');
      darkModeToggle.textContent = 'Light Mode';
    }
    
    darkModeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = 'Light Mode';
        showToast('🌙 Dark mode activated');
      } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = 'Dark Mode';
        showToast('☀️ Light mode activated');
      }
    });

    // Get Started button smooth scroll
    const getStartedBtn = document.getElementById('getStartedBtn');
    getStartedBtn.addEventListener('click', () => {
      const contactForm = document.querySelector('.feedback');
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('✨ Fill out the form to get connected!');
    });

    // Form submission handler with validation
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validation
      if (!fullName) {
        showToast('❌ Please enter your full name', 2500);
        return;
      }
      if (!email) {
        showToast('❌ Please enter your email address', 2500);
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('❌ Please enter a valid email address', 2500);
        return;
      }
      if (!phone) {
        showToast('❌ Please enter your phone number', 2500);
        return;
      }
      const phoneRegex = /^[\d\s\+\(\)\-]{8,}$/;
      if (!phoneRegex.test(phone)) {
        showToast('❌ Please enter a valid phone number', 2500);
        return;
      }
      
      // Success simulation
      showToast(`✅ Thanks ${fullName}! We'll contact you soon.`, 4000);
      contactForm.reset();
      
      // Optional: Log to console for debugging
      console.log('Form submitted:', { fullName, email, phone, message });
    });

    // Add hover effect for area cards with additional info
    const areaCards = document.querySelectorAll('.kinoo');
    const areaInfo = {
      'Kinoo': '📡 Up to 500 Mbps coverage',
      '87 Area': '🏢 Business district - 24/7 support',
      'Muthiga': '🏠 Residential fiber-ready',
      'Regency': '⭐ Premium zone - 1Gbps available'
    };
    
    areaCards.forEach(card => {
      const title = card.querySelector('h3').textContent;
      card.addEventListener('mouseenter', () => {
        const info = areaInfo[title] || '✅ Full coverage available';
        const tooltip = document.createElement('div');
        tooltip.className = 'area-tooltip';
        tooltip.textContent = info;
        tooltip.style.position = 'absolute';
        tooltip.style.bottom = '80px';
        tooltip.style.left = '20px';
        tooltip.style.backgroundColor = 'rgba(0,0,0,0.8)';
        tooltip.style.backdropFilter = 'blur(5px)';
        tooltip.style.padding = '5px 12px';
        tooltip.style.borderRadius = '20px';
        tooltip.style.fontSize = '0.8rem';
        tooltip.style.color = 'white';
        tooltip.style.zIndex = '10';
        tooltip.style.whiteSpace = 'nowrap';
        
        // Remove existing tooltip
        const existing = card.querySelector('.area-tooltip');
        if (existing) existing.remove();
        card.style.position = 'relative';
        card.appendChild(tooltip);
      });
      
      card.addEventListener('mouseleave', () => {
        const tooltip = card.querySelector('.area-tooltip');
        if (tooltip) tooltip.remove();
      });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Add some interactive card click effects
    const cards = document.querySelectorAll('.speed, .wires, .connect');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        showToast(`✨ ${title} - our premium feature!`, 2000);
      });
    });

    // Welcome toast on page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        showToast('🚀 Welcome to TorNet - Your wireless internet solution!', 3500);
      }, 500);
    });
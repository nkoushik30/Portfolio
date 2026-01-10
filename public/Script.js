// Premium Portfolio Animation Script
// Add this to your HTML before the closing </body> tag

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== SMOOTH REVEAL ANIMATIONS ON SCROLL =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply fade-in animation to sections
  const sections = document.querySelectorAll('.section, .project-card, .highlight-box');
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    observer.observe(section);
  });

  // ===== FLOATING PARTICLES EFFECT =====
  const createParticles = () => {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    `;
    body.insertBefore(particleContainer, body.firstChild);

    const colors = ['#c5a028', '#b87333', '#f3e5ab', '#e5dccd'];
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 5;
      const startX = Math.random() * 100;
      const endX = startX + (Math.random() * 20 - 10);
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: ${startX}%;
        bottom: -10px;
        opacity: 0;
        box-shadow: 0 0 ${size * 2}px ${colors[Math.floor(Math.random() * colors.length)]};
        animation: float${i} ${duration}s ease-in-out ${delay}s infinite;
      `;
      
      particleContainer.appendChild(particle);
      
      // Create unique animation for each particle
      const keyframes = `
        @keyframes float${i} {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(${endX - startX}vw) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);
    }
  };
  
  createParticles();

  // ===== PREMIUM HOVER GLOW EFFECT =====
  const cards = document.querySelectorAll('.skills, .projects, .workshops, .education, .contact-info, .experience, .project-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      this.style.boxShadow = '0 8px 40px rgba(197, 160, 40, 0.3), 0 0 60px rgba(184, 115, 51, 0.2)';
      this.style.borderColor = '#c5a028';
      this.style.transition = 'all 0.4s ease';
    });
  card.addEventListener('mouseleave', function(e) {
      this.style.boxShadow = '0 4px 20px rgba(81, 106, 31, 0.08), 0 0 1px #c5a028';
      this.style.borderColor = 'rgba(197, 160, 40, 0.2)';
    });
    
    // Spotlight effect following cursor
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      this.style.background = `
        radial-gradient(circle 300px at ${x}px ${y}px, 
          rgba(197, 160, 40, 0.08), 
          transparent 50%),
        linear-gradient(135deg, #fdfbf7 0%, #f5f3ed 100%)
      `;
    });
    
    card.addEventListener('mouseleave', function(e) {
      this.style.background = 'linear-gradient(135deg, #fdfbf7 0%, #f5f3ed 100%)';
    });
  });

  // ===== TYPING EFFECT FOR NAME =====
  const h1 = document.querySelector('h1');
  if (h1) {
    const originalText = h1.textContent;
    h1.textContent = '';
    h1.style.opacity = '1';
    
    let charIndex = 0;
    const typingSpeed = 80;
    
    const typeWriter = () => {
      if (charIndex < originalText.length) {
        h1.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        // Add cursor blink effect
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.cssText = `
          color: #c5a028;
          animation: blink 1s infinite;
          margin-left: 4px;
        `;
        h1.appendChild(cursor);
        
        const blinkStyle = document.createElement('style');
        blinkStyle.textContent = `
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `;
        document.head.appendChild(blinkStyle);
        
        // Remove cursor after 3 seconds
        setTimeout(() => cursor.remove(), 3000);
      }
    };
    
    setTimeout(typeWriter, 500);
  }

  // ===== BUTTON RIPPLE EFFECT =====
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: rippleEffect 0.6s ease-out;
      `;
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes rippleEffect {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);

  // ===== PARALLAX SCROLL EFFECT =====
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.project-card, .highlight-box');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.05 * (index + 1);
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });

  // ===== SKILL CARDS STAGGER ANIMATION =====
  const skillLists = document.querySelectorAll('.skills ul li');
  
  skillLists.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 300 + (index * 100));
  });

  // ===== GOLDEN SHIMMER EFFECT ON HEADINGS =====
  const headings = document.querySelectorAll('h2, h3');
  
  headings.forEach(heading => {
    heading.addEventListener('mouseenter', function() {
      this.style.textShadow = '0 0 20px rgba(197, 160, 40, 0.6), 0 0 40px rgba(184, 115, 51, 0.4)';
      this.style.transition = 'text-shadow 0.3s ease';
    });
    
    heading.addEventListener('mouseleave', function() {
      this.style.textShadow = 'none';
    });
  });

  // ===== SMOOTH LINK UNDERLINE ANIMATION =====
  const links = document.querySelectorAll('a:not(.btn)');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.textShadow = '0 2px 8px rgba(197, 160, 40, 0.3)';
      this.style.transition = 'all 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.textShadow = 'none';
    });
  });

  // ===== METALLIC GOLD SPARKLE EFFECT =====
  const createSparkles = () => {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.id = 'sparkle-container';
    sparkleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(sparkleContainer);

    document.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        
        sparkle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          background: radial-gradient(circle, #c5a028, #b87333);
          border-radius: 50%;
          pointer-events: none;
          animation: sparkleAnim 0.8s ease-out forwards;
          box-shadow: 0 0 ${size * 2}px #c5a028;
        `;
        
        sparkleContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
      }
    });

    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
      @keyframes sparkleAnim {
        0% {
          transform: scale(0) rotate(0deg);
          opacity: 1;
        }
        50% {
          transform: scale(1.5) rotate(180deg);
          opacity: 0.8;
        }
        100% {
          transform: scale(0) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(sparkleStyle);
  };

  createSparkles();

  // ===== PREMIUM GRADIENT BORDER ANIMATION =====
  const addGradientBorder = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rotateBorder {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .project-card:hover::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(45deg, #c5a028, #b87333, #f3e5ab, #c5a028);
        background-size: 300% 300%;
        border-radius: 16px;
        z-index: -1;
        animation: rotateBorder 3s ease infinite;
        opacity: 0.6;
      }
    `;
    document.head.appendChild(style);
  };

  addGradientBorder();

  // ===== SCROLL PROGRESS BAR =====
  const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 4px;
      background: linear-gradient(90deg, #c5a028, #b87333, #f3e5ab);
      z-index: 10000;
      transition: width 0.1s ease;
      box-shadow: 0 2px 10px rgba(197, 160, 40, 0.5);
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    });
  };

  createProgressBar();

  // ===== CONTACT BUTTON PULSE ANIMATION =====
  const contactButtons = document.querySelectorAll('.btn');
  
  contactButtons.forEach(btn => {
    setInterval(() => {
      btn.style.animation = 'pulse 2s ease-in-out';
      setTimeout(() => {
        btn.style.animation = '';
      }, 2000);
    }, 5000);
  });

  const pulseStyle = document.createElement('style');
  pulseStyle.textContent = `
    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 4px 15px rgba(81, 106, 31, 0.08);
      }
      50% {
        box-shadow: 0 8px 30px rgba(197, 160, 40, 0.4), 0 0 40px rgba(184, 115, 51, 0.3);
        transform: scale(1.03);
      }
    }
  `;
  document.head.appendChild(pulseStyle);

  // ===== SECTION NUMBER COUNTER ANIMATION =====
  const animateNumbers = () => {
    const numberElements = document.querySelectorAll('.highlight-box');
    
    numberElements.forEach(element => {
      const text = element.textContent;
      const matches = text.match(/\d+/g);
      
      if (matches) {
        matches.forEach(match => {
          const targetNumber = parseInt(match);
          if (targetNumber > 10) {
            let currentNumber = 0;
            const increment = targetNumber / 50;
            
            const counter = setInterval(() => {
              currentNumber += increment;
              if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(counter);
              }
              element.textContent = text.replace(match, Math.floor(currentNumber));
            }, 30);
          }
        });
      }
    });
  };

  setTimeout(animateNumbers, 1000);

  console.log('✨ Premium animations loaded successfully!');
});
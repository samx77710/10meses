// ============================================
// CONFIGURACIÓN DE PARTICLES.JS
// ============================================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ff4d6d', '#ffffff', '#ff758f']
        },
        shape: {
            type: ['circle', 'heart'],
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff4d6d',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// ============================================
// PANTALLA DE BIENVENIDA Y MÚSICA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const openGiftBtn = document.getElementById('open-gift-btn');
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const backgroundMusic = document.getElementById('background-music');
    
    openGiftBtn.addEventListener('click', function() {
        // Reproducir música
        backgroundMusic.play().catch(error => {
            console.log('No se pudo reproducir el audio automáticamente:', error);
        });
        
        // Ocultar overlay con animación
        welcomeOverlay.classList.add('hidden');
        
        // Inicializar AOS después de mostrar el contenido
        setTimeout(() => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic'
            });
        }, 500);
    });
});

// ============================================
// CONTADOR DE TIEMPO EN TIEMPO REAL
// ============================================
// IMPORTANTE: Cambia esta fecha por la fecha de inicio de tu relación
// Formato: Año, Mes (0-11, donde 0=Enero), Día, Hora, Minuto, Segundo
const startDate = new Date(2025, 3, 3, 0, 0, 0); // Ejemplo: 9 de Abril de 2024

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;
    
    // Calcular días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Actualizar el DOM
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Actualizar cada segundo
setInterval(updateTimer, 1000);
updateTimer(); // Llamada inicial

// ============================================
// EFECTO DE HOVER ADICIONAL EN GALERÍA
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ============================================
// ANIMACIÓN DE ENTRADA SUAVE
// ============================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// EFECTO DE PARALLAX EN SCROLL (OPCIONAL)
// ============================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-section, .section-title');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============================================
// CONTROL DE MÚSICA (OPCIONAL)
// ============================================
// Puedes agregar un botón para pausar/reproducir la música
function createMusicControl() {
    const musicControl = document.createElement('button');
    musicControl.innerHTML = '🔊';
    musicControl.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ff4d6d, #ff758f);
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(255, 77, 109, 0.4);
        transition: all 0.3s ease;
    `;
    
    let isPlaying = true;
    const music = document.getElementById('background-music');
    
    musicControl.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            this.innerHTML = '🔇';
        } else {
            music.play();
            this.innerHTML = '🔊';
        }
        isPlaying = !isPlaying;
    });
    
    musicControl.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 8px 30px rgba(255, 77, 109, 0.6)';
    });
    
    musicControl.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 5px 20px rgba(255, 77, 109, 0.4)';
    });
    
    document.body.appendChild(musicControl);
}

// Descomentar la siguiente línea para activar el control de música
// createMusicControl();

// ============================================
// EFECTO DE NIEVE/CORAZONES CAYENDO (OPCIONAL)
// ============================================
function createFallingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: fixed;
            top: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 10}px;
            opacity: ${Math.random() * 0.5 + 0.3};
            z-index: 999;
            pointer-events: none;
            animation: fall ${Math.random() * 3 + 3}s linear;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 3000);
}

// CSS para la animación de caída
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(style);

// Descomentar la siguiente línea para activar corazones cayendo
// createFallingHearts();
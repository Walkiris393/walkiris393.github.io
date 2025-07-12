document.addEventListener('DOMContentLoaded', function() {
    // Función para alternar modo oscuro/claro
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Verificar preferencia guardada
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="bi bi-sun"></i> Modo Claro';
        }
    } else if (darkModeToggle) {
        darkModeToggle.innerHTML = '<i class="bi bi-moon"></i> Modo Oscuro';
    }
    
    // Event listener para el botón
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            
            if (isDarkMode) {
                darkModeToggle.innerHTML = '<i class="bi bi-sun"></i> Modo Claro';
                localStorage.setItem('darkMode', 'enabled');
            } else {
                darkModeToggle.innerHTML = '<i class="bi bi-moon"></i> Modo Oscuro';
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
    
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Simular envío
                alert('¡Gracias por tu mensaje! Hemos recibido tu consulta y nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos requeridos.');
            }
        });
    }
    
    // Actualizar año en el footer
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Inicializar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
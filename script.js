document.addEventListener('DOMContentLoaded', function() {
    // Tecnologías para el carrusel
    const technologies = [
        { name: "Node.js", icon: "N" },
        { name: "Express", icon: "E" },
        { name: "Python", icon: "P" },
        { name: "Django", icon: "D" },
        { name: "FastAPI", icon: "F" },
        { name: "MongoDB", icon: "M" },
        { name: "PostgreSQL", icon: "P" },
        { name: "MySQL", icon: "M" },
        { name: "Redis", icon: "R" },
        { name: "Docker", icon: "D" },
        { name: "Kubernetes", icon: "K" },
        { name: "AWS", icon: "A" },
        { name: "Git", icon: "G" },
        { name: "CI/CD", icon: "C" },
        { name: "GraphQL", icon: "G" },
        { name: "REST API", icon: "R" }
    ];

    // Función para crear elementos del carrusel
    function createTechItems() {
        const slider = document.querySelector('.tech-slider');

        // Crear los elementos originales
        technologies.forEach(tech => {
            const techItem = document.createElement('div');
            techItem.className = 'tech-item';

            const techIcon = document.createElement('div');
            techIcon.className = 'tech-icon';
            techIcon.textContent = tech.icon;

            const techName = document.createElement('span');
            techName.className = 'tech-name';
            techName.textContent = tech.name;

            techItem.appendChild(techIcon);
            techItem.appendChild(techName);
            slider.appendChild(techItem);
        });

        // Duplicar los elementos para crear el efecto infinito
        technologies.forEach(tech => {
            const techItem = document.createElement('div');
            techItem.className = 'tech-item';

            const techIcon = document.createElement('div');
            techIcon.className = 'tech-icon';
            techIcon.textContent = tech.icon;

            const techName = document.createElement('span');
            techName.className = 'tech-name';
            techName.textContent = tech.name;

            techItem.appendChild(techIcon);
            techItem.appendChild(techName);
            slider.appendChild(techItem);
        });
    }

    // Inicializar el carrusel
    createTechItems();

    // Navegación activa según la sección visible
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.navigation li');

    // Función para actualizar la navegación activa basada en la sección visible
    function updateActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            const link = li.querySelector('a');
            if (link && link.getAttribute('href') === `#${current}`) {
                li.classList.add('active');
            }
        });
    }

    // Escuchar el evento de scroll para actualizar la navegación
    window.addEventListener('scroll', updateActiveNav);

    // Navegación suave al hacer clic en los enlaces
    document.querySelectorAll('.navigation a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Actualizar la URL con el hash
                history.pushState(null, null, targetId);

                // Actualizar la navegación activa
                navItems.forEach(li => {
                    li.classList.remove('active');
                });
                this.parentElement.classList.add('active');
            }
        });
    });

    // Inicializar la navegación activa al cargar la página
    updateActiveNav();
});
const translations = {
    es: {
        title: "¡Hola, soy Meliza Ardila!",
        aboutTitle: "Sobre mí",
        navAbout: "Sobre mí",
        aboutText: "¡Hola! Soy una persona creativa, curiosa y siempre lista para aprender cosas nuevas. Amo el diseño, la programación y crear ideas que hagan feliz a la gente 💖.",
        navSkills: "Habilidades",
        navProjects: "Proyectos",
        navNotes: "Notas",
        navContact: "Contacto",
        projectsTitle: "Mis Proyectos",
        notesTitle: "Notas del día",
        addProjectTitle: "Agregar Nuevo Proyecto",
        projectTitleLabel: "Título del Proyecto:",
        projectDescLabel: "Descripción:",
        projectImgLabel: "Imagen del Proyecto:",
        projectGithubLabel: "URL del Repositorio (GitHub):",
        addProjectBtn: "Agregar Proyecto",
        noteInputLabel: "¿Cómo te sientes hoy?",
        moodEmojiLabel: "Estado de ánimo:",
        publish: "Publicar Nota",
        analyticsTitle: "Análisis de Sentimientos",
        contactTitle: "Contacto",
        contactText: "¡Escríbeme para colaborar o saludar! 💌",
        contactNameLabel: "Nombre:",
        contactEmailLabel: "Email:",
        contactMessageLabel: "Mensaje:",
        sendMessageBtn: "Enviar Mensaje",
        copyright: "🌸 Diseñado y desarrollado por Meliza Ardila — 2025 🌸",
        privacyPolicy: "Política de Privacidad",
        terms: "Términos de Uso",
        skillsTitle: "Mis Habilidades",
        techSkillsTitle: "Tecnologías",
        designSkillsTitle: "Diseño"
    },
    en: {
        title: "Hi, I'm Meliza Ardila!",
        aboutTitle: "About Me",
        navAbout: "About Me",
        aboutText: "Hi! I’m a creative, curious person always ready to learn new things. I love design, coding, and creating ideas that bring joy to people 💖.",
        navSkills: "Skills",
        navProjects: "Projects",
        navNotes: "Notes",
        navContact: "Contact",
        projectsTitle: "My Projects",
        notesTitle: "Daily Notes",
        addProjectTitle: "Add New Project",
        projectTitleLabel: "Project Title:",
        projectDescLabel: "Description:",
        projectImgLabel: "Project Image:",
        projectGithubLabel: "GitHub Repository URL:",
        addProjectBtn: "Add Project",
        noteInputLabel: "How are you feeling today?",
        moodEmojiLabel: "Mood:",
        publish: "Publish Note",
        analyticsTitle: "Sentiment Analysis",
        contactTitle: "Contact",
        contactText: "Write me to collaborate or just say hi! 💌",
        contactNameLabel: "Name:",
        contactEmailLabel: "Email:",
        contactMessageLabel: "Message:",
        sendMessageBtn: "Send Message",
        copyright: "🌸 Designed and developed by Meliza Ardila — 2025 🌸",
        privacyPolicy: "Privacy Policy",
        terms: "Terms of Use",
        skillsTitle: "My Skills",
        techSkillsTitle: "Technologies",
        designSkillsTitle: "Design"
    },
    pt: {
        title: "Olá, eu sou Meliza Ardila!",
        aboutTitle: "Sobre mim",
        navAbout: "Sobre mim",
        aboutText: "Oi! Sou uma pessoa criativa, curiosa e sempre pronta para aprender coisas novas. Amo design, programação e criar ideias que deixam as pessoas felizes 💖.",
        navSkills: "Habilidades",
        navProjects: "Projetos",
        navNotes: "Notas",
        navContact: "Contato",
        projectsTitle: "Meus Projetos",
        notesTitle: "Notas do dia",
        addProjectTitle: "Adicionar Novo Projeto",
        projectTitleLabel: "Título do Projeto:",
        projectDescLabel: "Descrição:",
        projectImgLabel: "Imagem do Projeto:",
        projectGithubLabel: "URL do Repositório (GitHub):",
        addProjectBtn: "Adicionar Projeto",
        noteInputLabel: "Como você se sente hoje?",
        moodEmojiLabel: "Humor:",
        publish: "Publicar Nota",
        analyticsTitle: "Análise de Sentimentos",
        contactTitle: "Contato",
        contactText: "Escreva para mim, vamos colaborar! 💌",
        contactNameLabel: "Nome:",
        contactEmailLabel: "Email:",
        contactMessageLabel: "Mensagem:",
        sendMessageBtn: "Enviar Mensagem",
        copyright: "🌸 Desenhado e desenvolvido por Meliza Ardila — 2025 🌸",
        privacyPolicy: "Política de Privacidade",
        terms: "Términos de Uso",
        skillsTitle: "Minhas Habilidades",
        techSkillsTitle: "Tecnologias",
        designSkillsTitle: "Design"
    }
};

function setLanguage(lang) {
    console.log(`Intentando traducir a: ${lang}`);
    console.log(`Traducciones disponibles:`, Object.keys(translations));

    // Header
    document.getElementById('title').innerText = translations[lang]?.title || translations['es'].title;
    document.getElementById('nav-about').innerText = translations[lang]?.navAbout || translations['es'].navAbout;
    document.getElementById('nav-skills').innerText = translations[lang]?.navSkills || translations['es'].navSkills;
    document.getElementById('nav-projects').innerText = translations[lang]?.navProjects || translations['es'].navProjects;
    document.getElementById('nav-notes').innerText = translations[lang]?.navNotes || translations['es'].navNotes;
    document.getElementById('nav-contact').innerText = translations[lang]?.navContact || translations['es'].navContact;

    // About Section
    document.getElementById('about-title').innerText = translations[lang]?.aboutTitle || translations['es'].aboutTitle;
    document.getElementById('about-text').innerText = translations[lang]?.aboutText || translations['es'].aboutText;

    // Skills Section
    const skillsTitleElement = document.getElementById('skills-title');
    if (skillsTitleElement) {
        skillsTitleElement.innerText = translations[lang]?.skillsTitle || translations['es'].skillsTitle;
    } else {
        console.log("No se encontró el elemento con ID: skills-title");
    }

    const techSkillsTitleElement = document.getElementById('tech-skills-title');
    if (techSkillsTitleElement) {
        techSkillsTitleElement.innerText = translations[lang]?.techSkillsTitle || translations['es'].techSkillsTitle || "Tecnologías";
    } else {
        console.log("No se encontró el elemento con ID: tech-skills-title");
    }

    const designSkillsTitleElement = document.getElementById('design-skills-title');
    if (designSkillsTitleElement) {
        designSkillsTitleElement.innerText = translations[lang]?.designSkillsTitle || translations['es'].designSkillsTitle || "Diseño";
    } else {
        console.log("No se encontró el elemento con ID: design-skills-title");
    }

    // Projects Section
    document.getElementById('projects-title').innerText = translations[lang]?.projectsTitle || translations['es'].projectsTitle;
    document.getElementById('add-project-title').innerText = translations[lang]?.addProjectTitle || translations['es'].addProjectTitle;
    document.getElementById('project-title-label').innerText = translations[lang]?.projectTitleLabel || translations['es'].projectTitleLabel;
    document.getElementById('project-desc-label').innerText = translations[lang]?.projectDescLabel || translations['es'].projectDescLabel;
    document.getElementById('project-img-label').innerText = translations[lang]?.projectImgLabel || translations['es'].projectImgLabel;
    document.getElementById('project-github-label').innerText = translations[lang]?.projectGithubLabel || translations['es'].projectGithubLabel;
    document.getElementById('add-project-btn').innerText = translations[lang]?.addProjectBtn || translations['es'].addProjectBtn;

    // Notes Section
    document.getElementById('notes-title').innerText = translations[lang]?.notesTitle || translations['es'].notesTitle;
    document.getElementById('note-input-label').innerText = translations[lang]?.noteInputLabel || translations['es'].noteInputLabel;
    document.getElementById('mood-emoji-label').innerText = translations[lang]?.moodEmojiLabel || translations['es'].moodEmojiLabel;
    document.getElementById('publish').innerText = translations[lang]?.publish || translations['es'].publish;

    // Analytics Section
    document.getElementById('analytics-title').innerText = translations[lang]?.analyticsTitle || translations['es'].analyticsTitle;

    // Contact Section
    document.getElementById('contact-title').innerText = translations[lang]?.contactTitle || translations['es'].contactTitle;
    document.getElementById('contact-text').innerText = translations[lang]?.contactText || translations['es'].contactText;
    document.getElementById('contact-name-label').innerText = translations[lang]?.contactNameLabel || translations['es'].contactNameLabel;
    document.getElementById('contact-email-label').innerText = translations[lang]?.contactEmailLabel || translations['es'].contactEmailLabel;
    document.getElementById('contact-message-label').innerText = translations[lang]?.contactMessageLabel || translations['es'].contactMessageLabel;
    document.getElementById('send-message-btn').innerText = translations[lang]?.sendMessageBtn || translations['es'].sendMessageBtn;

    // Footer
    document.getElementById('copyright').innerText = translations[lang]?.copyright || translations['es'].copyright;
    document.getElementById('privacy-policy').innerText = translations[lang]?.privacyPolicy || translations['es'].privacyPolicy;
    document.getElementById('terms').innerText = translations[lang]?.terms || translations['es'].terms;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado.");
    setLanguage('es'); // Establecer el idioma inicial

    // Llamamos a setLanguage nuevamente al final del listener
    setLanguage(document.documentElement.lang || 'es');

    // Agregar funcionalidad para agregar proyectos
    const addProjectForm = document.getElementById('addProjectForm');
    const projectList = document.getElementById('project-list');

    addProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('projectTitle').value;
        const description = document.getElementById('projectDescription').value;
        const imageFile = document.getElementById('projectImage').files[0]; // Obtener el archivo cargado
        const githubUrl = document.getElementById('projectGithubUrl').value;

        if (title && description && imageFile && githubUrl) {
            const reader = new FileReader(); // Para leer el archivo como URL
            reader.onload = function(event) {
                const imageUrl = event.target.result; // La URL de la imagen

                const newProject = document.createElement('div');
                newProject.classList.add('project-item');
                newProject.innerHTML = `
                    <img src="${imageUrl}" alt="${title}" class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">${title}</h3>
                        <p class="project-description">${description}</p>
                        <div class="project-links">
                            <a href="${githubUrl}" target="_blank" class="project-link">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                `;
                projectList.appendChild(newProject);
                addProjectForm.reset();
            };
            reader.readAsDataURL(imageFile); // Leer el archivo como URL
        } else {
            alert('Por favor, completa todos los campos del proyecto.');
        }
    });

    document.getElementById('noteForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const note = document.getElementById('noteInput').value;
        const moodEmoji = document.getElementById('moodEmoji').value; // Obtener el emoji
        if(note.trim() !== "") {
            const noteDisplay = document.getElementById('noteDisplay');
            const newNote = document.createElement('div'); // Usar un div para mejor estructura
            newNote.classList.add('note-card'); // Agregar la clase .note-card
            newNote.innerHTML = `
                <div class="note-header">
                    <span class="note-emoji">${moodEmoji}</span>
                </div>
                <p class="note-content">${note}</p>
                <div class="note-meta">
                    <span>${new Date().toLocaleDateString()}</span>
                    <span>${new Date().toLocaleTimeString()}</span>
                </div>
            `;
            noteDisplay.prepend(newNote);
            document.getElementById('noteInput').value = "";
            updateChart(); // Actualiza el gráfico después de agregar la nota
        }
    });

    // Agregar funcionalidad para el formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        if (name && email && message) {
            alert(`¡Gracias por tu mensaje, ${name}! Te contactaremos pronto.`);
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos del formulario de contacto.');
        }
    });

    // Configuración inicial del gráfico (necesitarás Chart.js)
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Feliz', 'Triste', 'Muy feliz', 'Llorando', 'Pensativo', 'Cansado', 'Genial', 'Asombrado'],
            datasets: [{
                label: 'Frecuencia de estados de ánimo',
                data: [0, 0, 0, 0, 0, 0, 0, 0], // Inicializa con ceros
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 219, 120, 0.2)',
                    'rgba(240, 155, 199, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 219, 120, 1)',
                    'rgba(240, 155, 199, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Actualizar el gráfico con los datos de las notas
    const updateChart = () => {
        const notes = document.querySelectorAll('.note-card');
        const moodCounts = {
            '😊': 0, '😔': 0, '😄': 0, '😢': 0, '🤔': 0, '😴': 0, '😎': 0, '🤩': 0
        };

        notes.forEach(note => {
            const emoji = note.querySelector('.note-emoji').textContent;
            moodCounts[emoji]++;
        });

        myChart.data.datasets[0].data = Object.values(moodCounts);
        myChart.update();
    };

    // Llama a updateChart después de agregar una nueva nota
    document.getElementById('noteForm').addEventListener('submit', () => {
        // (código existente para agregar la nota)
        updateChart(); // Actualiza el gráfico después de agregar la nota
    });

    // Llama a updateChart inicialmente para mostrar datos (si hay alguno)
    updateChart();
});
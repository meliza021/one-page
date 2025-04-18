const translations = {
    es: {
      title: "¡Hola, soy Meliza Ardila!", // Cambiado a tu nombre
      aboutTitle: "Sobre mí",
      aboutText: "¡Hola! Soy una persona creativa, curiosa y siempre lista para aprender cosas nuevas. Amo el diseño, la programación y crear ideas que hagan feliz a la gente 💖.",
      navProjects: "Proyectos",
      navNotes: "Notas",
      navContact: "Contacto",
      projectsTitle: "Mis Proyectos",
      notesTitle: "Notas del día",
      publish: "Publicar Nota",
      contactTitle: "Contacto",
      contactText: "¡Escríbeme para colaborar o saludar! 💌"
    },
    en: {
      title: "Hi, I'm Meliza Ardila!", // Cambiado a tu nombre
      aboutTitle: "About Me",
      aboutText: "Hi! I’m a creative, curious person always ready to learn new things. I love design, coding, and creating ideas that bring joy to people 💖.",
      navProjects: "Projects",
      navNotes: "Notes",
      navContact: "Contact",
      projectsTitle: "My Projects",
      notesTitle: "Daily Notes",
      publish: "Publish Note",
      contactTitle: "Contact",
      contactText: "Write me for collaboration or just say hi! 💌"
    },
    pt: {
      title: "Olá, eu sou Meliza Ardila!", // Cambiado a tu nombre
      aboutTitle: "Sobre mim",
      aboutText: "Oi! Sou uma pessoa criativa, curiosa e sempre pronta para aprender coisas novas. Amo design, programação e criar ideias que deixam as pessoas felizes 💖.",
      navProjects: "Projetos",
      navNotes: "Notas",
      navContact: "Contato",
      projectsTitle: "Meus Projetos",
      notesTitle: "Notas do dia",
      publish: "Publicar Nota",
      contactTitle: "Contato",
      contactText: "Escreva para mim, vamos colaborar! 💌"
    }
  };

  function setLanguage(lang) {
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-text').innerText = translations[lang].aboutText;
    document.getElementById('nav-projects').innerText = translations[lang].navProjects;
    document.getElementById('nav-notes').innerText = translations[lang].navNotes;
    document.getElementById('nav-contact').innerText = translations[lang].navContact;
    document.getElementById('projects-title').innerText = translations[lang].projectsTitle;
    document.getElementById('notes-title').innerText = translations[lang].notesTitle;
    document.getElementById('publish').innerText = translations[lang].publish;
    document.getElementById('contact-title').innerText = translations[lang].contactTitle;
    document.getElementById('contact-text').innerText = translations[lang].contactText;

    // Actualiza los labels del formulario de proyectos
    document.getElementById('project-title-label').innerText = translations[lang].projectTitle || "Título del Proyecto:";
    document.getElementById('project-desc-label').innerText = translations[lang].projectDesc || "Descripción:";
    document.getElementById('project-img-label').innerText = translations[lang].projectImg || "URL de la Imagen:";
    document.getElementById('project-github-label').innerText = translations[lang].projectGithub || "URL del Repositorio (GitHub):";
    document.getElementById('add-project-btn').innerText = translations[lang].addProjectBtn || "Agregar Proyecto";
    document.getElementById('add-project-title').innerText = translations[lang].addProjectTitle || "Agregar Nuevo Proyecto";

    // Actualiza los labels del formulario de notas
    document.getElementById('note-input-label').innerText = translations[lang].noteInputLabel || "¿Cómo te sientes hoy?";
    document.getElementById('mood-emoji-label').innerText = translations[lang].moodEmojiLabel || "Estado de ánimo:";

    // Actualiza los labels del formulario de contacto
    document.getElementById('contact-name-label').innerText = translations[lang].contactNameLabel || "Nombre:";
    document.getElementById('contact-email-label').innerText = translations[lang].contactEmailLabel || "Email:";
    document.getElementById('contact-message-label').innerText = translations[lang].contactMessageLabel || "Mensaje:";
    document.getElementById('send-message-btn').innerText = translations[lang].sendMessageBtn || "Enviar Mensaje";

    // Actualiza el texto de descargar CV
    document.getElementById('download-text').innerText = translations[lang].downloadCv || "Descargar CV";

    // Actualiza los títulos de las secciones
    document.getElementById('nav-about').innerText = translations[lang].navAbout || "Sobre mí";
    document.getElementById('nav-skills').innerText = translations[lang].navSkills || "Habilidades";
    document.getElementById('analytics-title').innerText = translations[lang].analyticsTitle || "Análisis de Sentimientos";
    document.getElementById('skills-title').innerText = translations[lang].skillsTitle || "Mis Habilidades";
    document.getElementById('tech-skills-title').innerText = translations[lang].techSkillsTitle || "Tecnologías";
    document.getElementById('design-skills-title').innerText = translations[lang].designSkillsTitle || "Diseño";
  }

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
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    setLanguage('es'); // Establecer el idioma inicial (puedes cambiarlo)

    // Agregar funcionalidad para agregar proyectos
    const addProjectForm = document.getElementById('addProjectForm');
    const projectList = document.getElementById('project-list');

    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('projectTitle').value;
      const description = document.getElementById('projectDescription').value;
      const imageUrl = document.getElementById('projectImageUrl').value;
      const githubUrl = document.getElementById('projectGithubUrl').value;

      if (title && description && imageUrl && githubUrl) {
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
        addProjectForm.reset(); // Limpiar el formulario
      } else {
        alert('Por favor, completa todos los campos del proyecto.');
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
      // ...
      updateChart(); // Actualiza el gráfico después de agregar la nota
    });

    // Llama a updateChart inicialmente para mostrar datos (si hay alguno)
    updateChart();
  });
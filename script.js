const translations = {
    es: {
        title: "¡Hola, soy [Tu Nombre]!",
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
        title: "Hi, I'm [Your Name]!",
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
        title: "Olá, eu sou [Seu Nome]!",
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
}

document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const note = document.getElementById('noteInput').value;
    if(note.trim() !== "") {
        const noteDisplay = document.getElementById('noteDisplay');
        const newNote = document.createElement('p');
        newNote.textContent = `📝 ${note}`;
        noteDisplay.prepend(newNote);
        document.getElementById('noteInput').value = "";
    }
});

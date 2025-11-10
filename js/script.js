const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetPage = button.getAttribute('data-page');
        
        // Remove active class from all buttons and pages
        navButtons.forEach(btn => btn.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
        
        // Add active class to clicked button and target page
        button.classList.add('active');
        document.getElementById(targetPage).classList.add('active');
    });
});
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const subject = encodeURIComponent(`Contato de ${nome}`);
    const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`);
    const mailtoLink = `mailto:rafaelpinhead@proton.me?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    formMessage.textContent = 'Abrindo seu cliente de email...';
    formMessage.className = 'form-message success';
    formMessage.style.display = 'block';
    setTimeout(() => {
        contactForm.reset();
        formMessage.style.display = 'none';
    }, 3000);
});

// Modal functionality for project images
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const projectImages = document.querySelectorAll('.project-image');

projectImages.forEach(imageContainer => {
    imageContainer.addEventListener('click', (e) => {
        const img = imageContainer.querySelector('img');
        if (img) {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modal.classList.add('active');
        }
    });
});

// Close modal when clicking anywhere
modal.addEventListener('click', () => {
    modal.classList.remove('active');
});
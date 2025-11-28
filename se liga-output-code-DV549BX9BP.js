// Toggle tema escuro/claro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Animações on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Slider de projetos
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    document.querySelector('.slider-container').style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

// Botões de projetos
document.querySelectorAll('.btn-projeto').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        if (link && confirm('Abrir projeto em nova aba?')) {
            window.open(link, '_blank');
        } else {
            alert('Link não definido. Substitua no código.');
        }
    });
});

// Validação e envio do formulário
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;

    // Limpar erros
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Validação
    if (!name) {
        document.getElementById('name-error').textContent = 'Nome é obrigatório.';
        valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email-error').textContent = 'E-mail válido é obrigatório.';
        valid = false;
    }
    if (!message) {
        document.getElementById('message-error').textContent = 'Mensagem é obrigatória.';
        valid = false;
    }

    if (valid) {
        alert('Mensagem enviada com sucesso! (Simulação - em um site real, isso enviaria para um servidor.)');
        form.reset();
    }
});

// Botão voltar ao topo
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
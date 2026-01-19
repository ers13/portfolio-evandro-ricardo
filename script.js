document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-links');

    // Abre e fecha o menu mobile
    if(btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }

    // Inicialização do AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

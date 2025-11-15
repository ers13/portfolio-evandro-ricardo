// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // 1. Funcionalidade do Menu Mobile (Hambúrguer)
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            // Adiciona/remove a classe 'menu-open' no body para evitar scroll quando o menu está aberto
            document.body.classList.toggle('menu-open', !isExpanded);
        });

        // Fechar o menu ao clicar em um link de navegação (âncora)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Verifica se o link é uma âncora interna
                if (link.getAttribute('href').startsWith('#')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('menu-open');
                }
            });
        });
    }

    // 2. Funcionalidade do Botão Voltar ao Topo
    if (scrollToTopBtn) {
        // Mostra ou esconde o botão
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        // Comportamento de scroll suave
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 3. Inicialização do AOS (Animate On Scroll)
    // Verifica se a biblioteca AOS foi carregada no HTML
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, // Duração da animação em ms
            once: true,     // Se a animação deve ocorrer apenas uma vez
        });
    }
});

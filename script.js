document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicialização do AOS (Animate On Scroll)
    // Garante que as seções apareçam suavemente conforme o usuário desce a página
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, // Duração da animação em milissegundos
            once: true,     // Anima apenas uma vez ao rolar
            offset: 100,    // Distância para disparar a animação
            easing: 'ease-in-out'
        });
    }

    // 2. Comportamento da Navbar no Scroll
    // Adiciona uma sombra e reduz o tamanho do header ao rolar para um visual "Premium"
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // 3. Scroll Suave para Links Internos
    // Melhora a experiência de navegação entre as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Compensação da altura do header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Log de Sucesso (Opcional - Bom para Debug)
    console.log("Portfólio de Evandro Ricardo carregado com sucesso! Versão 2026.");
});

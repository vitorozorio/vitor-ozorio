if (window.innerWidth > 768) { // Se a largura da janela for maior que 768px (simulando tela de computador)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substr(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scripts principais do tema Peak Fresh
 * Customizável e compatível com Elementor
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ============================================
    // MENU MOBILE
    // ============================================
    const menuToggle = document.getElementById('menu-toggle');
    const siteNav = document.getElementById('site-navigation');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', function() {
            siteNav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', siteNav.classList.contains('active'));
        });

        // Fechar menu ao clicar em um link
        const navLinks = siteNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                siteNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            const isClickInsideNav = siteNav.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && siteNav.classList.contains('active')) {
                siteNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ============================================
    // SCROLL SUAVE PARA ÂNCORAS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Ignorar âncoras vazias
            if (href === '#') {
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // HEADER STICKY
    // ============================================
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // ============================================
    // ANIMAÇÕES AO SCROLL
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards, títulos e outros elementos
    document.querySelectorAll('.card, .menu-item, .trust-item, [class*="slide"]').forEach(el => {
        observer.observe(el);
    });

    // ============================================
    // FORMULÁRIOS CUSTOMIZADOS
    // ============================================
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';

                // Reativar após 3 segundos (ou ajustar conforme necessário)
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar';
                }, 3000);
            }
        });
    });

    // ============================================
    // CONTADORES E NÚMEROS ANIMADOS
    // ============================================
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 30;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            element.textContent = Math.floor(current).toLocaleString('pt-BR');
        }, 30);
    }

    // ============================================
    // AJUSTES PARA ELEMENTOR
    // ============================================
    // Se página é editada com Elementor, fazer ajustes necessários
    if (document.body.classList.contains('elementor-page')) {
        // Remover conflitos de CSS se necessário
        const elementorSections = document.querySelectorAll('.elementor-section');
        elementorSections.forEach(section => {
            section.classList.add('elementor-responsive-section');
        });
    }

    // ============================================
    // LAZY LOADING DE IMAGENS
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // TRACKING E ANALYTICS (Você pode adicionar seu GA aqui)
    // ============================================
    // Exemplo: rastrear cliques em botões CTA
    document.querySelectorAll('.btn-primary, .btn-whatsapp').forEach(btn => {
        btn.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'engagement',
                    'event_label': this.textContent
                });
            }
        });
    });

    // ============================================
    // FUNCTIONS ÚTEIS
    // ============================================
    window.peakFresh = {
        // Função para abrir WhatsApp com mensagem
        openWhatsApp: function(message) {
            const phone = document.querySelector('[data-whatsapp]')?.dataset.whatsapp || '';
            if (phone) {
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }
        },

        // Função para validar email
        validateEmail: function(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        },

        // Função para formatar moeda
        formatCurrency: function(value) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(value);
        },

        // Função para exibir notificações
        showNotification: function(message, type = 'info', duration = 3000) {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#25d366' : '#f44336'};
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                z-index: 9999;
                animation: slideIn 0.3s ease;
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, duration);
        }
    };

    console.log('Peak Fresh Theme - Scripts carregados com sucesso!');
});

// CSS para animação de slide
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    header.scrolled {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    img.loaded {
        animation: fadeIn 0.3s ease;
    }
`;
document.head.appendChild(style);

<?php
/**
 * Cabeçalho do tema
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#7c2bbf">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <a class="skip-link screen-reader-text" href="#main">
        <?php esc_html_e('Pular para conteúdo', 'peak-fresh'); ?>
    </a>

    <!-- Urgency Banner -->
    <?php if (get_theme_mod('peak_fresh_urgency_banner_enable', true)) : ?>
        <div class="urgency-banner">
            <?php echo esc_html(get_theme_mod('peak_fresh_urgency_banner_text', '⏰ Promoção limitada! Aproveite nossas ofertas especiais')); ?>
        </div>
    <?php endif; ?>

    <header id="masthead" class="site-header">
        <nav class="navbar-main">
            <div class="header-container">
                <!-- Logo -->
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        echo '<a href="' . esc_url(home_url('/')) . '" class="logo">' . esc_html(get_bloginfo('name')) . '</a>';
                    }
                    ?>
                </div>

                <!-- Menu Toggle para Mobile -->
                <button class="menu-toggle" id="menu-toggle">
                    <span>☰</span>
                </button>

                <!-- Menu Principal -->
                <nav id="site-navigation" class="main-navigation">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary-menu',
                        'menu_class' => 'nav-menu',
                        'container' => false,
                        'walker' => new Peak_Fresh_Nav_Walker(),
                        'fallback_cb' => 'wp_page_menu',
                    ));
                    ?>
                </nav>
            </div>
        </nav>
    </header><!-- #masthead -->

    <script>
        // Toggle menu mobile
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menu-toggle');
            const siteNav = document.getElementById('site-navigation');

            if (menuToggle) {
                menuToggle.addEventListener('click', function() {
                    siteNav.classList.toggle('active');
                });
            }

            // Fechar menu ao clicar em um link
            const navLinks = siteNav.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    siteNav.classList.remove('active');
                });
            });
        });
    </script>

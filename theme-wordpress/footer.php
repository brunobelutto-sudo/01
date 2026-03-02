<?php
/**
 * Rodapé do tema
 */
?>

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <!-- Coluna 1 - Sobre -->
                <div class="footer-section">
                    <h4><?php echo esc_html(get_theme_mod('peak_fresh_footer_col1_title', 'Sobre Peak Fresh')); ?></h4>
                    <p><?php echo wp_kses_post(get_theme_mod('peak_fresh_footer_col1_text', 'Somos uma loja especializada em açaí de alta qualidade. Entrega rápida e atendimento personalizado.')); ?></p>
                </div>

                <!-- Coluna 2 - Links Rápidos -->
                <div class="footer-section">
                    <h4><?php echo esc_html(get_theme_mod('peak_fresh_footer_col2_title', 'Links Rápidos')); ?></h4>
                    <ul>
                        <li><a href="<?php echo esc_url(home_url('#cardapio')); ?>">Cardápio</a></li>
                        <li><a href="<?php echo esc_url(home_url('#beneficios')); ?>">Benefícios</a></li>
                        <li><a href="<?php echo esc_url(home_url('#entrega')); ?>">Entrega</a></li>
                        <li><a href="<?php echo esc_url(home_url('/contato')); ?>">Contato</a></li>
                    </ul>
                </div>

                <!-- Coluna 3 - Contato -->
                <div class="footer-section">
                    <h4><?php echo esc_html(get_theme_mod('peak_fresh_footer_col3_title', 'Contato')); ?></h4>
                    <ul>
                        <li>
                            <strong>WhatsApp:</strong>
                            <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('peak_fresh_whatsapp_number', '')); ?>">
                                <?php echo esc_html(get_theme_mod('peak_fresh_whatsapp_number', '(11) 99999-9999')); ?>
                            </a>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('peak_fresh_email', '')); ?>">
                                <?php echo esc_html(get_theme_mod('peak_fresh_email', 'contato@peakfresh.com.br')); ?>
                            </a>
                        </li>
                        <li>
                            <strong>Endereço:</strong>
                            <?php echo esc_html(get_theme_mod('peak_fresh_address', 'São Paulo, SP')); ?>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- WhatsApp Button Flutuante -->
            <?php if (get_theme_mod('peak_fresh_whatsapp_button_enable', true)) : ?>
                <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('peak_fresh_whatsapp_number', '')); ?>?text=<?php echo urlencode(get_theme_mod('peak_fresh_whatsapp_message', 'Olá! Gostaria de fazer um pedido')); ?>" target="_blank" rel="noopener noreferrer" class="whatsapp-button">
                    <span>📱</span>
                </a>
            <?php endif; ?>

            <div class="footer-bottom">
                <p>&copy; <?php echo esc_html(date('Y')); ?> <strong><?php echo esc_html(get_bloginfo('name')); ?></strong>. <?php echo esc_html(get_theme_mod('peak_fresh_footer_copyright', 'Todos os direitos reservados.')); ?></p>
            </div>
        </div>
    </footer><!-- #colophon -->

    <?php wp_footer(); ?>
</body>
</html>

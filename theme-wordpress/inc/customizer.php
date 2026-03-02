<?php
/**
 * Customizer para Peak Fresh Theme
 * Adiciona opções de customização no Painel → Aparência → Personalizar
 */

if (!defined('ABSPATH')) {
    exit;
}

function peak_fresh_customize_register($wp_customize)
{
    // Remove seções padrão inúteis
    $wp_customize->remove_section('colors');

    // ============================================
    // SEÇÃO: BRANDING
    // ============================================
    $wp_customize->add_section('peak_fresh_branding', array(
        'title' => __('Peak Fresh - Branding', 'peak-fresh'),
        'priority' => 20,
    ));

    // Cor Primária
    $wp_customize->add_setting('peak_fresh_primary_color', array(
        'default' => '#7c2bbf',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'peak_fresh_primary_color', array(
        'label' => __('Cor Primária (Roxo)', 'peak-fresh'),
        'section' => 'peak_fresh_branding',
    )));

    // Cor Secundária
    $wp_customize->add_setting('peak_fresh_secondary_color', array(
        'default' => '#a064d2',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'peak_fresh_secondary_color', array(
        'label' => __('Cor Secundária', 'peak-fresh'),
        'section' => 'peak_fresh_branding',
    )));

    // Cor de Fundo
    $wp_customize->add_setting('peak_fresh_background_color', array(
        'default' => '#f8f4ff',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'peak_fresh_background_color', array(
        'label' => __('Cor de Fundo', 'peak-fresh'),
        'section' => 'peak_fresh_branding',
    )));

    // ============================================
    // SEÇÃO: CONTATO
    // ============================================
    $wp_customize->add_section('peak_fresh_contact', array(
        'title' => __('Peak Fresh - Contato', 'peak-fresh'),
        'priority' => 30,
    ));

    // Número WhatsApp
    $wp_customize->add_setting('peak_fresh_whatsapp_number', array(
        'default' => '5511999999999',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('peak_fresh_whatsapp_number', array(
        'label' => __('Número WhatsApp (com código do país)', 'peak-fresh'),
        'section' => 'peak_fresh_contact',
        'type' => 'text',
    ));

    // Mensagem WhatsApp
    $wp_customize->add_setting('peak_fresh_whatsapp_message', array(
        'default' => 'Olá! Gostaria de fazer um pedido',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('peak_fresh_whatsapp_message', array(
        'label' => __('Mensagem Padrão WhatsApp', 'peak-fresh'),
        'section' => 'peak_fresh_contact',
        'type' => 'text',
    ));

    // Email
    $wp_customize->add_setting('peak_fresh_email', array(
        'default' => 'contato@peakfresh.com.br',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('peak_fresh_email', array(
        'label' => __('Email', 'peak-fresh'),
        'section' => 'peak_fresh_contact',
        'type' => 'email',
    ));

    // Endereço
    $wp_customize->add_setting('peak_fresh_address', array(
        'default' => 'São Paulo, SP',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('peak_fresh_address', array(
        'label' => __('Endereço', 'peak-fresh'),
        'section' => 'peak_fresh_contact',
        'type' => 'text',
    ));

    // ============================================
    // SEÇÃO: BANNER
    // ============================================
    $wp_customize->add_section('peak_fresh_banner', array(
        'title' => __('Peak Fresh - Banner de Urgência', 'peak-fresh'),
        'priority' => 40,
    ));

    // Ativar Banner
    $wp_customize->add_setting('peak_fresh_urgency_banner_enable', array(
        'default' => true,
        'sanitize_callback' => 'rest_sanitize_boolean',
    ));
    $wp_customize->add_control('peak_fresh_urgency_banner_enable', array(
        'label' => __('Exibir Banner de Urgência', 'peak-fresh'),
        'section' => 'peak_fresh_banner',
        'type' => 'checkbox',
    ));

    // Texto Banner
    $wp_customize->add_setting('peak_fresh_urgency_banner_text', array(
        'default' => '⏰ Promoção limitada! Aproveite nossas ofertas especiais',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('peak_fresh_urgency_banner_text', array(
        'label' => __('Texto do Banner', 'peak-fresh'),
        'section' => 'peak_fresh_banner',
        'type' => 'text',
    ));

    // ============================================
    // SEÇÃO: FOOTER
    // ============================================
    $wp_customize->add_section('peak_fresh_footer', array(
        'title' => __('Peak Fresh - Rodapé', 'peak-fresh'),
        'priority' => 50,
    ));

    // Título Coluna 1
    $wp_customize->add_setting('peak_fresh_footer_col1_title', array(
        'default' => 'Sobre Peak Fresh',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('peak_fresh_footer_col1_title', array(
        'label' => __('Título Coluna 1', 'peak-fresh'),
        'section' => 'peak_fresh_footer',
        'type' => 'text',
    ));

    // Texto Coluna 1
    $wp_customize->add_setting('peak_fresh_footer_col1_text', array(
        'default' => 'Somos uma loja especializada em açaí de alta qualidade. Entrega rápida e atendimento personalizado.',
        'sanitize_callback' => 'wp_kses_post',
    ));
    $wp_customize->add_control('peak_fresh_footer_col1_text', array(
        'label' => __('Texto Coluna 1', 'peak-fresh'),
        'section' => 'peak_fresh_footer',
        'type' => 'textarea',
    ));

    // Título Coluna 2
    $wp_customize->add_setting('peak_fresh_footer_col2_title', array(
        'default' => 'Links Rápidos',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('peak_fresh_footer_col2_title', array(
        'label' => __('Título Coluna 2', 'peak-fresh'),
        'section' => 'peak_fresh_footer',
        'type' => 'text',
    ));

    // Título Coluna 3
    $wp_customize->add_setting('peak_fresh_footer_col3_title', array(
        'default' => 'Contato',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('peak_fresh_footer_col3_title', array(
        'label' => __('Título Coluna 3', 'peak-fresh'),
        'section' => 'peak_fresh_footer',
        'type' => 'text',
    ));

    // Copyright
    $wp_customize->add_setting('peak_fresh_footer_copyright', array(
        'default' => 'Todos os direitos reservados.',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('peak_fresh_footer_copyright', array(
        'label' => __('Texto de Copyright', 'peak-fresh'),
        'section' => 'peak_fresh_footer',
        'type' => 'text',
    ));

    // ============================================
    // SEÇÃO: BOTÃO WHATSAPP
    // ============================================
    $wp_customize->add_section('peak_fresh_whatsapp_button', array(
        'title' => __('Peak Fresh - Botão WhatsApp', 'peak-fresh'),
        'priority' => 60,
    ));

    // Ativar botão
    $wp_customize->add_setting('peak_fresh_whatsapp_button_enable', array(
        'default' => true,
        'sanitize_callback' => 'rest_sanitize_boolean',
    ));
    $wp_customize->add_control('peak_fresh_whatsapp_button_enable', array(
        'label' => __('Exibir Botão WhatsApp Flutuante', 'peak-fresh'),
        'section' => 'peak_fresh_whatsapp_button',
        'type' => 'checkbox',
    ));
}
add_action('customize_register', 'peak_fresh_customize_register');

// Injetar CSS customizado no frontend
function peak_fresh_customize_css()
{
    $primary_color = get_theme_mod('peak_fresh_primary_color', '#7c2bbf');
    $secondary_color = get_theme_mod('peak_fresh_secondary_color', '#a064d2');
    $background_color = get_theme_mod('peak_fresh_background_color', '#f8f4ff');
    ?>
    <style type="text/css">
        :root {
            --purple-primary: <?php echo esc_attr($primary_color); ?>;
            --purple-secondary: <?php echo esc_attr($secondary_color); ?>;
            --lilac-light: <?php echo esc_attr($background_color); ?>;
        }

        body {
            background-color: <?php echo esc_attr($background_color); ?>;
        }

        .btn-primary,
        .btn-primary:hover {
            background-color: <?php echo esc_attr($primary_color); ?>;
        }

        a {
            color: <?php echo esc_attr($primary_color); ?>;
        }
    </style>
    <?php
}
add_action('wp_head', 'peak_fresh_customize_css');
?>

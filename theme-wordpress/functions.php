<?php
/**
 * Peak Fresh Theme Functions
 * Tema customizável para loja de açaí com suporte total a Elementor
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define o caminho do tema
define('PEAK_FRESH_DIR', get_template_directory());
define('PEAK_FRESH_URI', get_template_directory_uri());

/**
 * Suporte ao tema
 */
function peak_fresh_theme_support()
{
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-header');
    add_theme_support('custom-background');

    // Suporte a Elementor
    add_theme_support('elementor');

    // Registrar menus
    register_nav_menus(array(
        'primary-menu' => __('Menu Principal', 'peak-fresh'),
        'footer-menu' => __('Menu Rodapé', 'peak-fresh'),
    ));
}
add_action('after_setup_theme', 'peak_fresh_theme_support');

/**
 * Carregar estilos e scripts
 */
function peak_fresh_scripts()
{
    // Estilos
    wp_enqueue_style('peak-fresh-style', PEAK_FRESH_URI . '/style.css', array(), '1.0.0', 'all');

    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', array(), null);

    // Scripts customizados
    wp_enqueue_script('peak-fresh-scripts', PEAK_FRESH_URI . '/js/main.js', array('jquery'), '1.0.0', true);

    // Localizar variáveis para JavaScript
    wp_localize_script('peak-fresh-scripts', 'peakFreshVars', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'siteUrl' => site_url(),
    ));
}
add_action('wp_enqueue_scripts', 'peak_fresh_scripts');

/**
 * Registrar widgets areas (sidebars)
 */
function peak_fresh_widgets_init()
{
    register_sidebar(array(
        'name' => __('Sidebar Principal', 'peak-fresh'),
        'id' => 'primary-sidebar',
        'description' => __('Sidebar principal do site', 'peak-fresh'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));

    register_sidebar(array(
        'name' => __('Footer Widget 1', 'peak-fresh'),
        'id' => 'footer-widget-1',
        'description' => __('Primeira coluna do rodapé', 'peak-fresh'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));

    register_sidebar(array(
        'name' => __('Footer Widget 2', 'peak-fresh'),
        'id' => 'footer-widget-2',
        'description' => __('Segunda coluna do rodapé', 'peak-fresh'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));

    register_sidebar(array(
        'name' => __('Footer Widget 3', 'peak-fresh'),
        'id' => 'footer-widget-3',
        'description' => __('Terceira coluna do rodapé', 'peak-fresh'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'peak_fresh_widgets_init');

/**
 * Classe customizada para menus do WordPress
 */
class Peak_Fresh_Nav_Walker extends Walker_Nav_Menu
{
    function start_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"sub-menu\">\n";
    }

    function start_el(&$output, $data_object, $depth = 0, $args = null, $id = 0)
    {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        $classes = array('menu-item');
        $classes[] = 'menu-item-' . $data_object->ID;

        if (isset($args->walker->has_children) && $args->walker->has_children) {
            $classes[] = 'menu-item-has-children';
        }

        $classes = apply_filters('nav_menu_css_class', array_filter($classes), $data_object, $args, $depth);
        $classes = implode(' ', $classes);
        $output .= $indent . '<li class="' . esc_attr($classes) . '">';

        $atts = array();
        $atts['title'] = !empty($data_object->attr_title) ? $data_object->attr_title : '';
        $atts['target'] = !empty($data_object->target) ? $data_object->target : '';
        $atts['rel'] = !empty($data_object->xfn) ? $data_object->xfn : '';
        $atts['href'] = !empty($data_object->url) ? $data_object->url : '';

        $atts = apply_filters('nav_menu_link_attributes', $atts, $data_object, $args, $depth);

        $attributes = '';
        foreach ($atts as $attr => $value) {
            if (!empty($value)) {
                $value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }

        $output .= '<a' . $attributes . '>' . esc_html($data_object->title) . '</a>';
    }
}

/**
 * Custom Post Type para Produtos
 */
function peak_fresh_register_cpt()
{
    $args = array(
        'label' => __('Produtos', 'peak-fresh'),
        'description' => __('Produtos do cardápio', 'peak-fresh'),
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-store',
        'has_archive' => true,
        'rewrite' => array('slug' => 'produtos'),
    );
    register_post_type('produto', $args);
}
add_action('init', 'peak_fresh_register_cpt');

/**
 * Registrar campos customizados para produtos
 */
function peak_fresh_register_meta()
{
    register_meta('post', 'produto_preco_pequeno', array(
        'type' => 'number',
        'single' => true,
        'show_in_rest' => true,
    ));

    register_meta('post', 'produto_preco_grande', array(
        'type' => 'number',
        'single' => true,
        'show_in_rest' => true,
    ));

    register_meta('post', 'produto_destaque', array(
        'type' => 'boolean',
        'single' => true,
        'show_in_rest' => true,
    ));

    register_meta('post', 'produto_badge', array(
        'type' => 'string',
        'single' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'peak_fresh_register_meta');

/**
 * Filtro para corpos de página Elementor
 */
function peak_fresh_elementor_body_class($classes)
{
    if (class_exists('Elementor\Core\Settings\Manager')) {
        $settings = Elementor\Core\Settings\Manager::get_settings_managers('general')->get_settings();
        if (isset($settings['elementor_page_title_display']) && 'no' === $settings['elementor_page_title_display']) {
            $classes[] = 'elementor-page-no-title';
        }
    }
    return $classes;
}
add_filter('body_class', 'peak_fresh_elementor_body_class');

/**
 * Adicionar classes ao corpo da página
 */
function peak_fresh_body_classes($classes)
{
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    if (is_singular('produto')) {
        $classes[] = 'produto-page';
    }
    return $classes;
}
add_filter('body_class', 'peak_fresh_body_classes');

/**
 * Sanitizar e validar dados
 */
function peak_fresh_sanitize_text($input)
{
    return sanitize_text_field($input);
}

function peak_fresh_sanitize_number($input)
{
    return absint($input);
}

/**
 * Função helper para debug
 */
if (!function_exists('peak_fresh_debug')) {
    function peak_fresh_debug($var)
    {
        if (current_user_can('manage_options')) {
            echo '<pre>';
            var_dump($var);
            echo '</pre>';
        }
    }
}

/**
 * Desabilitar edição de blocos para páginas do Elementor
 */
function peak_fresh_disable_gutenberg_for_elementor($use_block_editor, $post)
{
    if ($post && function_exists('elementor_is_edit_mode')) {
        if (elementor_is_edit_mode()) {
            return false;
        }
    }
    return $use_block_editor;
}
add_filter('use_block_editor_for_post', 'peak_fresh_disable_gutenberg_for_elementor', 10, 2);

/**
 * Adicionar mensagens de sucesso/erro (para formulários customizados)
 */
function peak_fresh_add_notice($message, $type = 'success')
{
    if (!isset($_SESSION)) {
        session_start();
    }
    $_SESSION['peak_fresh_notice'] = array(
        'message' => $message,
        'type' => $type,
    );
}

function peak_fresh_display_notice()
{
    if (!isset($_SESSION)) {
        session_start();
    }

    if (isset($_SESSION['peak_fresh_notice'])) {
        $notice = $_SESSION['peak_fresh_notice'];
        $class = 'success' === $notice['type'] ? 'success' : 'error';
        echo '<div class="notice notice-' . esc_attr($class) . ' is-dismissible"><p>' . esc_html($notice['message']) . '</p></div>';
        unset($_SESSION['peak_fresh_notice']);
    }
}
add_action('wp_footer', 'peak_fresh_display_notice');

/**
 * Otimizações de performance
 */
function peak_fresh_dequeue_unused_scripts()
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
}
add_action('wp_enqueue_scripts', 'peak_fresh_dequeue_unused_scripts', 100);

/**
 * Adicionar suporte a SVG
 */
function peak_fresh_allow_svg_upload($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'peak_fresh_allow_svg_upload');

/**
 * Função para obter produtos destacados
 */
function peak_fresh_get_featured_products($limit = 6)
{
    $args = array(
        'post_type' => 'produto',
        'posts_per_page' => $limit,
        'meta_query' => array(
            array(
                'key' => 'produto_destaque',
                'value' => true,
                'compare' => '=',
            ),
        ),
    );
    return new WP_Query($args);
}

/**
 * Hook de inicialização do tema
 */
do_action('peak_fresh_theme_init');

?>

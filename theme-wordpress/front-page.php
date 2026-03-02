<?php
/**
 * Página inicial - customizável com Elementor
 * Esta é a página padrão da loja que você pode editar completamente no Elementor
 */
get_header();
?>

<?php
// Se a página foi criada/editada no Elementor, exibe o conteúdo
if (have_posts()) {
    while (have_posts()) {
        the_post();
        the_content();
    }
} else {
    // Fallback com estrutura padrão (você pode desabilitar isso no Elementor)
    ?>
    <div class="site-content">
        <!-- BANNER DE URGÊNCIA -->
        <section class="urgency-section">
            <div class="container text-center">
                <p>⏰ Promoção Especial de Abertura - Até 30% Off</p>
            </div>
        </section>

        <!-- HERO SECTION -->
        <section class="hero-section" id="hero">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">Peak Fresh Açaí</h1>
                    <p class="hero-subtitle">Açaí Natural, Fresco e Delicioso direto para sua casa</p>
                    <div class="cta-group">
                        <a href="#cardapio" class="btn btn-primary">Ver Cardápio</a>
                        <a href="https://wa.me/" class="btn btn-whatsapp">Fazer Pedido via WhatsApp</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- SEÇÃO DE BENEFÍCIOS -->
        <section class="trust-section section-padding bg-white" id="beneficios">
            <div class="container">
                <h2 class="text-center">Por que escolher Peak Fresh?</h2>
                <div class="trust-grid">
                    <div class="trust-item">
                        <div class="trust-icon">✅</div>
                        <h3 class="trust-title">Produto Premium</h3>
                        <p class="trust-text">Açaí de alta qualidade selecionado</p>
                    </div>
                    <div class="trust-item">
                        <div class="trust-icon">🚚</div>
                        <h3 class="trust-title">Entrega Rápida</h3>
                        <p class="trust-text">Entregamos em 30 minutos</p>
                    </div>
                    <div class="trust-item">
                        <div class="trust-icon">💚</div>
                        <h3 class="trust-title">100% Natural</h3>
                        <p class="trust-text">Sem corantes artificiais</p>
                    </div>
                    <div class="trust-item">
                        <div class="trust-icon">⭐</div>
                        <h3 class="trust-title">Atendimento Excelente</h3>
                        <p class="trust-text">Suporte 24/7 via WhatsApp</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CARDÁPIO -->
        <section class="menu-section section-padding" id="cardapio">
            <div class="container">
                <h2 class="text-center">Nosso Cardápio</h2>
                <div class="menu-grid">
                    <?php
                    $produtos = new WP_Query(array(
                        'post_type' => 'produto',
                        'posts_per_page' => 6,
                    ));

                    if ($produtos->have_posts()) {
                        while ($produtos->have_posts()) {
                            $produtos->the_post();
                            ?>
                            <div class="card menu-item">
                                <?php
                                $badge = get_post_meta(get_the_ID(), 'produto_badge', true);
                                if ($badge) {
                                    echo '<span class="menu-badge">' . esc_html($badge) . '</span>';
                                }
                                ?>
                                <?php
                                if (has_post_thumbnail()) {
                                    echo '<img src="' . esc_url(get_the_post_thumbnail_url()) . '" alt="' . esc_attr(get_the_title()) . '" class="card-image">';
                                }
                                ?>
                                <h3 class="card-title"><?php the_title(); ?></h3>
                                <p class="card-description"><?php the_excerpt(); ?></p>
                                <div class="card-price">
                                    <?php
                                    $preco_pequeno = get_post_meta(get_the_ID(), 'produto_preco_pequeno', true);
                                    $preco_grande = get_post_meta(get_the_ID(), 'produto_preco_grande', true);

                                    if ($preco_pequeno) {
                                        echo 'P: R$ ' . number_format($preco_pequeno, 2, ',', '.');
                                    }
                                    if ($preco_grande) {
                                        echo ' | G: R$ ' . number_format($preco_grande, 2, ',', '.');
                                    }
                                    ?>
                                </div>
                                <a href="https://wa.me/?text=<?php echo urlencode('Gostaria de pedir: ' . get_the_title()); ?>" class="btn btn-primary" style="margin-top: 15px; display: block; text-align: center;">
                                    Pedir Agora
                                </a>
                            </div>
                            <?php
                        }
                        wp_reset_postdata();
                    }
                    ?>
                </div>
            </div>
        </section>

        <!-- PROMOÇÃO ESPECIAL -->
        <section class="promo-section section-padding">
            <div class="container">
                <h2>Promoção da Semana</h2>
                <p class="promo-text">Compre 2 açaís e ganhe 20% de desconto! Use o cupom: FRESH20</p>
                <a href="https://wa.me/" class="btn btn-secondary">Aproveitar Oferta</a>
            </div>
        </section>

        <!-- ENTREGA -->
        <section class="delivery-section section-padding" id="entrega">
            <div class="container">
                <h2 class="text-center">Informações de Entrega</h2>
                <div class="delivery-grid">
                    <div class="delivery-item">
                        <h3>Horário de Funcionamento</h3>
                        <p>Segunda a Sexta: 10h às 22h<br>Sábado e Domingo: 11h às 23h</p>
                    </div>
                    <div class="delivery-item">
                        <h3>Tempo de Entrega</h3>
                        <p>Zona Central: 20-30 minutos<br>Zona Periférica: 30-40 minutos</p>
                    </div>
                    <div class="delivery-item">
                        <h3>Taxa de Entrega</h3>
                        <p>A partir de R$ 3,00<br>Grátis acima de R$ 50,00</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <?php
}

get_footer();
?>

<?php
/**
 * Template para conteúdo padrão
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('card'); ?>>
    <header class="entry-header">
        <?php
        if (is_singular()) {
            the_title('<h1 class="entry-title">', '</h1>');
        } else {
            the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
        }

        if ('post' === get_post_type()) :
            ?>
            <div class="entry-meta">
                <?php
                echo 'Publicado em: ';
                echo '<time class="entry-date published" datetime="' . esc_attr(get_the_date('c')) . '">';
                echo esc_html(get_the_date());
                echo '</time>';
                ?>
            </div>
        <?php endif; ?>
    </header>

    <?php
    if (has_post_thumbnail()) {
        echo '<div class="post-thumbnail">';
        the_post_thumbnail('medium');
        echo '</div>';
    }
    ?>

    <div class="entry-content">
        <?php
        the_excerpt();
        ?>
    </div>

    <footer class="entry-footer">
        <a href="<?php echo esc_url(get_permalink()); ?>" class="btn btn-primary">
            Leia Mais
        </a>
    </footer>
</article>

<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package oziz
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('oz-single-post'); ?>>
    <?php oziz_post_thumbnail(); ?>
    
    <header class="entry-header  --color-reset">
    <?php
    if (is_singular() ) :
        the_title('<h1 class="entry-title">', '</h1>');
        else :
            the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
        endif;
        ?>
    </header><!-- .entry-header -->

    

    <div class="entry-content">
    <?php
    the_content(
        sprintf(
            wp_kses(
                /* translators: %s: Name of current post. Only visible to screen readers */
                __('Continue reading<span class="screen-reader-text"> "%s"</span>', 'oziz'),
                array(
                    'span' => array(
                        'class' => array(),
                    ),
                )
            ),
            get_the_title()
        ) 
    );

    wp_link_pages(
        array(
        'before' => '<div class="page-links">' . esc_html__('Pages:', 'oziz'),
        'after'  => '</div>',
        ) 
    );
    ?>
    </div><!-- .entry-content -->
    
    <footer class="entry-footer --color-reset">
        <?php
        if ('post' === get_post_type() ) :
            ?>
            <div class="entry-meta">
                <?php
                    oziz_posted_on();
                    oziz_posted_by();
                    oziz_posted_category();
                    
                ?>
            </div><!-- .entry-meta -->
            <?php
                if (is_single()) {
                    oziz_entry_footer(); 
                }
            ?>
        <?php endif; ?>
    
    </footer><!-- .entry-footer -->
    
</article><!-- #post-<?php the_ID(); ?> -->

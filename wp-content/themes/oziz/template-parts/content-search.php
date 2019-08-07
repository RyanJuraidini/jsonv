<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package oziz
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('oz-single-post --color-reset'); ?>>

    <?php oziz_post_thumbnail(); ?>

    <header class="entry-header">
    <?php the_title(sprintf('<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url(get_permalink())), '</a></h2>'); ?>
    </header><!-- .entry-header -->

    

    <div class="entry-summary">
    <?php the_excerpt(); ?>
    </div><!-- .entry-summary -->

    <?php
        if ('post' === get_post_type() ) :
    ?>
    <footer class="entry-footer  --color-reset">
        
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
        
    </footer><!-- .entry-footer -->
    <?php endif; ?>
    
</article><!-- #post-<?php the_ID(); ?> -->

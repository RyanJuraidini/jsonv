<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package oziz
 */

?>

    <?php //get_template_part('template-parts/layout/footer'); ?>
    
    <div class="oz-container">
        <div class="oz-row">
            <div class="oz-col-md-12">
                <footer id="colophon" class="site-footer">
                    
                </footer><!-- #colophon -->
            </div>
        </div>
    </div>
    
    <div class="site-footer-copyright">
        <div class="oz-container">
            <div class="oz-row">
                <div class="oz-col-md-6">
                    <div class="site-info">
        <?php
        echo esc_html__('Powered by ', 'oziz');
        ?>
                        <a href="<?php echo esc_url('http://wpamanuke.com/oziz-wordpress-theme/', 'oziz'); ?>">
        <?php
                                /* translators: %s: CMS name, i.e. WordPress. */
                                echo esc_html__('Oziz WordPress Theme', 'oziz');
        ?>
                        </a>
                    </div><!-- .site-info -->
                </div>
                <div class="oz-col-md-6">
                    <div id="oz-id-social">
                    <?php
                    $oziz_footer_social_show = get_theme_mod('footer_social_show');
                    if ($oziz_footer_social_show === 'yes' ) {
                        $oziz_footer_social_list =  get_theme_mod('footer_social_list');
                        if ($oziz_footer_social_list ) {
                            ?>
                                <ul class="oz-social">
                            <?php
                            foreach ($oziz_footer_social_list as $oziz_item) {
                                echo '<li><a href="', esc_url($oziz_item['link']),'" title="', esc_attr($oziz_item['title']) ,'" target="', esc_attr($oziz_item['target']) ,'"><i class="', esc_attr($oziz_item['icon']),'"></i></a></li>';
                            }
                            ?>
                                </ul>
                            <?php
                        }
                    }
                    ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div><!-- #page -->

<?php 
    wp_footer(); 
?>

</body>
</html>
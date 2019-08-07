<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package oziz
 */

if (!is_page_template('templates/custom-homepage.php')) {
    if (! is_active_sidebar('sidebar-1') ) {
        return;
    }
?>
            </div>
            <?php 
                $oziz_general_sidebar = get_theme_mod( 'general_sidebar' , 'right' ); 
                if ($oziz_general_sidebar == 'right') {
            ?>
                <div class="oz-col-md-4">
                    <aside id="secondary" class="widget-area">
                    <?php dynamic_sidebar('sidebar-1'); ?>
                    </aside><!-- #secondary -->
                </div>
            <?php } ?>
            </div><!-- #content -->
        </div><!-- oz-row -->
    </div><!-- oz-container -->
<?php
}
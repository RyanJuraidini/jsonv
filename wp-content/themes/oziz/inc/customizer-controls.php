<?php
/**
 * Load Controls Files
 */
get_template_part('inc/customize-controls/control-misc');
get_template_part('inc/customize-controls/control-custom-textarea');
get_template_part('inc/customize-controls/control-theme-support');
get_template_part('inc/customize-controls/control-editor');
get_template_part('inc/customize-controls/control-color-alpha');
get_template_part('inc/customize-controls/control-repeater');
get_template_part('inc/customize-controls/control-category');
get_template_part('inc/customize-controls/control-pages');

get_template_part('inc/customize-controls/control-multiple-select');
get_template_part('inc/customize-controls/control-radio-image');
get_template_part('inc/customize-controls/control-custom');



class Oziz_Editor_Scripts
{
    /**
     * Enqueue scripts/styles.
     *
     * @since  1.0.0
     * @access public
     * @return void
     */
    public static function enqueue()
    {

        if (! class_exists('_WP_Editors') ) {
            // @codingStandardsIgnoreStart
			load_template( ABSPATH . WPINC . '/class-wp-editor.php' );
            // @codingStandardsIgnoreEnd
        }

        add_action('customize_controls_print_footer_scripts', array( __CLASS__, 'enqueue_editor' ),  2);
        add_action('customize_controls_print_footer_scripts', array( '_WP_Editors', 'editor_js' ), 50);
        add_action('customize_controls_print_footer_scripts', array( '_WP_Editors', 'enqueue_scripts' ), 1);
    }

    public  static function enqueue_editor()
    {
        if(! isset($GLOBALS['__wp_mce_editor__']) || ! $GLOBALS['__wp_mce_editor__'] ) { 
            $GLOBALS['__wp_mce_editor__'] = true; // WPCS: prefix ok.
            ?>
            <script id="_wp-mce-editor-tpl" type="text/html">
                <?php wp_editor('', '__wp_mce_editor__'); ?>
            </script>
            <?php
        }
    }
}


function oziz_customizer_control_scripts()
{
    wp_enqueue_media();
    wp_enqueue_script('jquery-ui-sortable');
    wp_enqueue_script('wp-color-picker');
    wp_enqueue_style('wp-color-picker');

    wp_enqueue_script('oziz-customizer', get_template_directory_uri() . '/public/js/customizer.js', array( 'customize-controls', 'wp-color-picker' ), time());
    wp_enqueue_style('oziz-customizer',  get_template_directory_uri() . '/public/css/customizer.css');

}

add_action('customize_controls_enqueue_scripts', 'oziz_customizer_control_scripts', 99);
add_action('customize_controls_enqueue_scripts', array( 'Oziz_Editor_Scripts', 'enqueue' ), 95);

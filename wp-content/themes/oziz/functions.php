<?php
/**
 * oziz functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package oziz
 */
define('OZIZ_DIR', get_template_directory());
define('OZIZ_URL', get_template_directory_uri());

if (! function_exists('oziz_setup') ) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function oziz_setup()
    {
        /*
        * Make theme available for translation.
        * Translations can be filed in the /languages/ directory.
        * If you're building a theme based on oziz, use a find and replace
        * to change 'oziz' to the name of your theme in all the template files.
        */
        load_theme_textdomain('oziz', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
        * Let WordPress manage the document title.
        * By adding theme support, we declare that this theme does not use a
        * hard-coded <title> tag in the document head, and expect WordPress to
        * provide it for us.
        */
        add_theme_support('title-tag');

        /*
        * Enable support for Post Thumbnails on posts and pages.
        *
        * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
        */
        add_theme_support('post-thumbnails');
        add_image_size( 'oziz-medium', 300, 300 , true ); 

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(
            array(
                'menu-1' => esc_html__('Primary', 'oziz'),
            ) 
        );

        /*
        * Switch default core markup for search form, comment form, and comments
        * to output valid HTML5.
        */
        add_theme_support(
            'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            ) 
        );

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support(
            'custom-logo', array(
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
            ) 
        );
        /* Style For WP Editor */
        add_editor_style();
        add_theme_support( 'align-wide' );
        // Set up the WordPress core custom background feature.
        add_theme_support( "custom-background" , apply_filters(
                'oziz_custom_background_args', array(
                'default-color' => 'ffffff',
                'default-image' => '',
                ) 
            ) 
        );
    }
endif;
add_action('after_setup_theme', 'oziz_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function oziz_content_width()
{
    // This variable is intended to be overruled from themes.
    // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound

	// @codingStandardsIgnoreStart
	$GLOBALS['content_width'] = apply_filters( 'oziz_content_width', 640 ); // WPCS: prefix ok.
	// @codingStandardsIgnoreEnd
}
add_action('after_setup_theme', 'oziz_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function oziz_widgets_init()
{
    register_sidebar(
        array(
        'name'          => esc_html__('Sidebar', 'oziz'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'oziz'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
        ) 
    );
}
add_action('widgets_init', 'oziz_widgets_init');

/**
 * Enqueue scripts and styles.
 */

function oziz_scripts()
{
    
    // Google Fonts
    wp_enqueue_style('oziz-fonts', oziz_fonts_setup(), array(), null);
    
    wp_enqueue_style('font-awesome', get_template_directory_uri() . '/public/css/font-awesome.min.css', array(), null);
    wp_enqueue_style('oziz-style', get_stylesheet_uri());
    wp_enqueue_script('jquery.mb.YTPlayer', get_template_directory_uri() . '/public/js/jquery.mb.YTPlayer.js', array('jquery'), '20151215', true);
	
	wp_enqueue_script('jquery.tcycle', get_template_directory_uri() . '/public/js/jquery.tcycle.js', array('jquery'), '20151215', true);
	
    wp_enqueue_script('oziz-script', get_template_directory_uri() . '/public/js/script.js', array('jquery'), '20151215', true);
	$oziz_data_passed = array(
		'header_menu_type'            => get_theme_mod( 'general_menu_type' , 'fixed' )
	);
	wp_localize_script( 'oziz-script', 'oziz_vars', $oziz_data_passed );
	
    if (is_singular() && comments_open() && get_option('thread_comments') ) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'oziz_scripts');


/*  Google fonts
/* ------------------------------------ */
if (! function_exists('oziz_fonts_setup') ) {
    function oziz_fonts_setup() {
        $fonts_url = '';
        $fonts     = array();
        $subsets   = apply_filters('oziz_fonts___subsets', $subsets = 'latin,latin-ext');

        // Default fonts
        $fonts[] = 'Raleway:400,300,500,600,700,800,900';

        $fonts = apply_filters('oziz_fonts___family', $fonts);

        if ($fonts ) {
            $fonts_url = add_query_arg(
                array(
                'family' => urlencode(implode('|', array_map('esc_attr', $fonts))),
                'subset' => urlencode(esc_attr($subsets)),
                ), 'https://fonts.googleapis.com/css' 
            );
        }

        return $fonts_url;

    }
}

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer-data.php';
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION') ) {
    include get_template_directory() . '/inc/jetpack.php';
}

/**
 * Custom template tags for custom homepage 
 */
require get_template_directory() . '/inc/template-custom-homepage.php';
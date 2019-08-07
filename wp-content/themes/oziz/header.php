<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package oziz
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
    
    
    <?php
    $oziz_show_video_in = get_theme_mod('youtube_home_show');
    if (is_page_template('templates/custom-homepage.php')) {
        if (($oziz_show_video_in=='both')||($oziz_show_video_in=='custom')||($oziz_show_video_in=='every')) {
            echo '<section id="oz-id-video">';
            get_template_part('templates/custom-homepage/video');
            echo '</section>';
        }
    } else
    if (is_home() || is_front_page() ) {
        $oziz_pagedku = (get_query_var('paged')) ? get_query_var('paged') : 1;
        if ($oziz_pagedku == 1) {
            if (($oziz_show_video_in=='both')||($oziz_show_video_in=='front')||($oziz_show_video_in=='every')) {
                echo '<section id="oz-id-video">';
                get_template_part('templates/custom-homepage/video');
                echo '</section>';
            }
        }
    } else 
    if (($oziz_show_video_in=='every')) {
        echo '<section id="oz-id-video">';
        get_template_part('templates/custom-homepage/video');
        echo '</section>';
    }
     
    get_template_part('template-parts/layout/menu'); 
    get_template_part('template-parts/layout/header-start');
<?php 
/* Template Name: Custom Homepage */
get_header();
?>
<?php
    $oziz_about_setting_show = get_theme_mod( 'about_setting_show','yes' );
    if ($oziz_about_setting_show == 'yes' ) {
        echo '<section id="oz-id-about">';
        get_template_part('templates/custom-homepage/about');
        echo '</section>';
    }

    $oziz_resume_setting_show = get_theme_mod('resume_setting_show','yes');
    if ($oziz_resume_setting_show == 'yes' ) {
        echo '<section id="oz-id-resume">';
        get_template_part('templates/custom-homepage/resume-title');
        echo '<div class="oz-block-one">';
        get_template_part('templates/custom-homepage/resume');
        get_template_part('templates/custom-homepage/skills');
        echo '</div>';
        echo '</section>';
    }

    $oziz_pricing_setting_show = get_theme_mod( 'pricing_setting_show','yes' );
    if ($oziz_pricing_setting_show == 'yes' ) {
        echo '<section id="oz-id-pricing" class="oz-bg">';
        get_template_part('templates/custom-homepage/pricing');
        echo '</section>';
    }

    $oziz_portfolio_setting_show = get_theme_mod( 'portfolio_setting_show','yes' );
    if ($oziz_portfolio_setting_show == 'yes' ) {
        echo '<section id="oz-id-portfolio">';
        get_template_part('templates/custom-homepage/portfolio');
        echo '</section>';
    }

    $oziz_testimonial_setting_show = get_theme_mod( 'testimonial_setting_show','yes' );
    if ($oziz_testimonial_setting_show == 'yes' ) {
        echo '<section id="oz-id-testimonial"  class="oz-bg">';
        get_template_part('templates/custom-homepage/testimonial');
        echo '</section>';
    }

    $oziz_team_setting_show = get_theme_mod( 'team_setting_show','yes' );
    if ($oziz_team_setting_show == 'yes' ) {
        echo '<section id="oz-id-team">';
        get_template_part('templates/custom-homepage/team');
        echo '</section>';
    }

    $oziz_contact_setting_show = get_theme_mod( 'contact_setting_show','yes' );
    if ($oziz_contact_setting_show == 'yes' ) {
        echo '<section id="oz-id-contact">';
        get_template_part('templates/custom-homepage/contact');
        echo '</section>';
    }
?>

<?php 


get_footer();

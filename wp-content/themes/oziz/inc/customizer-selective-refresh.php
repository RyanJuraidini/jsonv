<?php
/**
 * oziz Theme Customizer
 *
 * @package oziz
 */
function oziz_sr_video()
{
    get_template_part('templates/custom-homepage/video');
}

function oziz_sr_about()
{
    get_template_part('templates/custom-homepage/about');
}
function oziz_sr_resume()
{
    get_template_part('templates/custom-homepage/resume-title');
    echo '<div class="oz-block-one">';
    get_template_part('templates/custom-homepage/resume');
    get_template_part('templates/custom-homepage/skills');
    echo '</div>';
}
function oziz_sr_pricing()
{
    get_template_part('templates/custom-homepage/pricing');
}
function oziz_sr_portfolio()
{
    get_template_part('templates/custom-homepage/portfolio');
}
function oziz_sr_testimonial()
{
    get_template_part('templates/custom-homepage/testimonial');
}
function oziz_sr_team()
{
    get_template_part('templates/custom-homepage/team');
}
function oziz_sr_contact()
{
    get_template_part('templates/custom-homepage/contact');
}

function oziz_sr_footer_social(){
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
}
function oziz_selective_refresh( $wp_customize )
{
    // VIDEO
    $refresh['#oz-id-video']['title'] = 'false';
    $refresh['#oz-id-video']['render_callback'] = 'oziz_sr_video';
    $refresh['#oz-id-video']['fields'] = array(
        'youtube_home_background','youtube_home_bg_image','youtube_home_video_url','youtube_home_video_mute',
       'youtube_home_list_text','youtube_home_button'
    );

     // FOOTER SOCIAL
     $refresh['#oz-id-social']['title'] = 'Footer Social';
     $refresh['#oz-id-social']['render_callback'] = 'oziz_sr_footer_social';
     $refresh['#oz-id-social']['fields'] = array(
         'footer_social_list'
     );

    // ABOUT
    $refresh['#oz-id-about']['title'] = 'about';
    $refresh['#oz-id-about']['render_callback'] = 'oziz_sr_about';
    $refresh['#oz-id-about']['fields'] = array(
        'about_title','about_title_sub',
        'about_bio_title','about_bio_title_sub','about_bio_pic','about_bio_name','about_bio_desc',
        'bio_data_inside','bio_data_col','bio_data_list',
        'about_service_title','about_service_list'
    );

    // RESUME
    $refresh['#oz-id-resume']['title'] = 'resume';
    $refresh['#oz-id-resume']['render_callback'] = 'oziz_sr_resume';
    $refresh['#oz-id-resume']['fields'] = array(
        'resume_title','resume_title_sub',
        'experience_show','experience_title','experience_list',
        'education_show','education_title','education_list',
        'skill_show','skill_title','skill_title1','skill_list1','skill_title3','skill_list2','skill_title3','skill_list3'
    );

    // PRICING
    $refresh['#oz-id-pricing']['title'] = 'pricing_table';
    $refresh['#oz-id-pricing']['render_callback'] = 'oziz_sr_pricing';
    $refresh['#oz-id-pricing']['fields'] = array(
        'pricing_title',
        'pricing_table1_show','pricing_table1_selected','pricing_table1_sign','pricing_table1_amount','pricing_table1_title','pricing_table1_text','pricing_table1_link','pricing_table1_data',
        'pricing_table2_show','pricing_table2_selected','pricing_table2_sign','pricing_table2_amount','pricing_table2_title','pricing_table2_text','pricing_table2_link','pricing_table2_data',
        'pricing_table3_show','pricing_table3_selected','pricing_table3_sign','pricing_table3_amount','pricing_table3_title','pricing_table3_text','pricing_table3_link','pricing_table3_data',
        'pricing_table4_show','pricing_table4_selected','pricing_table4_sign','pricing_table4_amount','pricing_table4_title','pricing_table4_text','pricing_table4_link','pricing_table4_data'        
    );

    // PORTFOLIO
    $refresh['#oz-id-portfolio']['title'] = 'portfolio';
    $refresh['#oz-id-portfolio']['render_callback'] = 'oziz_sr_portfolio';
    $refresh['#oz-id-portfolio']['fields'] = array(
        'portfolio_title','portfolio_title_sub','portfolio_data_category'
    );

    // TESTIMONIAL
    $refresh['#oz-id-testimonial']['title'] = 'portfolio';
    $refresh['#oz-id-testimonial']['render_callback'] = 'oziz_sr_testimonial';
    $refresh['#oz-id-testimonial']['fields'] = array(
        'testimonial_title','testimonial_list'
    );

    // TEAM
    $refresh['#oz-id-team']['title'] = 'team';
    $refresh['#oz-id-team']['render_callback'] = 'oziz_sr_team';
    $refresh['#oz-id-team']['fields'] = array(
        'team_title','team_title_sub','team_list'
    );
   

    //CONTACT
    $refresh['#oz-id-contact']['title'] = 'contact';
    $refresh['#oz-id-contact']['render_callback'] = 'oziz_sr_contact';
    $refresh['#oz-id-contact']['fields'] = array(
        'contact_title','contact_title_sub','contact_info_title','contact_info_desc','contact_info_list',
        'contact_shortcode_title','contact_shortcode_desc','contact_shortcode_code'
    );

    foreach ( $refresh as $item ) {        
        $segment = $item['fields'];
        if ( ($item['title']) !== 'false') {        
            foreach ($segment as $key ) {
                $wp_customize->get_setting($key)->transport         = 'postMessage';
            }        
        }
    }

    if (! isset($wp_customize->selective_refresh) ) {
        return;
    }
    
    
    foreach ( $refresh as $key => $item ) {
        
        $func = $item['render_callback'];
        $segment = $item['fields'];
        if ( ($item['title']) !== 'false') {  
            foreach ( $segment as $key2 ) {
            
                $wp_customize->selective_refresh->add_partial(
                    $key2, array(
                    'selector' => $key,
                    'render_callback' => $func,
                    'container_inclusive' => false,
                    'fallback_refresh' => true
                    ) 
                );
            }
        }
        
    }
    
}
add_action('customize_register', 'oziz_selective_refresh');
<?php
/**
 * oziz Theme Customizer
 *
 * @package oziz
 */
 
function oziz_multiple_category()
{
    $cats = array();
    $cats[0] = "All";
    foreach ( get_categories() as $categories => $category ) {
        $cats[$category->term_id] = $category->name . ' (' . $category->category_count . ')';
    }
    return $cats;
}
function oziz_get_pages()
{
    $pages  =  get_pages();
    $option_pages = array();
    $option_pages[0] = esc_html__('Select page', 'oziz');
    foreach( $pages as $p ){
        $option_pages[ $p->ID ] = $p->post_title;
    }
    return $option_pages;
}
function oziz_customizer_custom_panel($wp_customize)
{
    
    $wp_customize->add_panel(
        'oziz_options',
        array(
        'priority'        => 5,
        'title'           => esc_html__('Theme Options', 'oziz'),
        'description'     => ''
        )
    );
    
    $priority = 1000;
    $wp_customize->add_panel(
        'oziz_panel_about',
        array(
        'priority'        => $priority++,
        'title'           => esc_html__( 'Section - About' , 'oziz' ),
        'description'     => '',
             'active_callback' => 'oziz_showon_frontpage'
        )
    );
    $wp_customize->add_panel(
        'oziz_panel_resume',
        array(
        'priority'        => $priority++,
        'title'           => esc_html__( 'Section - Resume' , 'oziz' ),
        'description'     => '',
             'active_callback' => 'oziz_showon_frontpage'
        )
    );
    $wp_customize->add_panel(
        'oziz_panel_pricing',
        array(
        'priority'        => $priority++,
        'title'           => esc_html__('Section - Pricing', 'oziz'),
        'description'     => '',
             'active_callback' => 'oziz_showon_frontpage'
        )
    );
    $wp_customize->add_panel(
        'oziz_panel_portfolio',
        array(
        'priority'        => $priority++,
        'title'           => esc_html__('Section - Portfolio', 'oziz'),
        'description'     => '',
             'active_callback' => 'oziz_showon_frontpage'
        )
    );
    $wp_customize->add_panel(
        'oziz_panel_testimonial',
        array(
        'priority'        => $priority++,
        'title'           => esc_html__('Section - Testimonial', 'oziz'),
        'description'     => '',
             'active_callback' => 'oziz_showon_frontpage'
        )
    );
    $wp_customize->add_panel(
        'oziz_panel_team',
        array(
        'priority'        => $priority++,
        'title'           => esc_html__('Section - Team', 'oziz'),
        'description'     => '',
             'active_callback' => 'oziz_showon_frontpage'
        )
    );
    $wp_customize->add_panel(
        'oziz_panel_contact',
        array(
        'priority'        => $priority++,
        'title'           => esc_html__('Section - Contact', 'oziz'),
        'description'     => '',
             'active_callback' => 'oziz_showon_frontpage'
        )
    );
}
function oziz_data_default($key)
{
    $default['youtube_home_video_url'] = 'https://www.youtube.com/watch?v=PkZNo7MFNFg';
    $default['youtube_home_show'] = 'no';

    $default['about_setting_show'] = 'yes';
    
    if (isset($default[$key])) {
        return $default[$key];
    }
    return '';
}
function oziz_customizer_get_data()
{
     // General
     $oziz_data['general']['title'] = esc_html__('General', 'oziz');
     $oziz_data['general']['panel'] = 'oziz_options';
     $oziz_data['general']['fields']['general_sidebar'] = array(
         'type'    => 'select',
         'label'   => esc_html__( 'Sidebar' , 'oziz'),
         'choices' => array(
             'right' => esc_html__( 'Right' , 'oziz'),
             'full' => esc_html__( 'No Sidebar', 'oziz'),    
         ),
         'default' => 'right',
     );
	$oziz_data['general']['fields']['general_menu_type'] = array(
         'type'    => 'select',
         'label'   => esc_html__( 'Menu Type' , 'oziz'),
         'choices' => array(
             'fixed' => esc_html__( 'Fixed', 'oziz'),  
			 'notfixed' => esc_html__( 'Not Fixed' , 'oziz'),
         ),
         'default' => 'fixed',
     );
	 $oziz_data['general']['fields']['general_content'] = array(
         'type'    => 'select',
         'label'   => esc_html__( 'Content' , 'oziz'),
         'choices' => array(
             'the_content' => esc_html__( 'Content', 'oziz'),  
			 'the_excerpt' => esc_html__( 'Excerpt' , 'oziz'),
         ),
         'default' => 'the_content',
     );
    // Teaser
    $oziz_data['teaser']['title'] = esc_html__('Teaser', 'oziz');
    $oziz_data['teaser']['panel'] = 'oziz_options';
    $oziz_data['teaser']['fields']['teaser_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__( 'Show' , 'oziz' ),
        'choices' => array(
            'yes' => esc_html__( 'Yes' , 'oziz' ),
            'no' => esc_html__( 'No ', 'oziz' ),    
        
        ),
        'default' => 'yes',
    );
    $oziz_data['teaser']['fields']['teaser_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__( 'Title', 'oziz' ),
        'default' => 'BLOG'
    );
    $oziz_data['teaser']['fields']['teaser_title_sub'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Sub Title', 'oziz'),
        'default' => 'MY PERSONAL JOURNEY'
    );

    // VIDEO
    $oziz_data['video']['title'] = esc_html__('Video', 'oziz');
    $oziz_data['video']['panel'] = 'oziz_options';
    $oziz_data['video']['fields']['youtube_home_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show On', 'oziz'),
        'choices' => array(
            'both' => esc_html__( 'FrontPage and Custom', 'oziz' ),
            'custom' => esc_html__( 'Custom Homepage', 'oziz' ),
            'front' => esc_html__(  'FrontPage', 'oziz' ),
            'every' => esc_html__('EveryPage' , 'oziz' ),
            'no' => esc_html__( 'Dont Show' , 'oziz' ),
        
        ),
        'default' => 'no',
    );
    $oziz_data['video']['fields']['youtube_home_background'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Background', 'oziz'),
        'choices' => array(
            'video' => esc_html__('Video', 'oziz'),
            'image' => esc_html__('Image', 'oziz')
        ),
        'default' => 'video',
    );
    $oziz_data['video']['fields']['youtube_home_bg_image'] = array(
        'type'    => 'image',
        'label'   => esc_html__('Background Image', 'oziz')
    );
    $oziz_data['video']['fields']['youtube_home_video_url'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Youtube Video Url', 'oziz'),
        'default' => oziz_data_default('youtube_home_video_url'),
        'description'   => esc_html__( 'Example: https://www.youtube.com/watch?v=nx_kW1f5W6M' , 'oziz' ),
        'default' => 'https://www.youtube.com/watch?v=nx_kW1f5W6M'
    );
    $oziz_data['video']['fields']['youtube_home_video_mute'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Mute', 'oziz'),
        'choices' => array(
            'true' => esc_html__('true', 'oziz'),
            'false' => esc_html__('false', 'oziz')
        ),
        'default' => 'true',
    );
    $oziz_data['video']['fields']['youtube_home_list_text'] = array(
    'type'    => 'repeatable',
    'label'     => esc_html__('List Text', 'oziz'),
    'description'   => '',
    //'live_title_id' => 'user_id', // apply for unput text and textarea only
    'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
    'max_item'      => 20, // Maximum item can add
    'fields'    => array(
    'title' => array(
                'title' => esc_html__('Title', 'oziz'),
                'type'  =>'text',
                'desc'  => esc_html__( 'Example: Are you looking' , 'oziz' )
    ),
    'title-sub' => array(
                'title' => esc_html__('Sub Title', 'oziz'),
                'type'  =>'text',
                'desc'  => esc_html__( 'Example: Programmer' , 'oziz' ),
      )
    ),
    );
    $oziz_data['video']['fields']['youtube_home_button'] = array(
        'type'    => 'repeatable',
        'label'     => esc_html__('Home Video Button', 'oziz'),
        'description'   => '',
        //'live_title_id' => 'user_id', // apply for unput text and textarea only
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'text' => array(
                        'title' => esc_html__('Custom Text', 'oziz'),
                        'type'  =>'text',
                        'desc'  => esc_html__( 'Example: VIEW RESUME' , 'oziz' ),
            ),
            'link' => array(
                        'title' => esc_html__('Custom Link', 'oziz'),
                        'type'  =>'text',
                        'desc'  => '',
            ),
        ),
    );
    // VIDEO ENDS

    // FOOTER
    $oziz_data['footer-social']['title'] = esc_html__('Footer Social', 'oziz');
    $oziz_data['footer-social']['panel'] = 'oziz_options';
    $oziz_data['footer-social']['fields']['footer_social_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'no',
    );
    $oziz_data['footer-social']['fields']['footer_social_list'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Service List', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'icon' => array(
                'title' => esc_html__('Icon', 'oziz'),
                'type'  =>'icon',
                'desc'  => '',
            ),
            'title' => array(
                'title' => esc_html__('Title', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'link' => array(
              'title' => esc_html__('Link', 'oziz'),
              'type'  =>'text',
              'desc'  => '',
            ),
            'target' => array(
              'type'    => 'select',
              'title'   => esc_html__('Open New Tab', 'oziz'),
              'options' => array(
                '_blank' => esc_html__('Yes', 'oziz'),
                '' => esc_html__('No', 'oziz')
              ),
              'default' => '',
            ),
        ),
    );
    // FOOTER ENDS
    
    // DOCUMENTATION
     $oziz_data['documentation']['title'] = esc_html__('Documentation', 'oziz');
     $oziz_data['documentation']['panel'] = 'oziz_options';
     $oziz_data['documentation']['fields']['help'] = array(
         'type'    => 'custom',
         'heading' => esc_html__( 'Instruction' , 'oziz' ),
         'content' => 'If you want to setup custom homepage. Just <b>Create New Page</b> than on the right there is <b>Page Attributes</b> choose <b>Custom HomePage</b> after that if you want customize. Just set in customize in the frontpage',
         'link_text' => esc_html__( 'Online Doc' , 'oziz' ),
         'link' => esc_html__( 'http://wpamanuke.com/oziz-wordpress-theme' , 'oziz' )
     );
    

    //SECTTION ABOUT
    //Setting
    $oziz_data['about-setting']['title'] = esc_html__('About Settings', 'oziz');
    $oziz_data['about-setting']['panel'] = 'oziz_panel_about';
    $oziz_data['about-setting']['fields']['about_setting_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'yes',
    );
    $oziz_data['about-setting']['fields']['about_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'ABOUT ME'
    );
    $oziz_data['about-setting']['fields']['about_title_sub'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Sub Title', 'oziz'),
        'default' => 'A LITTLE STORY ABOUT WHAT I DO IN MY LIFE'
    );

    // About
    $oziz_data['about-bio']['title'] = esc_html__('About', 'oziz');
    $oziz_data['about-bio']['panel'] = 'oziz_panel_about';
    $oziz_data['about-bio']['fields']['about_bio_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'sanitize_callback' => 'wp_filter_post_kses',
        'default'    => 'Give You MY PORTFOLIO and list of MY RESUME'
    );
    $oziz_data['about-bio']['fields']['about_bio_title_sub'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title Sub', 'oziz'),
        'default' => 'CLEAN SIMPLE AND MINIMALIST DESIGN PSD TEMPLATE'
    );
    $oziz_data['about-bio']['fields']['about_bio_pic'] = array(
        'type'    => 'image-crop',
        'label'   => esc_html__('Bio Picture', 'oziz'),
        'flex_width' => false, // Optional. Default: false
        'flex_height' => false, // Optional. Default: false
        'width' => 300, // Optional. Default: 150
        'height' => 300, // Optional. Default: 150
        'button_labels' => array( // Optional.
            'select' => esc_html__( 'Select Image', 'oziz' ),
            'change' => esc_html__( 'Change Image', 'oziz' ),
            'remove' => esc_html__( 'Remove', 'oziz' ),
            'default' => esc_html__( 'Default', 'oziz' ),
            'placeholder' => esc_html__( 'No image selected', 'oziz' ),
            'frame_title' => esc_html__( 'Select Image', 'oziz' ),
            'frame_button' => esc_html__( 'Choose Image', 'oziz' ),
        )
    );
  
    $oziz_data['about-bio']['fields']['about_bio_name'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Name', 'oziz')
    );
    $oziz_data['about-bio']['fields']['about_bio_position'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Position', 'oziz')
    );
    $oziz_data['about-bio']['fields']['about_bio_desc'] = array(
        'type'    => 'editor',
        'label'   => esc_html__('Description', 'oziz')
    );
   
    // About Bio Data
    $oziz_data['about-bio-data']['title'] = esc_html__('Bio Data', 'oziz');
    $oziz_data['about-bio-data']['panel'] = 'oziz_panel_about';
    $oziz_data['about-bio-data']['fields']['bio_data_inside'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Position', 'oziz'),
        'choices' => array(
            'inside' => esc_html__('inside', 'oziz'),
            'outside' => esc_html__('outside', 'oziz')
        ),
        'default' => 'inside',
    );
    $oziz_data['about-bio-data']['fields']['bio_data_col'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Column', 'oziz'),
        'choices' => array(
        'oz-col-md-12' => esc_html__('1', 'oziz'),
            'oz-col-md-6' => esc_html__('2', 'oziz'),
            'oz-col-md-4' => esc_html__('3', 'oziz'),
            'oz-col-md-3' => esc_html__('4', 'oziz'),
        ),
        'default' => 'oz-col-md-4',
    );
    $oziz_data['about-bio-data']['fields']['bio_data_list'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Bio Data List', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 4, // Maximum item can add
        'fields'    => array(
            'icon' => array(
                'title' => esc_html__('Bio Icon', 'oziz'),
                'type'  =>'icon',
                'desc'  => '',
            ),
            'title' => array(
                'title' => esc_html__('Title', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
         
            'label_1' => array(
                'title' => esc_html__('Label 1', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'text_1' => array(
                'title' => esc_html__('Text 1', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'label_2' => array(
              'title' => esc_html__('Label 2', 'oziz'),
              'type'  =>'text',
              'desc'  => '',
            ),
            'text_2' => array(
                'title' => esc_html__('Text 2', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'label_3' => array(
              'title' => esc_html__('Label 3', 'oziz'),
              'type'  =>'text',
              'desc'  => '',
            ),
            'text_3' => array(
                'title' => esc_html__('Text 3', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'label_4' => array(
              'title' => esc_html__('Label 4', 'oziz'),
              'type'  =>'text',
              'desc'  => '',
            ),
            'text_4' => array(
                'title' => esc_html__('Text 4', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            )
        ),
    );
  
    // Service
    $oziz_data['about-service']['title'] = esc_html__('Service', 'oziz');
    $oziz_data['about-service']['panel'] = 'oziz_panel_about';
    $oziz_data['about-service']['fields']['about_service_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'transport' => 'postMessage',
        'default'   => 'MY SERVICE'
    );
    $oziz_data['about-service']['fields']['about_service_list'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Service List', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 4, // Maximum item can add
        'fields'    => array(
            'title' => array(
                'title' => esc_html__('Title', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'icon' => array(
                'title' => esc_html__('Icon', 'oziz'),
                'type'  =>'icon',
                'desc'  => '',
            ),
            'desc' => array(
                'title' => esc_html__('Description', 'oziz'),
                'type'  =>'editor',
                'desc'  => '',
            ),
        ),
    );
    //SECTTION ABOUT ENDS

    //SECTTION RESUME
    $oziz_data['resume-setting']['title'] = esc_html__('Resume Settings', 'oziz');
    $oziz_data['resume-setting']['panel'] = 'oziz_panel_resume';
    $oziz_data['resume-setting']['fields']['resume_setting_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__( 'Yes' , 'oziz' ),
            'no' => esc_html__( 'No' , 'oziz' )
        ),
        'default' => 'yes',
    );
    $oziz_data['resume-setting']['fields']['resume_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'RESUME'
    );
    $oziz_data['resume-setting']['fields']['resume_title_sub'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Sub Title', 'oziz'),
        'default'  => 'A LITTLE JOURNEY OF MY LIFE'
    );

    //EXPERIENCE
    $oziz_data['resume-experience']['title'] = esc_html__('Experience', 'oziz');
    $oziz_data['resume-experience']['panel'] = 'oziz_panel_resume';
    $oziz_data['resume-experience']['fields']['experience_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__( 'Show' , 'oziz'),
        'choices' => array(
            'yes' => esc_html__( 'Yes' , 'oziz'),
            'no' => esc_html__( 'No ', 'oziz'),    
        
        ),
        'default' => 'yes',
    );
    $oziz_data['resume-experience']['fields']['experience_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'WORK EXPERIENCE'
    );
    $oziz_data['resume-experience']['fields']['experience_list'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Experience List', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'year1' => array(
                'title' => esc_html__('From Year', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'year2' => array(
                'title' => esc_html__('To Year', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'position' => array(
                'title' => esc_html__('Position', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'company' => array(
                'title' => esc_html__('Company', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'location' => array(
                'title' => esc_html__('Location', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'desc' => array(
                'title' => esc_html__('Description', 'oziz'),
                'type'  =>'editor',
                'desc'  => '',
            ),
        ),
    );
    // EDUCATION
    $oziz_data['resume-education']['title'] = esc_html__('Education', 'oziz');
    $oziz_data['resume-education']['panel'] = 'oziz_panel_resume';
    $oziz_data['resume-education']['fields']['education_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__( 'Show' , 'oziz'),
        'choices' => array(
            'yes' => esc_html__( 'Yes' , 'oziz'),
            'no' => esc_html__( 'No ', 'oziz'),    
        
        ),
        'default' => 'yes',
    );
    $oziz_data['resume-education']['fields']['education_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'EDUCATION LIST'
    );
    $oziz_data['resume-education']['fields']['education_list'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Education List', 'oziz'),
        'transport' => 'postMessage',
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 10, // Maximum item can add
        'fields'    => array(
            'year1' => array(
                'title' => esc_html__('From Year', 'oziz'),
                'type'  => 'text',
                'desc'  => '',
            ),
            'year2' => array(
                'title' => esc_html__('To Year', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'position' => array(
                'title' => esc_html__('Grade', 'oziz'),
                'type'  => 'text',
                'desc'  => esc_html__( 'Example: Bachelor Degree' , 'oziz' ),
            ),
            'company' => array(
                'title' => esc_html__('School', 'oziz'),
                'type'  =>'text',
                'desc'  => esc_html__( 'Example: MIT' , 'oziz' ),
            ),
            'location' => array(
                'title' => esc_html__('Location', 'oziz'),
                'type'  =>'text',
                'desc'  => esc_html__( 'Example: USA' , 'oziz' ),
            ),
            'desc' => array(
                'title' => esc_html__('Description', 'oziz'),
                'type'  => 'editor',
                'desc'  => '',
            ),
        ),
    );
    // SKILL
    $oziz_data['resume-skill']['title'] = esc_html__('Skill', 'oziz');
    $oziz_data['resume-skill']['panel'] = 'oziz_panel_resume';
    $oziz_data['resume-skill']['fields']['skill_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__( 'Show' , 'oziz'),
        'choices' => array(
            'yes' => esc_html__( 'Yes' , 'oziz'),
            'no' => esc_html__( 'No ', 'oziz'),    
        
        ),
        'default' => 'yes',
    );
    $oziz_data['resume-skill']['fields']['skill_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default'   => 'SKILLS'
    );

    $oziz_data['resume-skill']['fields']['skill_title1'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title Skill 1', 'oziz')
    );
    $oziz_data['resume-skill']['fields']['skill_list1'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Skill List 1', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'skill' => array(
                'title' => esc_html__('Skill', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'level' => array(
                'title' => esc_html__('Level', 'oziz'),
                'type'  =>'select',
                'desc'  => '',
                'options' => array(
                    '50' => esc_html__('50', 'oziz'),
                    '60' => esc_html__('60', 'oziz'),
                    '70' => esc_html__('70', 'oziz'),
                    '80' => esc_html__('80', 'oziz'),
                    '90' => esc_html__('90', 'oziz'),
                    '100' => esc_html__('100', 'oziz')
                ),
                'default' => oziz_data_default('skill_level'),
            ),
        ),
    );
    $oziz_data['resume-skill']['fields']['skill_title2'] = array(
    'type'    => 'text',
    'label'   => esc_html__('Title Skill 2', 'oziz')
    );
    $oziz_data['resume-skill']['fields']['skill_list2'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Skill List 2', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'skill' => array(
                'title' => esc_html__('Skill', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'level' => array(
                'title' => esc_html__('Level', 'oziz'),
                'type'  =>'select',
                'desc'  => '',
                'options' => array(
                    '50' => esc_html__('50', 'oziz'),
                    '60' => esc_html__('60', 'oziz'),
                    '70' => esc_html__('70', 'oziz'),
                    '80' => esc_html__('80', 'oziz'),
                    '90' => esc_html__('90', 'oziz'),
                    '100' => esc_html__('100', 'oziz')
                ),
                'default' => '90',
            ),
        ),
    );
    $oziz_data['resume-skill']['fields']['skill_title3'] = array(
        'type'    => 'text',
        'label'   => esc_html__( 'Title Skill 3' , 'oziz' )
    );
    $oziz_data['resume-skill']['fields']['skill_list3'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Skill List 3', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'skill' => array(
                'title' => esc_html__('Skill', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'level' => array(
                'title' => esc_html__('Level', 'oziz'),
                'type'  =>'select',
                'desc'  => '',
                'options' => array(
                    '50' => esc_html__('50', 'oziz'),
                    '60' => esc_html__('60', 'oziz'),
                    '70' => esc_html__('70', 'oziz'),
                    '80' => esc_html__('80', 'oziz'),
                    '90' => esc_html__('90', 'oziz'),
                    '100' => esc_html__('100', 'oziz')
                ),
                'default' => '90',
            ),
        ),
    );
    //SECTTION RESUME ENDS
    
    //SECTION PRICING
    $oziz_data['pricing-setting']['title'] = esc_html__('Pricing Settings', 'oziz');
    $oziz_data['pricing-setting']['panel'] = 'oziz_panel_pricing';
    $oziz_data['pricing-setting']['fields']['pricing_setting_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
        'yes' => esc_html__('Yes', 'oziz'),
        'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'no',
    );
    $oziz_data['pricing-setting']['fields']['pricing_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'Pricing Table'
    );
    $oziz_data['pricing-setting']['fields']['pricing_column'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Column', 'oziz'),
        'choices' => array(
            'oz-col-md-12' => esc_html__('1 Columns', 'oziz'),  
            'oz-col-md-6' => esc_html__('2 Columns', 'oziz'),
            'oz-col-md-4' => esc_html__('3 Columns', 'oziz'),
            'oz-col-md-3' => esc_html__('4 Columns', 'oziz')            
        ),
        'default' => 'oz-col-md-3'
    );

    $oziz_data['pricing-table1']['title'] = esc_html__('Pricing Table 1', 'oziz');
    $oziz_data['pricing-table1']['panel'] = 'oziz_panel_pricing';
    $oziz_data['pricing-table1']['fields']['pricing_table1_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'yes',
    );
    $oziz_data['pricing-table1']['fields']['pricing_table1_selected'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Selected', 'oziz'),
        'choices' => array(
            'oz-pricing-selected' => esc_html__( 'Selected', 'oziz' ),
            'oz-pricing-selected-not' => esc_html__( 'No', 'oziz' )
        ),  
        'default' => 'oz-pricing-selected-not',
    );
    $oziz_data['pricing-table1']['fields']['pricing_table1_sign'] = array(
        'type'    => 'text',
        'label'   => esc_html__( 'Sign', 'oziz' ),
        'description'    => esc_html__( 'Example: $' , 'oziz' )
    );
    $oziz_data['pricing-table1']['fields']['pricing_table1_amount'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Amount', 'oziz'),
        'description'    => esc_html__( 'Example: 100' , 'oziz' )
    );
    $oziz_data['pricing-table1']['fields']['pricing_table1_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'description'    => esc_html__( 'Example: Plan 1' , 'oziz' )
    );
    $oziz_data['pricing-table1']['fields']['pricing_table1_text'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Text', 'oziz'),
        'description'    => esc_html__( 'Example: BUY NOW' , 'oziz' )
    );
    $oziz_data['pricing-table1']['fields']['pricing_table1_link'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Link', 'oziz')
    );
    $oziz_data['pricing-table1']['fields']['pricing_table1_data'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Data', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'text' => array(
                'title' => esc_html__('Text', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
        )
    );

    $oziz_data['pricing-table2']['title'] = esc_html__('Pricing Table 2', 'oziz');
    $oziz_data['pricing-table2']['panel'] = 'oziz_panel_pricing';
    $oziz_data['pricing-table2']['fields']['pricing_table2_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'no',
    );
    $oziz_data['pricing-table2']['fields']['pricing_table2_selected'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Selected', 'oziz'),
        'choices' => array(
            'oz-pricing-selected' => esc_html__('Selected', 'oziz'),
            'oz-pricing-selected-not' => esc_html__('No', 'oziz')
        ),
        'default' => 'oz-pricing-selected-not',
    );
    $oziz_data['pricing-table2']['fields']['pricing_table2_sign'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Sign', 'oziz'),
        'description' => esc_html__( 'Example: $','oziz' )
    );
    $oziz_data['pricing-table2']['fields']['pricing_table2_amount'] = array(
        'type'    => 'text',
        'label'   => esc_html__( 'Amount', 'oziz' ),
        'description' => esc_html__( 'Example: 200', 'oziz' )
    );
    $oziz_data['pricing-table2']['fields']['pricing_table2_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'description' => esc_html__( 'Example: Plan 2','oziz' )
    );
    $oziz_data['pricing-table2']['fields']['pricing_table2_text'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Text', 'oziz'),
        'description' => esc_html__( 'BUY NOW' , 'oziz' )
    );
    $oziz_data['pricing-table2']['fields']['pricing_table2_link'] = array(
        'type'    => 'text',
        'label'   => esc_html__( 'Link', 'oziz' )
    );
    $oziz_data['pricing-table2']['fields']['pricing_table2_data'] = array(
    'type'    => 'repeatable',
    'label'   => esc_html__('Data', 'oziz'),
    'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'text' => array(
                'title' => esc_html__('Text', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
        )
    );

    $oziz_data['pricing-table3']['title'] = esc_html__('Pricing Table 3', 'oziz');
    $oziz_data['pricing-table3']['panel'] = 'oziz_panel_pricing';
    $oziz_data['pricing-table3']['fields']['pricing_table3_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'no',
    );
    $oziz_data['pricing-table3']['fields']['pricing_table3_selected'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Selected', 'oziz'),
        'choices' => array(
            'oz-pricing-selected' => esc_html__('Selected', 'oziz'),
            'oz-pricing-selected-not' => esc_html__('No', 'oziz')
        ),
        'default' => 'oz-pricing-selected-not',
    );
    $oziz_data['pricing-table3']['fields']['pricing_table3_sign'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Sign', 'oziz'),
        'description' => 'Example: $'
    );
    $oziz_data['pricing-table3']['fields']['pricing_table3_amount'] = array(
        'type'    => 'text',
        'label'   => esc_html__( 'Amount', 'oziz' ),
        'description' => esc_html__( 'Example: 300', 'oziz' )
    );
    $oziz_data['pricing-table3']['fields']['pricing_table3_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'description' => esc_html__( 'Plan 3','oziz' )
    );
    $oziz_data['pricing-table3']['fields']['pricing_table3_text'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Text', 'oziz'),
        'description' => 'Example: Buy Now'
    );
    $oziz_data['pricing-table3']['fields']['pricing_table3_link'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Link', 'oziz')
    );
    $oziz_data['pricing-table3']['fields']['pricing_table3_data'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Data', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'text' => array(
                'title' => esc_html__('Text', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
        )
    );

    $oziz_data['pricing-table4']['title'] = esc_html__('Pricing Table 4', 'oziz');
    $oziz_data['pricing-table4']['panel'] = 'oziz_panel_pricing';
    $oziz_data['pricing-table4']['fields']['pricing_table4_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'no',
    );
    $oziz_data['pricing-table4']['fields']['pricing_table4_selected'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Selected', 'oziz'),
        'choices' => array(
            'oz-pricing-selected' => esc_html__('Selected', 'oziz'),
            'oz-pricing-selected-not' => esc_html__('No', 'oziz')
        ),
        'default' => 'oz-pricing-selected-not',
    );
    $oziz_data['pricing-table4']['fields']['pricing_table4_sign'] = array(
        'type'    => 'text',
        'label'   => esc_html__( 'Sign', 'oziz' ),
        'description' => esc_html__( 'Example: $' , 'oziz' )
    );
    $oziz_data['pricing-table4']['fields']['pricing_table4_amount'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Amount', 'oziz'),
        'description' => esc_html__( 'Example: 400' , 'oziz' )
    );
    $oziz_data['pricing-table4']['fields']['pricing_table4_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'description' => esc_html__( 'Plan 4' , 'oziz' )
    );
    $oziz_data['pricing-table4']['fields']['pricing_table4_text'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Text', 'oziz'),
        'description' => esc_html__( 'Example: Buy Now' , 'oziz' )
    );
    $oziz_data['pricing-table4']['fields']['pricing_table4_link'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Link', 'oziz')
    );
    $oziz_data['pricing-table4']['fields']['pricing_table4_data'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Data', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 20, // Maximum item can add
        'fields'    => array(
            'text' => array(
                'title' => esc_html__('Text', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
        )
    );
    //SECTION PRICING ENDS
    
    //SECTTION PORTFOLIO
    $oziz_data['portfolio-setting']['title'] = esc_html__('Portfolio Settings', 'oziz');
    $oziz_data['portfolio-setting']['panel'] = 'oziz_panel_portfolio';
    $oziz_data['portfolio-setting']['fields']['portfolio_setting_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'yes',
    );
    $oziz_data['portfolio-setting']['fields']['portfolio_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default'   => 'PORTFOLIO'
    );
    $oziz_data['portfolio-setting']['fields']['portfolio_title_sub'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Sub Title', 'oziz'),
        'default'   => 'A LITTLE JOB COLLECTION WHICH I DO'
    );
    
    $oziz_data['portfolio-data']['title'] = esc_html__('Portfolio Data', 'oziz');
    $oziz_data['portfolio-data']['panel'] = 'oziz_panel_portfolio';
    $oziz_data['portfolio-data']['fields']['portfolio_data_category'] = array(
        'type'    => 'multiple-select',
        'label'   => esc_html__('Category', 'oziz'),
        'choices' => oziz_multiple_category()
    );
    //SECTTION PORTFOLIO ENDS
  

    //SECTTION TESTIMONIAL
    $oziz_data['testimonial-setting']['title'] = esc_html__('Testimonial Settings', 'oziz');
    $oziz_data['testimonial-setting']['panel'] = 'oziz_panel_testimonial';
    $oziz_data['testimonial-setting']['fields']['testimonial_setting_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'yes'
    );
    $oziz_data['testimonial-setting']['fields']['testimonial_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'TESTIMONIALS'
    );
   

    $oziz_data['testimonial-data']['title'] = esc_html__('Testimonial Data', 'oziz');
    $oziz_data['testimonial-data']['panel'] = 'oziz_panel_testimonial';
    $oziz_data['testimonial-data']['fields']['testimonial_list'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Data', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
          'max_item'      => 20, // Maximum item can add
          'fields'    => array(
            'name' => array(
              'title' => esc_html__('Name', 'oziz'),
              'type'  =>'text',
              'desc'  => '',
            ),
            'profile_pic' => array(
              'title' => esc_html__('Pic', 'oziz'),
              'type'  =>'media',
              'desc'  => esc_html__( 'Recommended size 68x76','oziz' )
            ),
            'desc' => array(
                'title' => esc_html__('Testimonial', 'oziz'),
                'type'  =>'editor',
                'desc'  => '',
            ),
            'website' => array(
              'title' => esc_html__('Website', 'oziz'),
              'type'  =>'text'
            ),
            'link' => array(
              'title' => esc_html__('Website Link', 'oziz'),
              'type'  =>'text'
            ),
          )
      );
    // SECTION TESTIMONIAL ENDS

    //SECTTION TEAM
    $oziz_data['team-setting']['title'] = esc_html__('Team Settings', 'oziz');
    $oziz_data['team-setting']['panel'] = 'oziz_panel_team';
    $oziz_data['team-setting']['fields']['team_setting_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => 'yes',
    );
    $oziz_data['team-setting']['fields']['team_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'OUR TEAM'
    );
    $oziz_data['team-setting']['fields']['team_title_sub'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Sub Title', 'oziz'),
        'default' => 'OUR BEST PARTNER IN CRIME'
    );
    
    
    $oziz_data['team-member']['title'] = esc_html__('Team Member', 'oziz');
    $oziz_data['team-member']['panel'] = 'oziz_panel_team';
    $oziz_data['team-member']['fields']['team_member_title'] = array(
            'type'    => 'text',
            'label'   => esc_html__('Sub Title', 'oziz'),
            'default' => 'Responbility and capability of my team'
    );
    $oziz_data['team-member']['fields']['team_list'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Team Member List', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 40, // Maximum item can add
        'fields'    => array(
            'team_pic' => array(
                'title' => esc_html__('User media', 'oziz'),
                'type'  =>'media',
                'desc'  => esc_html__( 'Recommended size 300x300', 'oziz' )
            ),
            'name' => array(
                'title' => esc_html__('Name', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'position' => array(
                'title' => esc_html__('Position', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'desc' => array(
                'title' => esc_html__('Description', 'oziz'),
                'type'  =>'editor',
                'desc'  => '',
            ),
            'social_icon_1' => array(
                'title' => esc_html__('Social Icon 1', 'oziz'),
                'type'  =>'icon',
                'desc'  => '',
            ),
            'social_link_1' => array(
                'title' => esc_html__('Social Link 1', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'social_icon_2' => array(
                'title' => esc_html__('Social Icon 2', 'oziz'),
                'type'  =>'icon',
                'desc'  => '',
            ),
            'social_link_2' => array(
                'title' => esc_html__('Social Link 2', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'social_icon_3' => array(
                'title' => esc_html__('Social Icon 3', 'oziz'),
                'type'  =>'icon',
                'desc'  => '',
            ),
            'social_link_3' => array(
                'title' => esc_html__('Social Link 3', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'social_icon_4' => array(
                'title' => esc_html__('Social Icon 4', 'oziz'),
                'type'  =>'icon',
                'desc'  => '',
            ),
            'social_link_4' => array(
                'title' => esc_html__('Social Link 4', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            )
        ),
    );
    //SECTTION TEAM ENDS
    
    //SECTTION CONTACT
    $oziz_data['contact-setting']['title'] = esc_html__('Contact Settings', 'oziz');
    $oziz_data['contact-setting']['panel'] = 'oziz_panel_contact';
    $oziz_data['contact-setting']['fields']['contact_setting_show'] = array(
        'type'    => 'select',
        'label'   => esc_html__('Show', 'oziz'),
        'choices' => array(
            'yes' => esc_html__('Yes', 'oziz'),
            'no' => esc_html__('No', 'oziz')
        ),
        'default' => oziz_data_default('contact_show'),
    );
    $oziz_data['contact-setting']['fields']['contact_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'CONTACT'
    );
    $oziz_data['contact-setting']['fields']['contact_title_sub'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Sub Title', 'oziz'),
        'default' => 'OUR TEAM GIVING 24/7 SUPPORT'
    );
    
    $oziz_data['contact-info']['title'] = esc_html__('Contact Info', 'oziz');
    $oziz_data['contact-info']['panel'] = 'oziz_panel_contact';
    $oziz_data['contact-info']['fields']['contact_info_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'CONTACT INFO'
    );
    $oziz_data['contact-info']['fields']['contact_info_desc'] = array(
      'type'    => 'editor',
      'label'   => esc_html__('Description', 'oziz')
    );
    $oziz_data['contact-info']['fields']['contact_info_list'] = array(
        'type'    => 'repeatable',
        'label'   => esc_html__('Contact List', 'oziz'),
        'title_format'  => esc_html__('[live_title]', 'oziz'), // [live_title]
        'max_item'      => 10, // Maximum item can add
        'fields'    => array(
            'label' => array(
                'title' => esc_html__('Label', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            'text' => array(
                'title' => esc_html__('Text', 'oziz'),
                'type'  =>'textarea',
                'desc'  => '',
            ),
            'link' => array(
                'title' => esc_html__('Link', 'oziz'),
                'type'  =>'text',
                'desc'  => '',
            ),
            
        ),
    );
    
    $oziz_data['contact-shortcode']['title'] = esc_html__('Contact Shortcode', 'oziz');
    $oziz_data['contact-shortcode']['panel'] = 'oziz_panel_contact';
    $oziz_data['contact-shortcode']['fields']['contact_shortcode_title'] = array(
        'type'    => 'text',
        'label'   => esc_html__('Title', 'oziz'),
        'default' => 'SEND US MESSAGE'
    );
    $oziz_data['contact-shortcode']['fields']['contact_shortcode_desc'] = array(
        'type'    => 'editor',
        'label'   => esc_html__('Description', 'oziz')
    );
    $oziz_data['contact-shortcode']['fields']['contact_shortcode_code'] = array(
        'type'    => 'textarea',
        'label'   => esc_html__('Shortcode Code', 'oziz'),
        'desc'    => esc_html__( 'Use Contact Form 7 Plugin Shortcode','oziz' )
    );
    //SECTTION ENDS
    
    
    
    return $oziz_data;
}

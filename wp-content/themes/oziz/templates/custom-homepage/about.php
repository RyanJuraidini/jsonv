<?php
function oziz_biodata( $biodata )
{
    $oziz_col = get_theme_mod('bio_data_col', 'oz-col-md-4');
    foreach ($biodata as $bio) {
        ?>
        <div class="<?php echo esc_attr($oziz_col); ?>">
            <div class="oz-profile">
                <div class="oz-profile-image">
        <?php oziz_echo('<i class="', $bio['icon'], '"></i>'); ?>
        <?php oziz_echo('<h4>', $bio['title'], '</h4>'); ?>
                </div>
                <div class="oz-profile-desc">
                    <div>
        <?php oziz_echo('<label>', $bio['label_1'], '</label>'); ?>
        <?php oziz_echo('<span>', $bio['text_1'], '</span>'); ?>
                    </div>
                    <div>
        <?php oziz_echo('<label>', $bio['label_2'], '</label>'); ?>
        <?php oziz_echo('<span>', $bio['text_2'], '</span>'); ?>
                    </div>
                    <div>
        <?php oziz_echo('<label>', $bio['label_3'], '</label>'); ?>
        <?php oziz_echo('<span>', $bio['text_3'], '</span>'); ?>
                    </div>
                    <div>
        <?php oziz_echo('<label>', $bio['label_4'], '</label>'); ?>
        <?php oziz_echo('<span>', $bio['text_4'], '</span>'); ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }

}

function oziz_biodata_list()
{
    $bio = get_theme_mod('bio_data_list');
        
    if ($bio) { 
        oziz_biodata($bio);
    }
        
}

    $oziz_title = get_theme_mod( 'about_title','ABOUT ME');
    $oziz_title_sub = get_theme_mod( 'about_title_sub','A LITTLE STORY ABOUT WHAT I DO IN MY LIFE' );
    oziz_ch_block_teaser($oziz_title, $oziz_title_sub);
   

echo '<div class="oz-block-one">';
    $oziz_bio_title = get_theme_mod('about_bio_title', 'Give You MY PORTFOLIO and list of MY RESUME');
    $oziz_bio_title_sub = get_theme_mod('about_bio_title_sub', 'CLEAN SIMPLE AND MINIMALIST DESIGN PSD TEMPLATE');
    oziz_ch_block_slogan($oziz_bio_title, $oziz_bio_title_sub); 
    $oziz_default_url = OZIZ_URL .'/public/images/team.png';
    $oziz_bio_pic = get_theme_mod('about_bio_pic');
    
    if ($oziz_bio_pic) {
        $oziz_bio_pic = wp_get_attachment_url($oziz_bio_pic);
    } else
    if ($oziz_bio_pic == '') {
        $oziz_bio_pic = $oziz_default_url;
    } 
    $oziz_bio_name = get_theme_mod('about_bio_name', oziz_data_default('about_bio_name'));
    $oziz_bio_position = get_theme_mod('about_bio_position', oziz_data_default('about_bio_position'));
    $oziz_bio_desc = get_theme_mod('about_bio_desc', oziz_data_default('about_bio_desc'));
?>
    <div class="oz-container">
        <div class="oz-row">
            
            <div class="oz-col-md-4">
                <div class="oz-profile-bio">
                    <img src="<?php echo esc_url($oziz_bio_pic); ?>" />
                    <div class="oz-profile-bio-info">
                        <?php oziz_echo('<h3>', $oziz_bio_name , '</h3>'); ?>
                        <?php oziz_echo('<span>', $oziz_bio_position , '</span>'); ?>
                        <div class="oz-line-white"></div>
                    </div>
                </div>
            </div>
            <div class="oz-col-md-8">
                <div class="oz-p"><?php echo wp_kses_post($oziz_bio_desc); ?></div>
                <?php
                    $oziz_bio_data_inside = get_theme_mod('bio_data_inside');
                    if ($oziz_bio_data_inside=='inside') { ?>
                    
                        <div class="oz-row">
                            <?php oziz_biodata_list(); ?>
                        </div>
                        <?php
                    }
                ?>
            </div>
        </div>
    </div>

<?php
    $oziz_bio_data_inside = get_theme_mod('bio_data_inside');
    if ($oziz_bio_data_inside!='inside') { ?>
        <div class="oz-container">
            <div class="oz-row">
                <?php oziz_biodata_list(); ?>
            </div>
        </div>
        <?php
    }
?>


<?php 
    $oziz_service_title = get_theme_mod( 'about_service_title', 'MY SERVICES' );
    oziz_ch_block_slogan_small($oziz_service_title); 

    $oziz_service_list = get_theme_mod('about_service_list');
if ($oziz_service_list ) {
    echo'
		<div class="oz-container">
			<div class="oz-row">';
        
    foreach ($oziz_service_list as $oziz_item) {
        ?>
                <div class="oz-col-md-6">
                    <div class="oz-service">                                
                        <div class="oz-service-left">
                            <i class="<?php echo esc_attr($oziz_item['icon']); ?>"></i>
                        </div>                            
                        <div class="oz-service-right"> 
        <?php oziz_echo(' <h4 class="oz-service_title">', $oziz_item['title'], '</h4>'); ?>
        <?php oziz_echo(' <div class="oz-p">', $oziz_item['desc'], '</div>'); ?>                            
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
        <?php
    }

    echo '</div>
		</div>';
}

echo '</div>';
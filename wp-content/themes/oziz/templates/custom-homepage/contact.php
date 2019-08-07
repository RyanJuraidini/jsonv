<?php
    $oziz_title = get_theme_mod( 'contact_title','CONTACT' );
    $oziz_title_sub = get_theme_mod( 'contact_title_sub','OUR TEAM GIVING 24/7 SUPPORT' );
    oziz_ch_block_teaser($oziz_title, $oziz_title_sub);

    $oziz_contact_info_title = get_theme_mod( 'contact_info_title','CONTACT INFO' ); 
    $oziz_contact_info_desc = get_theme_mod('contact_info_desc'); 
    $oziz_contact_info_list = get_theme_mod('contact_info_list'); 
    $oziz_contact_shortcode_title = get_theme_mod( 'contact_shortcode_title','SEND US MESSAGE' ); 
    $oziz_contact_shortcode_desc = get_theme_mod('contact_shortcode_desc'); 
    $oziz_contact_shortcode_code = get_theme_mod('contact_shortcode_code'); 
    
?>
<div class="oz-container">
    <div class="oz-row">
        <div class="oz-col-md-5">
    <?php oziz_ch_block_slogan_small($oziz_contact_info_title); ?>
    <?php oziz_echo('<div class="oz-p">', $oziz_contact_info_desc, '</div>'); ?>
                <?php
                if ($oziz_contact_info_list) {
                    ?>
                    <div  class="oz-contact-info">
                        <ul>
                    <?php
                    foreach ($oziz_contact_info_list as $oziz_item) {
                        echo '<li>
								<label>', esc_html($oziz_item['label']) ,'</label>';
                        if ($oziz_item['link']) {
                            echo '<span><a href="', esc_url($oziz_item['link']),'" title="">', esc_html($oziz_item['text']) ,'</a></span>';
                        } else {
                            echo '<span>', esc_html($oziz_item['text']),'</span>';
                        }
                        echo '</li>';
                    }
                    ?>
                        </ul>
                    </div>
                    <?php
                }
                ?>
        </div>
        <div class="oz-col-md-7">
                <?php
                    oziz_ch_block_slogan_small($oziz_contact_shortcode_title);
                    oziz_echo('<div  class="oz-p">', $oziz_contact_shortcode_desc, '</div>');
                    if ( $oziz_contact_shortcode_code ) {
                        echo do_shortcode($oziz_contact_shortcode_code);
                    }
                ?>
        </div>
    </div>
</div>';
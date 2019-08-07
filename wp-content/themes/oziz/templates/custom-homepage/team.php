<?php
    $oziz_team_title = get_theme_mod('team_title','OUR TEAM');
    $oziz_team_title_sub = get_theme_mod('team_title_sub','OUR BEST PARTNER IN CRIME');
    oziz_ch_block_teaser($oziz_team_title, $oziz_team_title_sub);
    
echo '<div class="oz-block-one">';
    $oziz_team_member_title = get_theme_mod('team_member_title');
    oziz_ch_block_slogan( $oziz_team_member_title ); 
    
    $oziz_default_url = OZIZ_URL .'/public/images/team.png';

    $oziz_team_list  = get_theme_mod('team_list');
if ($oziz_team_list) {
    ?>
<div class="oz-container">
    <div class="oz-row">
    <?php
    foreach ($oziz_team_list as $oziz_item) {
        if ($oziz_item['team_pic']['url']==='') {
            $oziz_item['team_pic']['url'] = $oziz_default_url;
        }
        if ($oziz_item['social_icon_1']==='') {
            $oziz_item['social_icon_1'] = 'fa fa-grav';
        }
        if ($oziz_item['social_icon_2']==='') {
            $oziz_item['social_icon_2'] = 'fa fa-grav';
        }
        if ($oziz_item['social_icon_3']==='') {
            $oziz_item['social_icon_3'] = 'fa fa-grav';
        }
        if ($oziz_item['social_icon_4']==='') {
            $oziz_item['social_icon_4'] = 'fa fa-grav';
        }
        ?>
                <div class="oz-col-md-3 oz-col-sm-6">
                    <div class="oz-team">
                        <div class="oz-team-feature">
        <?php
        if (oziz_get_data($oziz_item, 'team_pic', 'url') ) {                    
            ?>
                <img src="<?php echo esc_url($oziz_item['team_pic']['url']); ?>" alt="" />
            <?php
        }
        ?>
                            <div class="oz-team-feature-desc">
                                <?php oziz_echo('<h4>', $oziz_item['name'], '</h4>'); ?>
                                <?php oziz_echo('<span>', $oziz_item['position'], '</span>'); ?>
                            </div>
                        </div>
                        <div class="oz-team-desc">
        <?php oziz_echo('<div class="oz-p">', $oziz_item['desc'], '</div>'); ?>
                                                        
                            <ul class="oz-team-social">    
                                <?php
                                if (oziz_get_data($oziz_item, 'social_link_1') ) {                    
                                    ?>        
                                        <li><a href="<?php echo esc_url($oziz_item['social_link_1']); ?>" target="_blank" title=""><i class="<?php echo esc_attr($oziz_item['social_icon_1']); ?>"></i></a></li>
                                <?php } 
                                if (oziz_get_data($oziz_item, 'social_link_2') ) {                    
                                    ?>        
                                        <li><a href="<?php echo esc_url($oziz_item['social_link_2']); ?>" target="_blank" title=""><i class="<?php echo esc_attr($oziz_item['social_icon_2']); ?>"></i></a></li>
                                <?php } 
                                if (oziz_get_data($oziz_item, 'social_link_3') ) {                    
                                    ?>        
                                        <li><a href="<?php echo esc_url($oziz_item['social_link_3']); ?>" target="_blank" title=""><i class="<?php echo esc_attr($oziz_item['social_icon_3']); ?>"></i></a></li>
                                <?php } 
                                if (oziz_get_data($oziz_item, 'social_link_4') ) {                    
                                    ?>        
                                        <li><a href="<?php echo esc_url($oziz_item['social_link_4']); ?>" target="_blank" title=""><i class="<?php echo esc_attr($oziz_item['social_icon_4']); ?>"></i></a></li>
                                <?php } ?>
                                
                            </ul>
                        </div>
                    </div>
                </div>
        <?php
    }
    ?>
        
    
    </div>
</div>
    <?php
}

echo '<div>';
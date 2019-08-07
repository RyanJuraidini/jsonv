<?php 

function oziz_skill_the( $oziz_title, $oziz_skill_list )
{

    if ($oziz_skill_list) {
        echo '
<div class="oz-container">
    <div class="oz-row">
        <div class="oz-col-md-12">';
        echo    '<h4 class="oz-skill_heading">', esc_html($oziz_title) ,'</h4>';
        echo     '<ul class="oz-skill-1">';
        foreach ($oziz_skill_list as $oziz_item)    {
            echo '<li>
                <div>
                    <div class="oz-skill-1_bar-container">
                        <div title="expert" class="oz-skill-1_bar" style="width:', esc_attr($oziz_item['level']) ,'%;">
                            ', esc_html($oziz_item['skill']) ,' <span class="oz-skill-1_bar_padding">- ', esc_html($oziz_item['level'])  ,'%</span>
                        </div>
                    </div>
                </div>
            </li>';
            
                    
        }
        echo '</ul>';
        echo    '</div>
    </div>
</div>';
    }
}

$oziz_skill_show = get_theme_mod( 'skill_show','yes' ); 
if ( $oziz_skill_show == 'yes') {
    $oziz_skill_title = get_theme_mod('skill_title','SKILLS');
    oziz_ch_block_slogan_small($oziz_skill_title); 

    $oziz_skill_title1 = get_theme_mod('skill_title1');
    $oziz_skill_list1 = get_theme_mod('skill_list1');

    oziz_skill_the($oziz_skill_title1, $oziz_skill_list1);

    $oziz_skill_title2 = get_theme_mod('skill_title2');
    $oziz_skill_list2 = get_theme_mod('skill_list2');

    oziz_skill_the($oziz_skill_title2, $oziz_skill_list2);

    $oziz_skill_title3 = get_theme_mod('skill_title3');
    $oziz_skill_list3 = get_theme_mod('skill_list3');

    oziz_skill_the($oziz_skill_title3, $oziz_skill_list3);
}
<?php
function oziz_experience_the($oziz_experience_title,$oziz_experience_list)
{
    oziz_ch_block_slogan_small($oziz_experience_title); 
    if ($oziz_experience_list ) {
        echo '<div class="oz-container">
			<div class="oz-row">
				<div class="oz-col-md-12">
		
					<ul class="oz-experience">';
        foreach($oziz_experience_list as $oziz_item) {
            echo '
					<li>
						<div class="oz-experience-left float-left">
							<div class="oz-experience-year">
								<div class="year_1">', esc_html($oziz_item['year1']) ,'</div>
								<div>-</div>
								<div class="year_2">', esc_html($oziz_item['year2']) ,'</div>
							</div>
							
							<div class="clearfix"></div>
						</div>
						<div class="oz-experience-right">
							<div class="oz-exp_desc">
								<div class="oz-experience_t1">', esc_html($oziz_item['position']) ,'</div>
								<div class="oz-experience_t2">', esc_html($oziz_item['company']) ,'</div>
								<div class="oz-experience_t3">', esc_html($oziz_item['location']) ,'</div>
							</div>
							<div class="oz-exp_description">', wp_kses_post($oziz_item['desc']) ,'</div>
						</div>
						<div class="clearfix"></div>
					</li>
				';
        }
        echo     '</ul>
					</div>
				</div>
			</div>';
    }
}



$oziz_experience_show = get_theme_mod( 'experience_show','yes' );
if ( $oziz_experience_show == 'yes') {
	$oziz_experience_title = get_theme_mod('experience_title','WORK EXPERIENCE');
	$oziz_experience_list = get_theme_mod('experience_list');
	oziz_experience_the($oziz_experience_title, $oziz_experience_list);
}

$oziz_education_show = get_theme_mod( 'education_show','yes' ); 
if ( $oziz_education_show == 'yes') {
	$oziz_experience_title = get_theme_mod('education_title','EDUCATION LIST');
	$oziz_experience_list = get_theme_mod('education_list');
	oziz_experience_the($oziz_experience_title, $oziz_experience_list);
}
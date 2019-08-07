<?php

function oziz_pricing_table( $data, $sign='',$amount='',$title='',$text='',$link='',$selected='',$col='oz-col-md-3' )
{
    if ($selected) {
        $selected = ' '. $selected;
    }
    if ($data) {
        echo '
				<div class="', esc_attr($col)  ,'">
					<ul class="oz-pricing', esc_attr($selected),'">
						<li class="oz-pricing-price">
							<span class="oz-pricing_price_sign">', esc_html($sign) ,'</span>
							<span class="oz-pricing_price_amount">', esc_html($amount),'</span>
						</li>
						<li class="oz-pricing_plan">', esc_html($title) ,'</li>';
        $i = 0;
        foreach ($data as $item) {
            $i++;
            if (($i%2)==1 ) {
                echo    '<li class="oz-pricing_row_1">', esc_html($item['text']),'</li>';
            } else {
                echo    '<li class="oz-pricing_row_2">', esc_html($item['text']),'</li>';
            }
        }
        echo        '<li class="oz-pricing_buy_now"><a href="', esc_url($link) ,'">', esc_html($text) ,'</a></li>
					</ul>
				</div>
			';
    }
}

?>
<?php 
    echo '<div class="oz-block-one">';
    $oziz_pricing_title = get_theme_mod('pricing_title','PRICING TABLE');
    oziz_ch_block_slogan_small($oziz_pricing_title); 
?>
<div class="oz-container">
    <div class="oz-row">
    <?php
    $oziz_col = get_theme_mod('pricing_column','oz-col-md-3');

    $oziz_data = get_theme_mod('pricing_table1_data');
    $oziz_sign = get_theme_mod('pricing_table1_sign');
    $oziz_amount = get_theme_mod('pricing_table1_amount');
    $oziz_title = get_theme_mod('pricing_table1_title');
    $oziz_text = get_theme_mod('pricing_table1_text');
    $oziz_link = get_theme_mod('pricing_table1_link');            
    $oziz_selected = get_theme_mod('pricing_table1_selected');
    oziz_pricing_table($oziz_data, $oziz_sign, $oziz_amount, $oziz_title, $oziz_text, $oziz_link, $oziz_selected, $oziz_col);

    $oziz_data = get_theme_mod('pricing_table2_data');
    $oziz_sign = get_theme_mod('pricing_table2_sign');
    $oziz_amount = get_theme_mod('pricing_table2_amount');
    $oziz_title = get_theme_mod('pricing_table2_title');
    $oziz_text = get_theme_mod('pricing_table2_text');
    $oziz_link = get_theme_mod('pricing_table2_link');            
    $oziz_selected = get_theme_mod('pricing_table2_selected');
    oziz_pricing_table($oziz_data, $oziz_sign, $oziz_amount, $oziz_title, $oziz_text, $oziz_link, $oziz_selected, $oziz_col);

    $oziz_data = get_theme_mod('pricing_table3_data');
    $oziz_sign = get_theme_mod('pricing_table3_sign');
    $oziz_amount = get_theme_mod('pricing_table3_amount');
    $oziz_title = get_theme_mod('pricing_table3_title');
    $oziz_text = get_theme_mod('pricing_table3_text');
    $oziz_link = get_theme_mod('pricing_table3_link');            
    $oziz_selected = get_theme_mod('pricing_table3_selected');
    oziz_pricing_table($oziz_data, $oziz_sign, $oziz_amount, $oziz_title, $oziz_text, $oziz_link, $oziz_selected, $oziz_col);

    $oziz_data = get_theme_mod('pricing_table4_data');
    $oziz_sign = get_theme_mod('pricing_table4_sign');
    $oziz_amount = get_theme_mod('pricing_table4_amount');
    $oziz_title = get_theme_mod('pricing_table4_title');
    $oziz_text = get_theme_mod('pricing_table4_text');
    $oziz_link = get_theme_mod('pricing_table4_link');            
    $oziz_selected = get_theme_mod('pricing_table4_selected');
    oziz_pricing_table($oziz_data, $oziz_sign, $oziz_amount, $oziz_title, $oziz_text, $oziz_link, $oziz_selected, $oziz_col);
    ?>
    </div>
</div>
<?php echo '</div>';
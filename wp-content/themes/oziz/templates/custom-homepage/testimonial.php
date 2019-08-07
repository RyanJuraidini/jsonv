<?php echo '<div class="oz-block-one">'; ?>
<div class="oz-container">
    <div class="oz-row">
        <div class="oz-col-md-12">
        <?php
            $oziz_testimonial_title = get_theme_mod('testimonial_title','TESTIMONIALS');
            $oziz_testimonial_list = get_theme_mod('testimonial_list');
            oziz_ch_block_slogan_small($oziz_testimonial_title);
        if ($oziz_testimonial_list) {
            echo '<ul class="oz-ul-testimonial tcycle">';
            foreach ($oziz_testimonial_list as $oziz_item) {
                echo '<li>'; 
                oziz_echo('<div class="oz-p">', $oziz_item['desc'], '</div>');                   
                if (oziz_get_data($oziz_item,'profile_pic','url')) {
                    echo '<img src="', esc_url($oziz_item['profile_pic']['url']),'" alt="" />';
                }    
                oziz_echo('<h4>', $oziz_item['name'], '</h4>');   
                echo '<a href="', esc_url($oziz_item['link']) ,'" title="">', esc_html($oziz_item['website']) ,'</a>';               
                echo '</li>';
            }
            echo '</ul>';
                
        }
        ?>
        </div>
    </div>
</div>
<?php echo '</div>';
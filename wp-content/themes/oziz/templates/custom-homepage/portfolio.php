<?php
    $oziz_portfolio_title = get_theme_mod('portfolio_title','PORTFOLIO');
    $oziz_portfolio_title_sub = get_theme_mod('portfolio_title_sub','A LITTLE JOB COLLECTION WHICH I DO');
    oziz_ch_block_teaser($oziz_portfolio_title, $oziz_portfolio_title_sub);
    
    $oziz_portfolio_data_category = get_theme_mod('portfolio_data_category');


    $oziz_default_url = OZIZ_URL .'/public/images/team.png';

    $oziz_query_args = array();
if ($oziz_portfolio_data_category) {
    $oziz_query_args['cat'] = implode(', ', $oziz_portfolio_data_category);
}
    $oziz_query_args['meta_query'] = array(array('key' => '_thumbnail_id'));
    $oziz_widget_posts = new WP_Query($oziz_query_args);
    
if ($oziz_portfolio_data_category) {
    echo '<ul class="oz-portfolio-ul-category">';
    foreach ($oziz_portfolio_data_category as $oziz_category_id ) {
        $oziz_category_link = get_category_link($oziz_category_id);
        $oziz_category_name = get_cat_name($oziz_category_id);
        echo '<li><a href="', esc_url($oziz_category_link) ,'" title="">', esc_html($oziz_category_name)  ,'</a></li>';
    }
    echo '</ul>';
}
if ($oziz_widget_posts->have_posts()) :
    echo '<div class="oz-portfolio">';
    while ($oziz_widget_posts->have_posts()) : $oziz_widget_posts->the_post();
        ?>
            
                <div class="az-portfolio-item">
                    <div class="figure">
                        <a class="az-portfolio-img" href="<?php the_permalink(); ?>" title="">
        <?php the_post_thumbnail('oziz-medium'); ?>
                        </a>
                        <figcaption>
                            <h3><?php the_title(); ?></h3>
                            <span><?php 
                                $oziz_categories = get_the_category();
                            if (! empty($oziz_categories) ) {
                                echo esc_html( $oziz_categories[0]->name );
                            }
                            ?></span>
                        </figcaption>
                    </div>
                </div>
        <?php
    endwhile;
    echo '<div class="clearfix"></div>';
    echo '</div>';
endif;
    wp_reset_postdata();
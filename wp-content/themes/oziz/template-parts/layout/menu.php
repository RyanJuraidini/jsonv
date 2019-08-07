<section id="masthead">
        <div class="oz-container">
            <div class="oz-row">
                <div class="oz-col-md-4 oz-col-sm-12">
                    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'oziz'); ?></a>

                    <header class="site-header">
                        <div class="site-branding">
        <?php
        if (has_custom_logo() ) :
            the_custom_logo();
        endif;
        $oziz_blog_info = get_bloginfo('name');
        if (! empty($oziz_blog_info) ) :
            if (is_front_page() && is_home() ) :
                ?>
                                    <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
                <?php
         else :
                ?>
                                    <p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></p>
                <?php
         endif;
        endif;
        $oziz_description = get_bloginfo('description', 'display');
        if ($oziz_description || is_customize_preview() ) :
            ?>
                                <p class="site-description"><?php echo wp_kses_post($oziz_description); /* WPCS: xss ok. */ ?></p>
        <?php endif; ?>
                        </div><!-- .site-branding -->


                    </header><!-- #masthead -->
                </div>
                <div class="oz-col-md-8  oz-col-sm-12">
                    <nav id="site-navigation" class="main-navigation --color-reset">
                        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e('Primary Menu', 'oziz'); ?></button>
        <?php
        wp_nav_menu(
            array(
            'theme_location' => 'menu-1',
            'menu_id'        => 'primary-menu',
            ) 
        );
        ?>
                    </nav><!-- #site-navigation -->
                </div>
            </div>
        </div>
</section>
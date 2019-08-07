<?php
/*-----------------------------------------------------------------------------------*/
/*  Oziz Customizer Controls
/*-----------------------------------------------------------------------------------*/

class Oziz_Misc_Control extends WP_Customize_Control
{


    public $settings = 'blogname';
    public $description = '';
    public $group = '';


    /**
     * Render the description and title for the sections
     */
    public function render_content()
    {
        switch ( $this->type ) {
        default:

        case 'heading':
            echo '<span class="customize-control-title">' . esc_html($this->label) . '</span>';
            break;

        case 'custom_message' :
            echo '<p class="description">' . wp_kses_post($this->description) . '</p>';
            break;

        case 'hr' :
            echo '<hr />';
            break;
        }
    }
}
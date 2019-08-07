<?php
class Oziz_Multiple_Select_Control extends WP_Customize_Control
{

    /**
     * The type of customize control being rendered.
     */
    public $type = 'multiple-select';

    /**
     * Displays the multiple select on the customize screen.
     */
    public function render_content()
    {

        if (empty($this->choices) ) {
            return;
        }
        ?>
                <label>
                    <span class="customize-control-title"><?php echo esc_html($this->label); ?></span>
                    <select <?php $this->link(); ?> multiple="multiple" style="height: 200px;">
        <?php
        foreach ( $this->choices as $value => $label ) {
            $selected = ( in_array($value, $this->value()) ) ? selected(1, 1, false) : '';
            echo '<option value="' . esc_attr($value) . '"' . esc_attr($selected) . '>' . wp_kses_post($label) . '</option>';
        }
        ?>
                    </select>
                    <span class="description customize-control-description"><?php echo esc_html($this->description); ?></span>
                </label>
    <?php }
}
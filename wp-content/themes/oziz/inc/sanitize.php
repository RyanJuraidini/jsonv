<?php
function oziz_sanitize_checkbox( $input )
{
    if ($input == 1 ) {
        return 1;
    } else {
        return 0;
    }
}

function oziz_sanitize_select( $input, $setting = null )
{

    // input must be a slug: lowercase alphanumeric characters, dashes and underscores are allowed only
    $input = sanitize_key($input);

    // get the list of possible select options
    if ($setting ) {
        $choices = $setting->manager->get_control($setting->id)->choices;

        // return input if valid or return default option
        return ( array_key_exists($input, $choices) ? $input : $setting->default );
    } else {
        return $input;
    }

}

function oziz_sanitize_date_time( $input, $setting )
{
    $datetimeformat = 'Y-m-d';
    if ($setting->manager->get_control($setting->id)->include_time ) {
        $datetimeformat = 'Y-m-d H:i:s';
    }
    $date = DateTime::createFromFormat($datetimeformat, $input);
    if ($date === false ) {
        $date = DateTime::createFromFormat($datetimeformat, $setting->default);
    }
    return $date->format($datetimeformat);
}

function oziz_sanitize_css( $string )
{
    $string = preg_replace('@<(script|style)[^>]*?>.*?</\\1>@si', '', $string);
    $string = strip_tags($string);
    return trim($string);
}

function oziz_sanitize_multiple( $input )
{
    $multi_values = !is_array($input) ? explode(',', $input) : $input;

    return !empty($multi_values) ? array_map('sanitize_text_field', $multi_values) : array();
}
function oziz_sanitize_color_alpha( $color )
{
    $color = str_replace('#', '', $color);
    if ('' === $color ) {
        return '';
    }

    // 3 or 6 hex digits, or the empty string.
    if (preg_match('|^#([A-Fa-f0-9]{3}){1,2}$|', '#' . $color) ) {
        // convert to rgb
        $colour = $color;
        if (strlen($colour) == 6 ) {
            list( $r, $g, $b ) = array( $colour[0] . $colour[1], $colour[2] . $colour[3], $colour[4] . $colour[5] );
        } elseif (strlen($colour) == 3 ) {
            list( $r, $g, $b ) = array( $colour[0] . $colour[0], $colour[1] . $colour[1], $colour[2] . $colour[2] );
        } else {
            return false;
        }
        $r = hexdec($r);
        $g = hexdec($g);
        $b = hexdec($b);
        return 'rgba(' . join(
            ',',
            array(
            'r' => $r,
            'g' => $g,
            'b' => $b,
            'a' => 1,
            )
        ) . ')';

    }

    return strpos(trim($color), 'rgb') !== false ? $color : false;
}

function oziz_sanitize_repeatable_data_field( $input, $setting )
{
    $control = $setting->manager->get_control($setting->id);

    $fields = $control->fields;
    if (is_string($input) ) {
        $input = json_decode(wp_unslash($input), true);
    }
    $data = wp_parse_args($input, array());

    if (! is_array($data) ) {
        return false;
    }
    if (! isset($data['_items']) ) {
        return false;
    }
    $data = $data['_items'];

    foreach ( $data as $i => $item_data ) {
        foreach ( $item_data as $id => $value ) {

            if (isset($fields[ $id ]) ) {
                switch ( strtolower($fields[ $id ]['type']) ) {
                case 'text':
                    $data[ $i ][ $id ] = sanitize_text_field($value);
                    break;
                case 'textarea':
                case 'editor':
                    $data[ $i ][ $id ] = wp_kses_post($value);
                    break;
                case 'color':
                    $data[ $i ][ $id ] = sanitize_hex_color_no_hash($value);
                    break;
                case 'coloralpha':
                       $data[ $i ][ $id ] = oziz_sanitize_color_alpha($value);
                    break;
                case 'checkbox':
                       $data[ $i ][ $id ] = oziz_sanitize_checkbox($value);
                    break;
                case 'select':
                       $data[ $i ][ $id ] = '';
                    if (is_array($fields[ $id ]['options']) && ! empty($fields[ $id ]['options']) ) {
                        // if is multiple choices
                        if (is_array($value) ) {
                            foreach ( $value as $k => $v ) {
                                if (isset($fields[ $id ]['options'][ $v ]) ) {
                                          $value [ $k ] = $v;
                                }
                            }
                            $data[ $i ][ $id ] = $value;
                        } else { // is single choice
                            if (isset($fields[ $id ]['options'][ $value ]) ) {
                                $data[ $i ][ $id ] = $value;
                            }
                        }
                    }

                    break;
                case 'radio':
                       $data[ $i ][ $id ] = sanitize_text_field($value);
                    break;
                case 'media':
                    $value = wp_parse_args(
                        $value,
                        array(
                                'url' => '',
                                'id' => false,
                        )
                    );
                            $value['id'] = absint($value['id']);
                            $data[ $i ][ $id ]['url'] = sanitize_text_field($value['url']);

                    if ($url = wp_get_attachment_url($value['id']) ) {
                        $data[ $i ][ $id ]['id']   = $value['id'];
                        $data[ $i ][ $id ]['url']  = $url;
                    } else {
                        $data[ $i ][ $id ]['id'] = '';
                    }

                    break;
                default:
                       $data[ $i ][ $id ] = wp_kses_post($value);
                }
            } else {
                $data[ $i ][ $id ] = wp_kses_post($value);
            }

            if (is_array($data) && is_array($fields) && count($data[ $i ]) != count($fields) ) {
                foreach ( $fields as $k => $f ) {
                    if (! isset($data[ $i ][ $k ]) ) {
                        $data[ $i ][ $k ] = '';
                    }
                }
            }
        }
    }

    return $data;
}

function oziz_showon_frontpage()
{
    return is_page_template('templates/custom-homepage.php');
}
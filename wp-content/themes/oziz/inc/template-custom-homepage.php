<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package oziz
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param  array $classes Classes for the body element.
 * @return array
 */
function oziz_ch_block_teaser($heading='',$span='')
{
    if ($heading) {
        $heading = "<h2>$heading</h2>";
    }
    if ($span) {
        $span = "<span>$span</span>";
    }
    $str = '
	<div class="oz-block-teaser">
		<div class="oz-container">
			<div class="oz-row">
				<div class="oz-col-md-12">'.
                $heading. $span    .
                '</div>
			</div>
		</div>
	</div>
	';
    echo wp_kses_post($str);
}

function oziz_ch_block_slogan($heading='',$span='')
{
    if ($heading) {
        $heading = "<h3>$heading</h3>";
    }
    if ($span) {
        $span = "<h4>$span</h4>";
    }
    $str = '
	<div class="oz-block-section">
		<div class="oz-container">
			<div class="oz-row">
				<div class="oz-col-md-12">
					<div class="oz-slogan text-center">
						'. $heading . $span . '
					</div>
				</div>
			</div>
		</div>
	</div>
	';
    echo wp_kses_post($str);
}

function oziz_ch_block_slogan_small($heading='')
{
    if ($heading) {
        $heading = "<span>$heading</span>";
        $str = '
		<div class="oz-container">
			<div class="oz-row">
				<div class="oz-col-md-12">
					<div class="oz-slogan-small text-center">
						'. $heading .'
					</div>
				</div>
			</div>
		</div>
		';
        echo wp_kses_post($str);
    }
}


// check variable exist
function oziz_get_data( $options , $var1 , $var2='' )
{
    if (isset($options) ) {
        if ($var2 == '') {
            if (isset($options[$var1]) ) {
                return $options[$var1];
            }
        } else {
            if (isset($options[$var1]) ) {
                if (isset($options[$var1][$var2]) ) {
                    return $options[$var1][$var2];
                }
            }
        }
    }
    return '';
}

// output variable data
function oziz_echo( $before='' , $content='' , $after='' )
{
    $output = '';
    if ($content) {
        $output =  $before . "\n" . $content . "\n" . $after . "\n";
        echo wp_kses_post($output);
    }
    
}
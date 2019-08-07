<?php
$oziz_youtube_home_background = get_theme_mod( 'youtube_home_background' , 'video' );
if ($oziz_youtube_home_background=='video') {
    $oziz_youtube_home_video_url = get_theme_mod('youtube_home_video_url', 'https://www.youtube.com/watch?v=nx_kW1f5W6M');
    $oziz_youtube_home_video_mute = get_theme_mod('youtube_home_video_mute','true');
    ?>
    <div id="oz-video-temp" class="player"  data-property="{videoURL:'<?php echo esc_url($oziz_youtube_home_video_url) ?>',containment:'#oz-video',stopMovieOnBlur:false,startAt:0,mute:<?php echo esc_attr($oziz_youtube_home_video_mute); ?>,autoPlay:true,loop:true,opacity:1,showControls:false}">
    </div>
    <section id="oz-video" class="xplayer"  style="background-color:#303030;height:auto">
    <?php
} else {
    ?>
    <section id="oz-video" style="background-color:#303030;;height:auto;background-image:url('<?php 
    $oziz_youtube_home_bg_image = get_theme_mod('youtube_home_bg_image');
    echo esc_url($oziz_youtube_home_bg_image);
    ?>');">
    <?php
}
?>
        <div class="oz-container">
            <div class="oz-row">
                <div class="oz-col-md-12">
                    <div class="oz-video text-center">
                        <!-- slider -->
        <?php 
        $oziz_list_text = get_theme_mod('youtube_home_list_text'); 
        if ($oziz_list_text) {
            echo '<ul class="oz-video-skill tcycle">';
            foreach ($oziz_list_text as $oziz_text) {
                echo '<li>';
                echo '<h3>'. esc_html($oziz_text['title']) .'</h3>';
                echo '<h2>'. esc_html($oziz_text['title-sub']) .'</h2>';
                echo '</li>';
            }
            echo '</ul>';
        }
        ?>                            
                        <!-- slider ends -->
        <?php 
        $oziz_list_button= get_theme_mod('youtube_home_button'); 
        if ($oziz_list_button) {
            foreach ($oziz_list_button as $oziz_text) {
                echo '<a class="oz-video-button" href="'. esc_url($oziz_text['link']) .'" title="">'. esc_html($oziz_text['text']) .'</a>';
            }
        }
        ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php
/**
 * Plugin Name: MC Google Reviews API
 * Description: Exposes /wp-json/mc/v1/google-reviews
 * Version: 0.1.0
 */

if (!defined('ABSPATH')) exit;

add_action('admin_menu', function() {
    add_options_page('MC Reviews API', 'MC Reviews API', 'manage_options', 'mc-reviews', function() {
        ?>
        <div class="wrap">
            <h1>MC Reviews API</h1>
            <form method="post" action="options.php">
                <?php settings_fields('mc_reviews_opts'); ?>
                <table class="form-table">
                    <tr>
                        <th>Reviews shortcode</th>
                        <td>
                            <input type="text" name="mc_reviews_shortcode" value="<?php echo esc_attr(get_option('mc_reviews_shortcode','')); ?>" class="regular-text" />
                        </td>
                    </tr>
                </table>
                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    });
});

add_action('admin_init', function() {
    register_setting('mc_reviews_opts', 'mc_reviews_shortcode');
});

add_action('rest_api_init', function() {
    register_rest_route('mc/v1', '/google-reviews', [
        'methods' => 'GET',
        'callback' => function() {
            $shortcode = get_option('mc_reviews_shortcode', '');
            if (empty($shortcode)) {
                return new WP_REST_Response(['error' => 'No shortcode set'], 400);
            }
            return new WP_REST_Response(['html' => do_shortcode($shortcode)], 200);
        },
        'permission_callback' => '__return_true'
    ]);
});
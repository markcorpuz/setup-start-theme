<?php
/**
 * SETUP-START | 1.0.0 | 220109 | archive.php
 *
 * @package      SETUP-START
 * @author       Mark Corpuz
 * @since        1.0.0
 * @license      GPL-2.0+
**/

//* Force grid layout setting
add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_grid_layout' );

// Runs the Genesis loop.
genesis();

<?php
/**
 * SETUP-START
 *
 * NOTE: This file is a duplicate of the core Genesis Framework.
 *
 * @package StudioPress\Genesis
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/genesis/
 */

// Common path to default layout images.
// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
$url = get_stylesheet_directory_uri() . '/assets/layouts/';

/**
 * The Layouts config. Sets the default layouts for use by Genesis.
 *
 * If child theme contains a `layouts.php` config, it will be used instead of this config.
 *
 * @since 2.8.0
 */
return [
	'content-layout'         => [
		'label'   => __( 'Content', 'genesis' ),
		'img'     => $url . 'content-layout.png',
		'default' => is_rtl() ? false : true,
		'type'    => [ 'site' ],
	],
	'content-sidebar'         => [
		'label'   => __( 'Content Sidebar', 'genesis' ),
		'img'     => $url . 'content-sidebar.png',
		'type'    => [ 'site' ],
	],
	'full-width-content'      => [
		'label' => __( 'Full Width', 'genesis' ),
		'img'   => $url . 'full-width-content.png',
		'type'  => [ 'site' ],
	],
	'fullscreen-layout'         => [
		'label'   => __( 'Fullscreen', 'genesis' ),
		'img'     => $url . 'fullscreen-layout.png',
		'type'    => [ 'site' ],
	],
	'grid-layout'         => [
		'label'   => __( 'Grid', 'genesis' ),
		'img'     => $url . 'grid-layout.png',
		'type'    => [ 'site' ],
	],
	'timeline-layout'         => [
		'label'   => __( 'Timeline', 'genesis' ),
		'img'     => $url . 'timeline-layout.png',
		'type'    => [ 'site' ],
	],
];
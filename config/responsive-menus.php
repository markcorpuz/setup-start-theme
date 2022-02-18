<?php
/**
 * Genesis Sample child theme.
 *
 * @package Genesis Sample
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/genesis-sample/
 */

/**
 * Genesis responsive menus settings. (Requires Genesis 3.0+.)
 */
return array(
	'script' => array(
		'mainMenu'         => __( '', 'setup-start' ),
		'menuClasses' => array(
			'others' => array( '.nav-primary' ),
		),
	),
	'extras' => array(
		'media_query_width' => '960px',
	),
);
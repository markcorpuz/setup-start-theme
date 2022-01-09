<?php

// Rename content-sidebar-wrap to content-area
function setup_start_change_content_sidebar_wrap( $attributes ) {
	$attributes['class'] = 'content-area';
	return $attributes;
}
add_filter( 'genesis_attr_content-sidebar-wrap', 'setup_start_change_content_sidebar_wrap' );
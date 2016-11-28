$(function() {

	/* hide #image-enlarged container initially */
	$('#image-enlarged').hide();

	/* when a .graphicdesign image class is clicked, get the src attribute, 
	show #image-enlarge container, give the src attribute the same src attribute as the thumbnail */
	$('.graphicdesignimage').on('click', function() {
		var src = $(this).attr('src');
		$('#image-enlarged').show();
		$('#image-enlarged img').attr('src', src);
	});

	/* when link on top right is clicked, clear the src attribute, hide #image-enlarged container*/
	$('#image-enlarged a').on('click', function(e) {
		e.preventDefault();
		$('#image-enlarged').removeAttr('src');
		$('#image-enlarged').hide();
	});

	$('.column-left h5 a').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		$('#image-enlarged').hide();
		if ($(this).hasClass !== 'current') {
			$('.column-left h5 a').removeClass('current');
			$(this).addClass('current');
		}
		if (href !== 'all') {
			className = '.' + href;
			$(className).show();
			$('.graphic-design-row').not(className).hide();
		} else {
			$('.graphic-design-row').show();
		}
	});

});
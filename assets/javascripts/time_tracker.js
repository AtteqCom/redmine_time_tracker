/*
 * This script updates the element 'id' with 'newContent' if the two contents differ
 */
function updateElementIfChanged(id, newContent) {
    el = $('#' + id);
    if (el.innerHTML != newContent) { 
	el.html(newContent); 
	updateTimeTrackerAjax();
    }
}
function updateTimeTrackerAjax() {
	$('.time-tracker-ajax').each(function () {
		$(this).click(function (event) {
			event.preventDefault();
			$.ajax({
				url: $(this).attr('href'),
				success: function (data) { updateElementIfChanged('time-tracker-menu', data); }
			});
		});
	});
}

$(function () {
	/*
	$('.time-tracker-menu-update').bind('ajax:success', function (evt, data, status, xhr) {
		$('time-tracker-menu').html(data);
	});
	*/
	updateTimeTrackerAjax();
});

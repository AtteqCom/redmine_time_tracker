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
            $.ajax({
                url: $(this).attr('href'),
                success: function (data) { updateElementIfChanged('time-tracker-menu', data); }
            });
        });
    });
}

function contextMenuTimeTrackerItemClick(el) {
    $.ajax({
        url: $(el).attr('href'),
        success: function (data) { 
            updateElementIfChanged('time-tracker-menu', data); 
        }
    });
}

$(function () {
    updateTimeTrackerAjax();
});

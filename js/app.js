$(function() {
    $('#btn-follow, #btn-unfollow').click(function(e) {
        e.preventDefault();
        $(this).parents('.profile-item').toggleClass('followed');
    });
});
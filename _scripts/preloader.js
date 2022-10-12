// Preloader
$(window).on('load', function() {
    // wait for page load PLUS one second
    setTimeout( removeLoader, 1000 );
});
function removeLoader() {
    $( "#preloader" ).fadeOut(500, function() {
        // fadeOut complete. Remove the preloader
        $( "#preloader" ).remove();
    });
}
$(document).ready(function () {

    $('input').iCheck({
        // checkboxClass: 'icheckbox_minimal-green',
        // radioClass: 'iradio_minimal-green'

        checkboxClass: 'icheckbox_square-green iCheck-margin',
        radioClass: 'iradio_square-green iChk iCheck-margin'
    });


    $(".dropdown-tree-a").click(function() {
        $(this).parent('.dropdown-tree').toggleClass("open-tree active");
    });


});
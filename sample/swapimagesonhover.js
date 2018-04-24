$(document).ready(function() {
    $('.swim').each(function(index, element) {   
        var dataImage = $(this).data("img");
        var dataClass = $(this).attr("class");
        $(this).after('<img src="' + dataImage + '" class= "' + dataClass + '"/>');
        $(this).parent().children('img').wrapAll('<div class="swim-container"></div>');
    });
})
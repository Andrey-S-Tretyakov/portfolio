(function($)
{
    $.fn.checkbox = function () /* Плагин стилизации input[type=checkbox] */
    {
        var id = $(this).attr('id');
        $(this).after('<div class="checkbox" id="' + id + '"><div class="status"></div><div class="slider" data-checked="true"></div></div>');
        $(this).remove(); /* Удаляем сущесвующий элемент */
        $('#checkbox1').click
            (
                function()
                {
                    var checked = $(this).children('.slider').attr('data-checked');
                    if (checked == 'true')
                    {
                        $(this).children('.slider').attr('data-checked', 'false');
                        $(this).children('.status').css('background-color', '#eee');
                    }
                    else if (checked == 'false')
                    {
                        $(this).children('.slider').attr('data-checked', 'true');
                        $(this).children('.status').css('background-color', '#e80000');
                    }
                    
                }
            );
    };
})(jQuery);
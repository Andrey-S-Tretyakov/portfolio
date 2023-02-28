(
    function ($)
    {
        $.fn.select = function () /* ���������� ����� ������ ����� */
        {
            var id = $(this).attr('id');
            var option = []; // ������ ������
            var select = []; // ��������� ����
            // ��������� ������ � �������
            $(this).children('option').each
                (
                    function ()
                    {
                        var flag = $(this).attr('data-flagUrl');
                        var title = $(this).html();
                        // ������� ������ � ������ option
                        option[option.length] = { 'flagURL': flag, 'title': title };
                        if ($(this).attr('selected'))
                        {
                            select['flagURL'] = flag;
                            select['title'] = title;
                        }
                    }
                );
            // ������� ����� �������� �����
            $(this).after
                (
                    '<div id="' + id + '_new"><div class="selected"><img src="' + select.flagURL + '"><a>' + select.title + '</a><div class="arrow"></div></div><div class="list"></div></div>'
                );
            $(this).remove();
            var form = $('#' + id + '_new');
            var select = form.children('.selected');
            var list = form.children('.list');
            var arrow = select.children('.arrow');

            for (i = 0; i < option.length; i++)
            {
                form.children('.list').append('<div><img src="' + option[i].flagURL + '"><a href="#">' + option[i].title + '</a></div>');
            }
            // �������
            // ��������/�������� ������ ������
            form.click
                (
                    function ()
                    {
                        list.slideToggle
                            (
                                200,
                                function()
                                {
                                    if (list.css('display') == 'none')
                                    {
                                        form.css('border-radius', '5px');
                                        arrow.css
                                            (
                                                {
                                                    'border': '5px solid transparent',
                                                    'border-top' : '5px solid #999',
                                                    'margin' : '5px 0 0 5px'
                                                }
                                            );
                                    }
                                    else
                                    {
                                        form.css('border-radius', '5px 5px 0 0');
                                        arrow.css
                                        (
                                            {
                                                'border': '5px solid transparent',
                                                'border-bottom': '5px solid #999',
                                                'margin' : '0 0 5px 5px'

                                            }
                                        );
                                    }
                                }
                            );
                    }
                );
            // ������� ������ ����� �� ������
            list.children('div').click
                (
                    function ()
                    {
                        select.children('img').attr('src', $(this).children('img').attr('src'));
                        select.children('a').html($(this).children('a').html());
                    }
               );

            $('html').click /* �������� ����������� ���� */
            (
                function (event) {

                    if ($(event.target).parents(select).size() > 6) return;
                    list.hide();
                    form.css('border-radius', '5px');
                    arrow.css
                    (
                        {
                            'border': '5px solid transparent',
                            'border-top': '5px solid #999',
                            'margin': '5px 0 0 5px'
                        }
                    );
                }
            );
        }
    }
)(jQuery);
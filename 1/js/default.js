new WOW().init(); /* Библиотека для работы с анимацией */
$(document).ready
    (
        function()
        {
                // Плавный переход по странице
                $('#motion').click /* Кнопка "Открыть счет" для перехода к форме открытия счета */
                (
                    function ()
                    {
                        $('html, body').stop().animate
                            (
                                {
                                    scrollTop: $('#form').offset().top
                                },
                                1000
                            );
                    }
                );
                // События формы
                $('#open').click /* Нажатие на кнопку "Открыть счет" */
                (
                    function ()
                    {
                        var form = $(this).parent('div');
                        form.html('');
                        form.append('<div class="final"><p>Поздравляем с успешной регистрацией счета в компании ИнстаФорекс!<br><br>Для получения бонуса следуйте инструкциям, высланным на Ваш e-mail.<br>Удачного трейдинга!</p><div class="button">Перейти в личный кабинет</div></div>');
                    }
                );


        }
    );
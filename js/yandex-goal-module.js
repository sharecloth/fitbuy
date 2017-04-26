/*
 * Copyright (c) 2017. http://sharecloth.com
 */

var YandexGoalModule = (function(){

    function _init()
    {
        registerEvents();
    }

    function registerEvents()
    {
        $('body').on('click', '[data-yandex-goal]', function(e) {
            if (yaCounter25188929) {
                var goal = $(this).data('yandex-goal');
                console.log('ya goal is ' + goal);
                yaCounter25188929.reachGoal(goal);
            }
        });
    }

    function _reachGoal(goal) {
        if (yaCounter25188929) {
            console.log('ya goal is ' + goal);
            yaCounter25188929.reachGoal(goal);
        }
    }

    return {
        init: _init,
        reachGoal: _reachGoal
    }
})();

YandexGoalModule.init();
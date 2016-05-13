$(function() {
    initTix();
    
    function initTix() {
        (function update() {
            var now = moment();
            var time = [Math.floor(now.hour() / 10), now.hour() % 10, Math.floor(now.minute() / 10), now.minute() % 10];
            
            // Grab sub-places
            var $tix = $(".tix");
            var $hh = $tix.find("[data-place=hh]");
            var $h = $tix.find("[data-place=h]");
            var $mm = $tix.find("[data-place=mm]");
            var $m = $tix.find("[data-place=m]");
            
            // Shuffle sub-places
            shuffle($hh);
            shuffle($h);
            shuffle($mm);
            shuffle($m);
            
            // Initialize places
            var $time = [$hh, $h, $mm, $m];
            
            // Set time
            $.each($time, function(i, v) {
                var $subplaces = $(this);
                
                // Turn off all lights
                $subplaces.find(".light").removeClass("on");
                
                // Turn on lights as needed
                for (var j = 0; j < time[i]; j++) {
                    $subplaces.eq(j).find(".light").addClass("on");
                }
            });
            
            setTimeout(update, 4000);
        })();
    }
    
    // Preform Fisher-Yates shuffle of array
    function shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
        return o;
    };
});
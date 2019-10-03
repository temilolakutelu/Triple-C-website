jQuery(document).ready(function(e) {
    e("#grantSubmit").click(() => { alert("form submitted") }), e("#blogCarousel").carousel({ interval: 5e3 });
    var t = new Date("Nov 16, 2019 12:00:00").getTime(),
        r = setInterval(function() {
            var e = (new Date).getTime(),
                n = t - e,
                a = Math.floor(n / 864e5),
                o = Math.floor(n % 864e5 / 36e5),
                l = Math.floor(n % 36e5 / 6e4),
                i = Math.floor(n % 6e4 / 1e3);
            document.getElementById("timer").innerHTML = a + "days: " + o + "hrs: " + l + "mins: " + i + "secs ", n < 0 && (clearInterval(r), document.getElementById("timer").innerHTML = "EXPIRED")
        }, 1e3)
});
(function($) {
    jQuery(document).ready(function(e) {
        getEvents("event_api/event/");
        // getRequest("testimonial_api/testimonial/");

    });

    function getRequest(what) {
        axios.get("https://admin.triplecfoundation.com.ng/api/" + what + "")
            .then(function(response) {
                console.log(response.data);
                let result = response.data


                var i, j, temparray, chunk = 3;
                for (i = 0, j = result.length; i < j; i += chunk) {
                    temparray = result.slice(i, i + chunk);
                    $(".carousel-indicators").append(' <li data-target=#carousel data-slide-to="' + i + '" ></li>');
                    $(".carousel-indicators:first-child").addClass("active");
                    $(".carousel-inner").append(' <div class="carousel-item"><div class=row ></div><div>')
                    $(".carousel-inner:first-child").addClass("active");

                    temparray.forEach(tes => {
                        console.log("yea")
                    });
                }

                // result.forEach((gal) => {
                //     $("#gallery-row").append('<div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal"><a href="#lightbox" data-slide-to=' + gal.gallery_id + '><img  src="//api.triplecfoundation.com.ng/images/gallery/' + gal.path + '" class="img-thumbnail my-3"></a></div>')
                //     $(".carousel-indicators").append(' <li data-target=#carousel data-slide-to=0 class=active></li>');
                //     $(".carousel-inner").append(' <div class="carousel-item"><img src="//api.triplecfoundation.com.ng/images/gallery/' + gal.path + '" class="w-100" alt=""></div>');
                //     $(".carousel-inner:first-child").addClass("active")

                // });

            })
            .catch(function(error) {
                console.log(error);
            });

    }

    function getEvents(what) {
        axios.get("https://admin.triplecfoundation.com.ng/api/" + what + "")
            .then(function(response) {
                console.log(response.data);
                let result = response.data;


                result.forEach((event, index) => {

                    if (index < 5) {
                        var d = new Date(event.date_of_event);
                        var strArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                        var t = new Date('1970-01-01T' + event.time + 'Z')
                            .toLocaleTimeString({}, { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' });

                        $('#tab-event').append(
                            '<div class="item-event has_post_thumbnail post-373 tp_event type-tp_event status-publish has-post-thumbnail hentry tp_event_category-education tp_event_tag-graphic-design"><div class="event-inner-list"><div class="bg-event-list"></div><div class="event-featured-image-wrap"><div class="event-thumbnail" style="background: url(https://admin.triplecfoundation.com.ng/images/event/' + event.image_url + ') no-repeat center center / cover, #fafafa;"><div class="bt-overlay"></div></div></div><div class="edu-event-date"><div class="edu-event-day"><span>' + d.getDate() + '</span>' + strArray[d.getMonth()] + ', <strong>' + d.getFullYear() + '</strong></div><div class="edu-event-time">' + t + '</div></div><div class="content-entry"><a href="#" class="title-link" title=""><div class="title">' + event.title + '</div></a><div class="venue-empty">' + event.location + '</div></div></div></div>')

                    }

                })




            })
            .catch(function(error) {
                console.log(error);
            });

    }














    $("#feedback").submit((e) => {
        e.preventDefault();
        let what = "feedback_api/feedback/";
        let fb = {};
        fb.name = $("[name='txtName']").val();
        fb.email = $("[name='txtEmail']").val();
        fb.phone = $("[name='txtPhone']").val();
        fb.message = $("[name='txtMsg']").val();
        // console.log(fb)

        postRequest(fb, what);
    })






    function postRequest(data, what) {
        console.log(data)
        $.ajax({
            method: "POST",
            url: "/feedback.php",
            data: data,
            success: function(res) {
                // console.log(res);

                submitData(data, what)
            },
            error: function(err) {
                console.log(err);

            }
        });
    }

    function submitData(data, what) {

        $.ajax({
            method: "POST",
            url: "https://admin.triplecfoundation.com.ng/api/" + what + "",
            data: data,
            dataType: "json",
            async: false,
            cache: false,
            timeout: 30000,
            success: function(res) {
                console.log(res);

                alert(res.message)
            },
            error: function(err) {
                alert(err.message);

            }
        });



    }
}(jQuery));
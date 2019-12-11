(function($) {
    jQuery(document).ready(function(e) {
        getRequest("event_api/event/");
    });

    function getRequest(what) {
        axios.get("https://admin.triplecfoundation.com.ng/api/" + what + "")
            .then(function(response) {
                // console.log(response.data);
                let result = response.data;

                result.forEach((event) => {

                    var d = new Date(event.date_of_event);
                    var strArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var t = new Date('1970-01-01T' + event.time + 'Z')
                        .toLocaleTimeString({}, { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' });

                    const now = new Date();
                    if (now.getMonth() === d.getMonth() || d.getMonth() - now.getMonth() === 1) {
                        $('#tab-happening').append(
                            '<div class="item-event has_post_thumbnail post-373 tp_event type-tp_event status-publish has-post-thumbnail hentry tp_event_category-education tp_event_tag-graphic-design"><div class="event-inner-list"><div class="bg-event-list"></div><div class="event-featured-image-wrap"><div class="event-thumbnail" style="background: url(https://admin.triplecfoundation.com.ng/images/event/' + event.image_url + ') no-repeat center center / cover, #fafafa;"><div class="bt-overlay"></div></div></div><div class="edu-event-date"><div class="edu-event-day"><span>' + d.getDate() + '</span>' + strArray[d.getMonth()] + ', <strong>' + d.getFullYear() + '</strong></div><div class="edu-event-time">' + t + '</div></div><div class="content-entry"><a href="#" class="title-link" title=""><div class="title">' + event.title + '</div></a><div class="venue-empty">' + event.location + '</div></div></div></div>')
                    }

                    $('#tab-upcoming').append(
                        '<div class="item-event has_post_thumbnail post-373 tp_event type-tp_event status-publish has-post-thumbnail hentry tp_event_category-education tp_event_tag-graphic-design"><div class="event-inner-list"><div class="bg-event-list"></div><div class="event-featured-image-wrap"><div class="event-thumbnail" style="background: url(https://admin.triplecfoundation.com.ng/images/event/' + event.image_url + ') no-repeat center center / cover, #fafafa;"><div class="bt-overlay"></div></div></div><div class="edu-event-date"><div class="edu-event-day"><span>' + d.getDate() + '</span>' + strArray[d.getMonth()] + ', <strong>' + d.getFullYear() + '</strong></div><div class="edu-event-time">' + t + '</div></div><div class="content-entry"><a href="#" class="title-link" title=""><div class="title">' + event.title + '</div></a><div class="venue-empty">' + event.location + '</div></div></div></div>')
                })



            })
            .catch(function(error) {
                console.log(error);
            });

    }


}(jQuery));
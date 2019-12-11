(function($) {
    jQuery(document).ready(function(e) {
        getRequest("gallery_api/gallery/");
    });

    function getRequest(what) {
        axios.get("https://admin.triplecfoundation.com.ng/api/" + what + "")
            .then(function(response) {
                // console.log(response.data);
                let result = response.data;
                result.forEach((gal) => {
                    $("#gallery-row").append('<div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal"><a href="#lightbox" data-slide-to=' + gal.gallery_id + '><img  src="//admin.triplecfoundation.com.ng/images/gallery/' + gal.path + '" class="img-thumbnail my-3"></a></div>')
                    $(".carousel-indicators").append('  <li data-target="#lightbox" data-slide-to=' + gal.gallery_id + '></li>');
                    $(".carousel-inner").append(' <div class="carousel-item"><img src="//admin.triplecfoundation.com.ng/images/gallery/' + gal.path + '" class="w-100" alt=""></div>');
                    $(".carousel-inner:first-child").addClass("active")

                });

            })
            .catch(function(error) {
                console.log(error);
            });

    }


}(jQuery));
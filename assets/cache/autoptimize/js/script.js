(function($) {



    $("#contact").submit((e) => {
        e.preventDefault();
        let what = "contact_api/contact/";
        let con = {};
        con.name = $("[name='name']").val();
        con.email = $("[name='email']").val();
        con.subject = $("[name='subject']").val();
        con.comment = $("[name='comment']").val();
        // console.log(con)

        postRequest(con, what);
    })
    $("#subscription").submit((e) => {
        e.preventDefault();
        let what = "news_api/news/";
        let con = {};
        con.email = $("[name='email']").val();

        submitData(con, what);
    })







    function postRequest(data, what) {
        // console.log(data)
        $.ajax({
            method: "POST",
            url: "/form.php",
            data: data,
            success: function(res) {
                // console.log(res);

                submitData(data, what)
            },
            error: function(err) {
                $(".modal-title").text("Error");
                $(".modal-body").text(err);
                $('#alert').modal('show');

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
                // console.log(res);

                // alert(res.message)
                $(".modal-title").text("Success");
                $(".modal-body").text(res.message);
                $('#alert').modal('show');
                location.reload();
            },
            error: function(err) {
                $(".modal-title").text("Error");
                $(".modal-body").text(err.message);
                $('#alert').modal('show');
            }
        });



    }
}(jQuery));
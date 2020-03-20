
$(document).ready(function () {
    // var data = {};
    //
    // data.open = false;
    // data.menu = $(".w-nav-menu");
    // data.links = $(".menu-button.w-nav-button");
    //
    // var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
    //
    // $(".w-icon-nav-menu").click( function () {
    //
    //     if (!data.open) {
    //         //transform: translateY(0px) translateX(0px); transition: transform 400ms ease 0s;
    //         data.menu.css({"transition": "transform 400ms ease 0s"});
    //     }
    //     data.menu.toggleClass("w--nav-menu-open");
    //     data.links.toggleClass("w--open");
    //
    //     if (!data.open) {
    //         data.menu.css({"transform": "translateY(100px)"});
    //     }
    // });

    $("#btn-post-comment").click(function () {
        var commentForm = {
            postId: $("#commentPostId").val(),
            user: $("#commentName").val(),
            content: $("#commentMessage").val()
        };

        $.ajax({
            url: "/comments",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(commentForm),
            success: function (data, textStatus, jqXHR) {
                location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
            }
        });
    })
});
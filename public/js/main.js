$(document).ready(function () {
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
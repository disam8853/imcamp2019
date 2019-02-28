var title = ["營隊介紹", "課程介紹", "營隊流程", "企業參訪"];

$(function() {
    $('#content').pagination({
        dataSource: [1, 2, 3, 4],
        pageSize: 1,
        showPageNumbers: false,
        showNavigator: true,
        prevText: "Previous",
        nextText: "Next",
        callback: function(data, pagination) {
            // template method of yourself
            // dataContainer.html(html);
            $(".page-container").fadeOut(500, function() {
                $(".pages").hide();
                $("#p" + data).show();
                $(this).fadeIn(500);
                $(".text-header h1").text(title[data - 1]);
            });
        }
    })
});
var title = ["營隊介紹", "課程介紹", "營隊流程", "企業參訪", "贊助廠商"];

$(function() {
    var pg = $('#content');
    
    pg.pagination({
        dataSource: [1, 2, 3, 4],
        pageSize: 1,
        showPageNumbers: false,
        showNavigator: false,
        showPrevious: false,
        showNext: false,
        className: 'paginationjs-theme-blue',
        callback: function(data, pagination) {
            $(".page-container").fadeOut(500, function() {
                $(".pages").hide();
                $("#p" + data).show();
                $(this).fadeIn(500);
                $(".text-header").text(title[data - 1]);
            });
            if (data == 1) {
                $("#prev").addClass('disabled').removeClass('waves-effect');
            } else if (data == 4) {
                $("#next").addClass('disabled').removeClass('waves-effect');
            } else {
                $("#prev").addClass('waves-effect').removeClass('disabled');
                $("#next").addClass('waves-effect').removeClass('disabled');
            }

            var lis = $(".pagination li");
            for (var i = 0; i < pagination.totalNumber; i++) {
                if (i == data - 1) {
                    $(lis[i + 1]).addClass('active').removeClass('waves-effect');
                } else {
                    $(lis[i + 1]).addClass('waves-effect').removeClass('active');
                }
            }
        }
    });

    $('#content').pagination('go', 3);

    $("#next").click(function() {
        pg.pagination('next');
    });
    $("#prev").click(function() {
        pg.pagination('previous');
    });
});

function gopage(id) {
    $('#content').pagination('go', id);
}
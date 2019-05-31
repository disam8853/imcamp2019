var title = ["營隊介紹", "課程介紹", "營隊流程", "企業參訪", "贊助廠商"];

$(function() {
  var pg = $('#content');

  pg.pagination({
    dataSource: [1, 2, 3, 4, 5],
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
      } else if (data == 5) {
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

  // $('#content').pagination('go', 3);

  $("#next").click(function() {
    pg.pagination('next');
  });
  $("#prev").click(function() {
    pg.pagination('previous');
  });

  $('.materialboxed').materialbox();

  // table handler
  var className1 = {
    "散落蓋亞": "大地遊戲",
    "時空指引者": "開幕儀式",
    "我思故我在": "Design Thinking",
    "光浮於混沌": "假案",
    "封印的雙手": "必修課程",
    "封印的雙腳": "選修課程",
    "觀測性歸納": "密室逃脫",
    "象牙塔之頂": "企業參訪",
    "拉斯為加薪": "賭場Casino",
    "各自的旅途": "RPG",
    "世界咖啡館": "聊聊資管",
    "最後的祈願": "晚會",
    "聖語編纂": "呈現準備",
    "旅者的覺醒": "小隊呈現",
    "引者的祝福": "結業賦歸"
  };
  var className2 = {
    "大地遊戲": "散落蓋亞",
    "開幕儀式": "時空指引者",
    "Design Thinking": "我思故我在",
    "假案": "光浮於混沌",
    "必修課程": "封印的雙手",
    "選修課程": "封印的雙腳",
    "密室逃脫": "觀測性歸納",
    "企業參訪": "象牙塔之頂",
    "賭場Casino": "拉斯為加薪",
    "RPG": "各自的旅途",
    "聊聊資管": "世界咖啡館",
    "晚會": "最後的祈願",
    "呈現準備": "聖語編纂",
    "小隊呈現": "旅者的覺醒",
    "結業賦歸": "引者的祝福"
  };
  $('td').hover(
    function() {
      $(this).fadeOut(400, function() {
        let ele = $(this)[0];
        ele.innerText = className1[ele.innerText];
        // console.log(ele.innerText);
        $(this).fadeIn();
      });

    },
    function() {
      $(this).fadeOut(800, function() {
        let ele = $(this)[0];
        ele.innerText = className2[ele.innerText];
        // console.log(ele.innerText);
        $(this).fadeIn(2500);
      });
    }
  );
});

function gopage(id) {
  $('#content').pagination('go', id);
}
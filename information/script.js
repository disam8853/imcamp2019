var title = ["營隊介紹", "課程介紹", "營隊流程", "企業參訪"];
var content = ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;傳說在20世紀初期，在美俄太空競賽以前，第一次世界大戰之後，曾經有個跨國的秘密航太組織，他們體會到戰爭的恐怖與無用，所以不斷吸收世界上最聰明的人們，教導他們各種知識，使他們成為世界上一流的科學家。組織的終極目標是到太空中，尋找一顆適合居住的星球，然後移居到那裡，創造一個沒有紛爭的烏托邦。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在多年的研究與觀測之後，他們找到了位於三千萬光年外的藍綠色星球IM-0356，大氣成分與地球相近，是個適合居住的地方，他們打造了一艘太空船，在各項設備確認無虞後便出發了。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由於三千萬光年實在太長，所需時間也太久，所以他們勢必得想其他辦法才能在有生之年到達IM-0356，幸運的是他們在庫伯帶中發現了一個蟲洞，該蟲洞內部的時空曲率和IM-0356所在的星系的時空曲率吻合一致，科學家們相信透過該蟲洞就能連結太陽系與IM-0356所在的星系。",
"",
"",
""
];
$(function() {
    $('#content').pagination({
        dataSource: [1, 2, 3, 4],
        pageSize: 1,
        showPageNumbers: false,
        showNavigator: true,
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
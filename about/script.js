$(document).ready(function() {
    $('.materialboxed').materialbox();

    var images = $('.materialboxed');
    var name = ["召部", "公關", "美宣", "課程", "課程", "資訊", "公關", "隊輔", "器材", "庶務"];
    images.each(function(index) {
        let str = "<div class=\"image-caption\">" + name[index] + "</div>";
        let html = $.parseHTML(str);
        $($(this).parent()).append($(str));
    });

    $(".image-caption").each(function (index) {
    	let instance = M.Materialbox.getInstance(images[index]);

    	$(this).on('click', function (){
    		instance.open();
    	});
    });
});
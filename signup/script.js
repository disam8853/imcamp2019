var stepper = document.querySelector('.stepper');
var stepperInstace = new MStepper(stepper, {
    // options
    firstActive: 0 // this is the default
})
$(document).ready(function() {
    $('select').formSelect();
    $('.nottoomuch').characterCounter();
});


var cols = ["Checked", "name", "gender", "birthday", "ID", "school", "grade", "team", "dietPrefer", "illness", "size", "phone", "fb", "email", "emergency", "relationship", "emPhone", "intro", "motivation", "expection"];
var chin = ["Checked", "名字", "性別", "生日", "身份證字號", "學校", "年級", "類組", "飲食偏好", "特殊疾病", "營服尺寸", "聯絡電話", "facebook", "email", "緊急聯絡人", "關係", "緊急聯絡人電話", "自我介紹", "動機", "期望"]
var skipp = [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var filters = [
    /.*/,
    /.*/,
    /[male, female]{1}/,
    /^[0-9]{4}\/[0-9]{1,2}\/[0-9]{1,2}$/,
    /^[A-Z][1,0][0-9]{8}$/,
    /.*/,
    /.*/,
    /.*/,
    /.*/,
    /.*/,
    /.*/,
    /^[0-9,\-]{5,12}$/,
    /.*www\.facebook\.com\/.*/,
    /.+@.+/,
    /.*/,
    /.*/,
    /^[0-9,\-]{5,12}$/,
    /.*/,
    /.*/,
    /.*/,
    /.*/,
];
var warnmsg = [
    "",
    "",
    "請填入性別",
    "生日請按照 xxxx/xx/xx",
    "身份證字號格式錯誤, Ex:A123456789",
    "",
    "",
    "",
    "",
    "",
    "",
    "聯絡電話格式錯誤, Ex: 0987-654-321",
    "facebook格式錯誤, Ex:www.facebook.com/www.dIsAn",
    "email 格式錯誤, Ex: dOwOb@ntu.im",
    "",
    "",
    "聯絡電話格式錯誤, Ex: 0987-654-321",
    "",
    "",
]
// dirty code
var checker = function(event) {
    var inputs = $('input');
    var labels = $('label');
    if ($('.filled-in').prop('checked') === false) {
        alert("請勾選我同意");
        event.preventDefault();
        return;
    }
    for (var i = 1; i < inputs.length; ++i) {
        if (skipp[i] == 0 && (inputs[i].value === "" || inputs[i].value === null || typeof(inputs[i]) === undefined)) {
            alert(chin[i] + "未填寫");
            event.preventDefault();
            break;
        }
        if (skipp[i] == 0 && inputs[i].value.match(filters[i]) === null) {
            alert(warnmsg[i]);
            event.preventDefault();
            break;
        }
    }
    return;
}

$('form').submit(checker);
var tester = function() {
    var inputs = $('input');
    $('.filled-in').prop('checked', true);
    for (var i = 1; i < inputs.length; ++i) {
        $('input')[i].value = chin[i - 1];
    }
}
var submitter = () => { $('.subbtn').click(); };
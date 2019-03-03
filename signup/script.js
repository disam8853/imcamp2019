var stepper = document.querySelector('.stepper');
var stepperInstace = new MStepper(stepper, {
    // options
    firstActive: 0 // this is the default
})
$(document).ready(function() {
    $('select').formSelect();
    $('.nottoomuch').characterCounter();
});


var cols = ["name", "gender", "birthday", "ID", "school","grade","team", "dietPrefer", "illness", "size", "phone",     "fb", "email", "emergency", "relationship", "emPhone", "intro", "motivation", "expection"];
var chin = ["名字","性別","生日","身份證字號","學校","年級","類組","飲食偏好","特殊疾病","營服尺寸","聯絡電話","facebook","email","緊急聯絡人","關係","緊急聯絡人電話","自我介紹","動機","期望"]
var filters = [];
var checker = function(event) {
    var inputs = $('input');
    var labels = $('label');
    if($('.filled-in').prop('checked') === false) {
        alert("請勾選我同意");
        event.preventDefault();
        return;
    }
    for(var i=1;i<inputs.length;++i) {
        if(inputs[i].value === "" || inputs[i].value === null || typeof(inputs[i]) === undefined) {
            alert(chin[i]+"未填寫");
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
    for(var i=1;i<inputs.length;++i){
        $('input')[i].value = chin[i-1];
    }
}
var submitter = () => {$('.subbtn').click();};
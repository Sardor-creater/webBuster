var input = $("#productName")
var buttons = $(".link_popup")
// var input = document.getElementById('productName')
// var buttons = document.getElementsByClassName('link_popup')

function processEvent(event) {
    input.val($(this).closest("div").find('.card-title').html())
    // console.log($(this).closest("div").find('.card-title').html());
    // input.value = this.closest("div").querySelector('.card-title').innerHTML;
    event.preventDefault()
}

for (var i = 0; i < buttons.length; i++) {
    buttons.on("click",processEvent)
    // buttons[i].addEventListener('click', processEvent)
}

$("#sendMail").on("click", function (){
    var name = $("#name").val()
    var phone = $("#phone").val()
    var productName = $("#productName").val()

    if (name == '' || phone == ''){
        $('#errMessage').text('Пожалуйста заполните все поля')
        return false;
    }
    $.ajax({
        url:'mail.php',
        type:'POST',
        cache:false,
        data:{name, phone, productName},
        dataType:'html',
        success:function (data) {
            alert(data);
        }
    })
});
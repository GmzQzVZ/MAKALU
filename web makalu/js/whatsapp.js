$(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_email');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '573229520608',
    walink2 = 'hola, mucho gusto mi nombre es:',
    text_yes = 'Enviado.',
    text_no = 'Complete todos los formularios y luego haga clic en Enviar.';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_select1 = $("#wa_select :selected").text(),
    input_name1 = $("#wa_name").val(),
    input_email1 = $("#wa_email").val(),
    input_number1 = $("#wa_number").val(),
    input_adult1 = $("#wa_url").val(),
    input_children1 = $("#wa_url").val(),
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    '*Name* : ' + input_name1 + '%0A' +
    '*Email Address* : ' + input_email1 + '%0A' +
    '*Select Option* : ' + input_select1 + '%0A' +
    '*Input Number* : ' + input_number1 + '%0A' +
    '*Adultos* : ' + input_adult1 + '%0A' +
    '*Niños* : ' + input_children1 + '%0A' +
    '*Description de la Cotización* : ' + input_textarea1 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});
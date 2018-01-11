$( document ).ready(function() {
$('#btnsubmit').click(function(event){
	var target = $('input[name="nome"]');
	var target2 = $('input[name="mail"]');
	var target3 = $('input[name="obs"]');
	var target4 = $('input[name="nm"]');
	var valid = validatepreenchido(target, target2, target3, target4);
	var valid2 = validatenum(target4);
	var valid3 = validatemail(target2)
	if(valid3 == true && valid2 == true && valid == true) {
		alert('Submetido com sucesso');
		location.reload();
	}
	else if (valid !== true)
		{
			alert(valid)
		}
 else if (valid2 !== true)
 		{
	  	alert(valid2)
		}
		else if (valid3 !== true)
		{
			alert(valid3);
	  }
		else
		{
			alert('Submetido com sucesso');
			location.reload();
		}
 event.preventedDefault();})

function validatepreenchido(texto1, texto2, texto3, texto4){
	if ((texto1.val() == '') || (texto2.val() == '') || (texto3.val() == '') || (texto4.val() == '')) {
		return ('Todos os campos são obrigatórios');}
		else return true;
}

function validatenum(num) {
	           var er = /[^0-9.]/;
	           er.lastIndex = 0;
						 if (er.test(num.val()))
						 {
	           	num.val("");
				 		 	return ('O campo "Telefone" aceita somente numeros');
						 }
	           else if (num.val().length != 9)
						 {
 							num.val("");
 						 	return ('O número de Telefone tem de ter 9 dígitos')
 						 }
						 	else return true;}

function validatemail(mail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mail.val().match(mailformat))
	{
	return true;
	}
	else
	{
	mail.val("");
	return ('Email inválido');
	}
	}
});
/*
$(document).ready(function() {
        var imageLinks = $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]');
        if (imageLinks.children('img').length) {
            imageLinks.children('img').each(function() {
                var currentTitle = $(this).attr('title');
                $(this).attr('title', currentTitle + ' (click to enlarge image)');
            });
            imageLinks.click(function(e) {
                e.preventDefault();
                $(this).children('img').toggleClass('expanded');
            });
        }
    });
*/
$(function() {
    	$('img').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
});

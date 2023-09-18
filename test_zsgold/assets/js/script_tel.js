"use strict"

document.addEventListener('DOMContentLoaded', function(){
 const forma = document.getElementById('form_time_phone');
 forma.addEventListener('submit', formSend);


 async function formSend(e) {
 	e.preventDefault();

 	let error = formValidate(forma);

 	let formData = new FormData(forma);


 	if(error===0){
 		forma.classList.add('_sending');
 		let response = await fetch('sendmail.php', {
 			method: 'POST', 
 			body: formData
 		});
 		if (response.ok) {
 			let result = await response.json();
 			alert(result.message);
 			formPreview.innerHTML = '';
 			forma.reset();
 			forma.classList.remove('_sending');
 		} else {
 			alert('Ошибка');
 			forma.classList.remove('_sending');
 		}

 	}else{
 		alert('Заполните обязательные поля');
 	}
 }

 function formValidate(forma){
        let error = 0;
        let formReq = document.querySelectorAll('._req');


        for (let index = 0; index < formReq.length; index++){
        	const input = formReq[index];

        	if(input.classList.contains('_email')){
        		if(emailTest(input)){
                    formAddError(input);
                    error++;
                }

        	}
        	else{
                if (input.value === ""){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
 }

 function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error")
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    

});
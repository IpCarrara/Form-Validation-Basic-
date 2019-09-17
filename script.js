	//Form Validation//	
		
			var emailValido;
			var telefoneValido;
			var senhaValida;
			
			//Validando E-mail//
			
			function isEmail(email) {
			  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			  return regex.test(email);
			}
			
			$(document).ready(function(){
				$('#email').on('input', function() {
					if (isEmail($("#email").val()) == false){
						$("#emailErro").html("<p>O E-mail não está correto </p>");
						$("#email").css("borderColor", "gray");
						if ($("#email").val() == "") {
						$("#emailErro").html("");
						}
					}
					else {
						$("#email").css("borderColor", "#32CD32");
						$("#emailErro").html("");
						emailValido = true;
					}
				})
			});
				
			//Validando Telefone//
			
			$(document).ready(function() {
				$("#telefone").on("input", function(){
					var phone = $("#telefone").val(),
						intRegex = /[0-9 -()+]+$/;
					if((phone.length < 11) || (!intRegex.test(phone)))
					{
						$("#telefoneErro").html("<p> O telefone não está correto </p>");
						$("#telefone").css("borderColor", "gray");
						if ($("#telefone").val() == ""){
						$("#telefoneErro").html("");
						}
					}
					else{
						$("#telefone").css("borderColor", "#32CD32");
						$("#telefoneErro").html("");
						telefoneValido = true;
						}
				})
			});
			
			//Validando Senha//
			
			$(document).ready(function() {
				$("#senhaConfirmar").on("input", function(){
					if ($("#senha").val() != $("#senhaConfirmar").val()){
						$("#senhaErro").html("<p> As senhas não conferem </p>");
						$("#senha").css("borderColor", "gray");
						$("#senhaConfirmar").css("borderColor", "gray");
						if ($("#senhaConfirmar").val() == ""){
							$("#senhaErro").html("");
						}
				}
					else {
						$("#senhaConfirmar").css("borderColor", "#32CD32");
						$("#senha").css("borderColor", "#32CD32")
						$("#senhaErro").html("");
						senhaValida = true;
					}
				})
			});
			
			//Botao enviar//
			
			$("#button").click(function(){
				
				if ($("#email").val() == "") {
					$("#email").css("borderColor", "red");
				}
				
				if ($("#telefone").val() == "") {
					$("#telefone").css("borderColor", "red");
				}
				
				if ($("#senha").val() == "") {
					$("#senha").css("borderColor", "red");
				}
				
				if ($("#senhaConfirmar").val() == "") {
					$("#senhaConfirmar").css("borderColor", "red");
				}
				else {
					if ($("#senha").val() != "" 
						&& $("#senhaConfirmar").val() != "" 
						&& $("#telefone").val() != "" 
						&& $("#email").val() != "" 
						&& emailValido == true
						&& telefoneValido == true
						&& senhaValida == true){
							alert("Inscrição confirmada!");
					}
				}
					
			});
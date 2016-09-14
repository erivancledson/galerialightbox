$(function(){
          //a. seleciona links que tem a classe galeria
	$('a.galeria').bind('click', function(){
            //quando eu clicar ele vai pegar a imagem e pega o caminho dela
		var img = $(this).find('img').attr('src');

		$('.divbox img').attr('src', img);
		$('.bgbox, .divbox').fadeIn('fast');
	});
          //efeito de fechar a imagem grande clicando ou no botão fechar ou na lateral dela
	$('.bgbox, .divbox button').bind('click', function(){
		$('.bgbox, .divbox').fadeOut('fast');
	});

});
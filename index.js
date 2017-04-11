$(document).ready(function()
	{
		//MENU HAMBURGUESA
		var $botonmenu = $("#botonmenu");
		var $menu = $("#menu");

		$botonmenu.click(function()
		{
			$menu.toggleClass("menuactivo");

		})

		$botonmenu.on("tap", function()
		{
			$menu.toggleClass("menuactivo");

		})

		//TRATAMIENTOS
		var $titulosH4 = $(".articulos h4");
		
		$titulosH4.click(function()
		{
			var $parrafo =$(this).next("p");
			//selecciona el siguiente elemento del boton en q se este ejecutando la funcion clic
			desplegarTexto($parrafo);
		})

		$(".leerMas").click(function()
		{
			
			
			console.log(   $(this).css("display")   );
			var $parrafo =$(this).prev("p");
			
			//selecciona el siguiente elemento del boton en q se este ejecutando la funcion clic
			desplegarTexto($parrafo);
		
		})

		function desplegarTexto(parrafo)
		{
			if (parrafo.css("display")=="none") 
			{
				parrafo.slideDown(250);	
				parrafo.next("span").html("Ocultar")
			}
			else
			{
				parrafo.slideUp(250);	
				parrafo.next("span").html("Leer mas...")
			}
			
			parrafo.toggleClass("parrafovisible");
		}


	})
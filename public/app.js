function something()
	{
		var x = window.localStorage.getItem('bbb');		// x = hh{'bbb'}

		x = x*1 + 1;									// x = x + 1, х*1 - преобразование строкового типа в численный

		window.localStorage.setItem('bbb', x);

		alert(x);
	}


function add_to_cart(id)
	{
	alert('You added pizza with id = ' + id);
	}

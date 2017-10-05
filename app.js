var number = /^\d*$/;// variable para representar solo numeros

function isValidCard(numberForCard){ // funcion para ingresar datos de tarjeta
	do{ // quiero que se ejecute el promt
		var numberForCard = prompt("Ingrese su número de tarjeta"); // pido ingresar los datos
		

		//si el campo esta vacio o ingresa un dato que no sea un numero.
        if(numberForCard === "" || numberForCard.search(number)){
            alert("solo puede ingresar numeros");
            continue;

        } 

// numero para aplicar agoritmo de luhn
	
  		var newArrayNumber = [] // RECIBE NUEVO ARRAY INVERTIDO
        //for para poner los numeros en un array y pasarlos a number
        for(var i=0; i< numberForCard.length; i++){
            newArrayNumber.push(parseInt(numberForCard[i]));
        }
        //revierto el array
        var reverseArray = newArrayNumber.reverse();

  		 //variables
        var sumTotal = 0;//variable que sumará las cifras
        var cont = 1;//contará cada vez que se ejecute un ciclo
        var posPar = [];//guardará los numeros que deben ser multiplicados por 2
        var posImpar = [];//guardará los numeros que no se deben multiplicar
        
        //for para recorrer el nuevo array "newArrayNumber" y comenzar a validar
        for(var j=0; j<newArrayNumber.length; j++){
            //si el contador es impar
            if(cont%2!==0){
                //agrego los numeros al array "posImpar"
                posImpar.push(newArrayNumber[j]);
            }else{
                //si no, los multiplico por 2 y los agrego al array "posPar"
                posPar.push(newArrayNumber[j]*2);
            }
            cont++;
        }
        //el arreglo "posPar" lo uno con un join y luego separo las cifras con split
        posPar = posPar.join("").split("");
        arrFinal = posPar.concat(posImpar);//junto a los 2 array en uno
        for(var k=0; k<arrFinal.length; k++){//sumo todas las cifras y le calculo el resto
            sumTotal += (arrFinal[k]%10);
        }
        sumTotal = sumTotal%10;//al total le calculo el resto
        if(sumTotal===0){//si es 0
            return alert("la tarjeta es valida");
        }else{
            return alert("la tarjeta es invalida");
        }

  	
 	// for que recorra los pares (parte de 1 para que en el index parta del par)

	
	} while (numberForCard == "" || numberForCard.test(number) == false);// pero si no es numero y si esta vacio retorna el do
}
isValidCard();
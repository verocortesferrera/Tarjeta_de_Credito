var number = /^\d*$/;// variable para representar solo numeros

function isValidCard(numberForCard){ // función para ingresar datos de tarjeta
	do{ // quiero que se ejecute el promt
		var numberForCard = prompt("Ingrese su número de tarjeta"); // pido ingresar los datos
		

		//si el campo esta vacio o ingresa un dato que no sea un numero.
        if(numberForCard === "" || numberForCard.search(number)){
            alert("solo puede ingresar numeros");
            continue;

        } 

        //Aplicar agoritmo de luhn
	
  		var newArrayNumber = [] // RECIBE NUEVO ARRAY INVERTIDO que creare con el for
        //for para poner los numeros en un array y pasarlos a number
        for(var i = 0; i < numberForCard.length; i++){
            newArrayNumber.push(parseInt(numberForCard[i]));// agrego con un push el arreglo transformado a numero con el parse Int
        }
        
        var reverseArray = newArrayNumber.reverse();//invierto el array para crear el algoritmo de luhn

  		 //variables para el algoritmo
        var sumTotal = 0;//variable que sumará las cifras
        var cont = 1;//contará cada vez que se ejecute un ciclo y parta del index 1 (posición par del index)
        var posPar = [];//guardará los numeros que deben ser multiplicados por 2
        var posImpar = [];//guardará los numeros que no se deben multiplicar
        
        //for para recorrer el nuevo array "newArrayNumber" y comenzar a validar
        for(var j = 0; j < newArrayNumber.length; j++){
            
            if(cont % 2 !== 0){ //si el contador es impar
                posImpar.push(newArrayNumber[j]); //agrego los numeros al array "posImpar"

            }else{      
                posPar.push(newArrayNumber[j]*2); //si no, los multiplico por 2 y los agrego al array "posPar"
            }
            cont++; // de la posicion 1 en adelante revisar el array segun el algoritmo LUHN
        }
    
        posPar = posPar.join("").split("");//ingreso a la variable el arreglo "posPar" lo uno con un join y luego separo las cifras con split en un arreglo
        arryFinal = posPar.concat(posImpar);//junto a los 2 array en uno nuevo array creado en esta linea

        for(var k = 0; k < arryFinal.length; k ++){ //sumo todas las cifras y le calculo el resto
            sumTotal += (arryFinal[k]%10); // dividio por 0 es la formula para comprobar que es valida
        }

        sumTotal = sumTotal%10; //al total le calculo el resto

        if(sumTotal === 0){ //si es 0
            return alert("Tarjeta es valida");
        }else{ //si es distinto de 0
            return alert("Tarjeta es invalida");
        }
	
	} while (numberForCard == "" || numberForCard.test(number) == false);// pero si no es numero y si esta vacio retorna el do
}

isValidCard(); // activo la función
# Tarjeta de Credito
##### Versión `0.0.1`

## Seudo Coódigo

Inicio validCar
    Mientras
        variable askUser, arrNumber, validNum
            para askUser = dato usuario
            para arrNumber = array vacío
            para validNum = expresion que valida si son números
        
        Si dato != "" y es número
            true
                Para i = 0 hasta el largo de dato
                    i++
                        ingresar a array vacio
            variables reverseArray, totalSum, count, par, impar, final Array
                para reverseArray = invierto array vacio
                para totalSum = sumará cifras
                para count = cuenta cuando se ejecuta un ciclo
                para par = array vacio que contiene multiplicacion por 2
                para impar = array vacio que contiene numeros no multiplicados
                para finalArray = junto 2 array en uno
            Para j = 0 hasta el largo de reverseArray
                j++
                    Si count impar
                        agregar numeros al array impar
                        Si no 
                            agregar numeros al array par y multiplico por 2
                        contar 1 en 1
            par = junto array y separo las cifras
            finalArray = junto array par e impar
            Para x = 0 hasta el largo del nuevo array
                x++
                    sumo cifras y calculo resto %10
            totalSum % 10 al total le calculo el resto
            Si totalSum = 0
                "Tarjeta válida"
                Si no 
                    "Tarjeta inválida"
        Si no
            "Ingrese parámetro válidos"
    Fin Mientras 
        Si dato == "" y no es un número
            false
    validCard

## Flujo de Diagrama

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](http://subirimagen.me/uploads/20171005085209.png)

###### Quinto Elemnto JIJIJI S.A.
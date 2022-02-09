var filas = 4;
var columnas = 8;

function matrizPrincipal(filas, columnas){ //Matriz madre/
    var filas = filas;
    var columnas = columnas;

    var matriz = [];
    var matrizVecinos = [];

    for(let y=0;y<filas;y++)
    {

        var matrizInterna = [];
        var matrizInternaVecinos = [];
        for(let x=0;x<columnas;x++)
        {
            var num = Math.round(Math.random() * (10 - 1)) + 1;
            var cell;
            if(num%2==0){
                cell = " . ";
                matrizInterna.push(cell);

            }
            else{
                cell = " * ";
                matrizInterna.push(cell);
            }

            cell = 0;
            matrizInternaVecinos.push(cell);
        }
        matriz.push(matrizInterna);
        matrizInterna.splice();

        matrizVecinos.push(matrizInternaVecinos);
        matrizInternaVecinos.splice();

    }
    for(let y=0;y<filas;y++){
        console.log(matriz[y].join(""));
    }

    for(let y=0;y<filas;y++){
        console.log(matrizVecinos[y].join(""));
    }

    recorrerMatriz(matriz,matrizVecinos);
    
    matrizRules(matriz,matrizVecinos);
    return matriz;
}

function recorrerMatriz(matriz, matrizVecinos)
{
    var contarVecinos = 0;
    for(let y=0;y<filas;y++)
    {
        for(let x=1;x<=columnas;x++)
        {

            if(matriz[y][x] == ' * ')
            {
                //contarVecinos = contarVecinos + 1;
                console.log(matrizVecinos[0][0])
                console.log(matrizVecinos[0][0+1])
                console.log(matrizVecinos[0][1]);

                contarVecinos = matrizVecinos[y][x+1]; 
                matrizVecinos[y][x-1] = contarVecinos;
            } // Nos faltó agregar otro ciclo para recorrer en otras direcciones, .map + function()
        }
    }
    for(let y=0;y<filas;y++){
        console.log(matrizVecinos[y].join(""));
    }
}

function matrizRules(matriz, matrizVecinos) //Reglas
{
    var cell;
    var matrizInternaFinal = [];
    var matrizFinal = [];

    for(let y=0;y<columnas;y++)
    {
        for(let x=0;x<filas;x++)
        {
          console.log(matrizVecinos[y][x]);
          console.log(matrizVecinos[y][x] == 1);
            if((matriz[y][x]) == " * ")
            {
                if(matrizVecinos[y][x] <2 || matrizVecinos[y][x] >3)
                {
                    cell = " . ";
                    matrizInternaFinal.push(cell);
                } // Regla 1 y 2
                else if(matrizVecinos[y][x] == 2 || matrizVecinos[y][x] == 3)
                {
                    cell = " * ";
                    matrizInternaFinal.push(cell);
                } // Regla 3
                else{
                    console.log("hay un error")   
                    }
            }
            else if((matriz[y][x]) == " . ")
            {
                if(matrizVecinos[y][x] == 3)
                {
                    cell = " * ";
                    matrizInternaFinal.push(cell);
                    // Regla 4
                }
            }
            else{
                console.log("entrando al else")
            }

        }

        matrizFinal.push(matrizInternaFinal);
        matrizInternaFinal.splice();
    }
    return matrizFinal;
}
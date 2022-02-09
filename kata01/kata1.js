var filas = 4;
var columnas = 8;

function Celula(id, fila, columna){
    return {
        id : id,
        fila : fila,
        columna : columna
    }
}

function matrizPrincipal(filas, columnas){
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

function matrizRules(matriz, matrizVecinos)
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


/*Cualquier célula viva con menos de 2 vecinos vivos muere
  Cualquier célula viva con más de 3 vecinos muere  ()
  Cualquier célula viva con 2 o 3 vecinos vivos vive
  Cualquier célula con 3 vecinos vivos vive

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.
*/
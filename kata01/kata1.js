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
            
            cell = " 0 ";
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
    return matriz, matrizVecinos;
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
                contarVecinos = matrizVecinos[y][x]  + 1; 
                matrizVecinos[y][x-1] = contarVecinos;
            }
        }
        //console.log(matriz[y].join("-")); //a-a-a =aaa matriz[y][x]más de 
    }
    for(let y=0;y<filas;y++){
        console.log(matrizVecinos[y].join(""));
    }
}



//Cualquier célula viva con menos de 2 vecinos vivos muere  
//Cualquier célula viva con más de 3 vecinos muere  ()
//Cualquier célula viva con 2 o 3 vecinos vivos vive 
//Cualquier célula con 3 vecinos vivos vive 
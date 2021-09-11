let LimiteSup, LimiteInf, Valor, MargenError;

function Punto(Estimacion1, Estimacion2, Estimacion3, Estimacion4){

    let Res;
    let Ite = 0;

    let LimiteSup = Estimacion1;
    let LimiteInf = Estimacion2;

    let E_May = Estimacion3+Estimacion4;
    let E_Men = Estimacion3-Estimacion4;

    while (true) 
    {
        Res = ((LimiteSup + LimiteInf)/2);
        Ite++;

        document.getElementById('ite').innerHTML = `Iteraciones: ${Ite}`;
        document.getElementById('resul').innerHTML = `Valor: ${Res.toFixed(2)}`;

        if(Res >= E_Men && Res <= E_May) return true
        
        if(Res < Estimacion3){
            LimiteInf = Res;
        }
        else{
            LimiteSup = Res;
        }
    } 
} 

function Datos(){
    
    LimiteSup = parseFloat(document.getElementById('LimiteSup').value);
    LimiteInf = parseFloat(document.getElementById('LimiteInf').value);
    Valor = parseFloat( document.getElementById('Valor').value);
    MargenError = parseFloat( document.getElementById('MargenError').value);
    console.log(LimiteSup, LimiteInf, Valor, MargenError);

    Punto(LimiteSup, LimiteInf, Valor, MargenError);
}
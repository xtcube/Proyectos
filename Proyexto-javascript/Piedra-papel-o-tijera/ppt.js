var opciones = [0, 1, 2];
var contadorW = 1;
var eleccionMaquina;
var empate = 1;
var contadorL = 1;

function aleatorio(min, max){
    var numero = Math.floor(Math.random()* (max - min +1)+min);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);

    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel 
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
            document.getElementById('maquina').innerText = contadorL;
            contadorL = contadorL + 1;
            var node = document.createElement("p")
            var textnode = document.createTextNode("La maquina eligio papel y tu piedra.")
            node.appendChild(textnode);
            document.getElementById("historial").appendChild(node);
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
                document.getElementById('usuario').innerText = contadorW;
                contadorW = contadorW + 1;
                var node = document.createElement("p")
                var textnode = document.createTextNode("La maquina eligio tijera y tu piedra.")
                node.appendChild(textnode);
                document.getElementById("historial").appendChild(node);
            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                    document.getElementById('empate').innerText = empate;
                    empate = empate + 1;
                    var node = document.createElement("p")
                    var textnode = document.createTextNode("Ambos eligieron piedra.")
                    node.appendChild(textnode);
                    document.getElementById("historial").appendChild(node);
                }
            }
        }
    }
    if(eleccionUsuario == 1){//el usuario eligio papel 
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
            document.getElementById('maquina').innerText = contadorL;
            contadorL = contadorL + 1;
            var node = document.createElement("p")
            var textnode = document.createTextNode("La maquina eligio tijera y tu papel.")
            node.appendChild(textnode);
            document.getElementById("historial").appendChild(node);
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
                document.getElementById('usuario').innerText = contadorW;
                contadorW = contadorW + 1;
                var node = document.createElement("p")
                var textnode = document.createTextNode("La maquina eligio piedra y tu papel.")
                node.appendChild(textnode);
                document.getElementById("historial").appendChild(node);
            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                    document.getElementById('empate').innerText = empate ;
                    empate = empate + 1;
                    var node = document.createElement("p")
                    var textnode = document.createTextNode("Ambos eligieron papel.")
                    node.appendChild(textnode);
                    document.getElementById("historial").appendChild(node);
                }
            }
        }
    }
    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
            document.getElementById('usuario').innerText = contadorW;
            contadorW = contadorW + 1;
            var node = document.createElement("p")
            var textnode = document.createTextNode("La maquina eligio papel y tu tijera.")
            node.appendChild(textnode);
            document.getElementById("historial").appendChild(node);
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
                document.getElementById('maquina').innerText = contadorL;
                contadorL = contadorL + 1;
                var node = document.createElement("p")
                var textnode = document.createTextNode("La maquina eligio piedra y tu tijera.")
                node.appendChild(textnode);
                document.getElementById("historial").appendChild(node);
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                    document.getElementById('empate').innerText = empate ;
                    empate = empate + 1;
                    var node = document.createElement("p")
                    var textnode = document.createTextNode("Ambos eligieron tijera.")
                    node.appendChild(textnode);
                    document.getElementById("historial").appendChild(node);
                }
            }
        }
    }
    document.getElementById('efecto').style.display = "";
    }
    function quitarEfecto() {
        document.getElementById('efecto').style.display = "none";
   }
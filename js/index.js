/*for (let i = 1; i <= 6; i++) {
    let corazon = document.getElementById(`cor${i}`);
    corazon.onclick = function() {
        let contador = document.getElementById(`span${i}`);
        contador.innerHTML++;
    }
}*/
var corazones=document.getElementsByClassName("fa-heart")
for (let index=0; index <corazones.length; index++){
    var element= corazones[index]
    element.onclick=function(c){
        var cont=c.target.nextElementSibling
        cont.innerHTML++
    }
}
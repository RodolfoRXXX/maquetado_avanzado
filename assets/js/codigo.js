function portfolio(e){
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("capa").style.display = "flex";
    document.getElementById("video").play();
}

function cerrar(){
    document.getElementById("capa").style.display = "none";
}

function pausar(){
    document.getElementById("video").pause();
}

function reproducir(){
    document.getElementById("video").play();
}

function uno(){
    document.getElementById("video").src = "assets/imagenes/video1.mp4";
}

function dos(){
    document.getElementById("video").src = "assets/imagenes/video2.mp4";
}
console.log(location.search)
// lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtImagen").value = decodeURIComponent(parts[1][1])
document.getElementById("txtTitulo").value = decodeURIComponent(parts[2][1])
document.getElementById("txtDescription").value = decodeURIComponent(parts[3][1])
document.getElementById("txtSpotify").value = decodeURIComponent(parts[4][1])
document.getElementById("txtYoutube").value = decodeURIComponent(parts[5][1])
 
function modificar() {
    let id = document.getElementById("txtId").value
    let i = document.getElementById("txtImagen").value
    let t = document.getElementById("txtTitulo").value
    let d = document.getElementById("txtDescription").value
    let s = document.getElementById("txtSpotify").value
    let y = document.getElementById("txtYoutube").value
    

    let playlist = {
        image: i,
        name: t,
        preview: d,
        spotify: s,
        youtube: y
        
    }
    let url = "https://sabin.pythonanywhere.com/playlists/"+id
    var options = {
        body: JSON.stringify(playlist),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
   
 
}

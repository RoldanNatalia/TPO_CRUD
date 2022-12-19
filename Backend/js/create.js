function guardar() {
 
    let t = document.getElementById("txtTitulo").value
    let i = document.getElementById("txtImagen").value
    let d = document.getElementById("txtDescription").value
    let s = document.getElementById("txtSpotify").value
    let y = document.getElementById("txtYoutube").value
    
    let producto = {
        name:t,
        image:i,
        preview:d,
        spotify:s,
        youtube:y
        
    }
    let url = "https://sabin.pythonanywhere.com/playlists"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
   
    
}


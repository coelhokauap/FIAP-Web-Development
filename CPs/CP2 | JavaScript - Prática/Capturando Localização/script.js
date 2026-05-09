// Localiza
const btn_localizar = document.getElementById("localiza");
btn_localizar.addEventListener("click", () => {
  // Função Para Exivir a Posição
  function show_position(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log("Latitude: " + latitude + "Longitude: " + longitude);
  }
  let coordenadas = navigator.geolocation.getCurrentPosition(show_position);
});

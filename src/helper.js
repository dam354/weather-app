navigator.geolocation.getCurrentPosition(function(position) {
  position.coords.latitude, position.coords.longitude;
  console.log(
    ' position.coords.latitude, position.coords.longitude',
    position.coords.latitude,
    position.coords.longitude
  );
});

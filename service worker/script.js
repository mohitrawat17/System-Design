if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((res) => console.log(res,'Registered'))
    .catch((err) => console.log(err,'Error'));
}

const CACHE_V1 = "service-worker/v2";

self.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open(CACHE_V1).then((cache) => {
      cache.add("./sw.html");
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntill(
    caches.keys().then((keyList) => {
        console.log(keyList)
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_V1) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    //fetching data
    fetch(event.request)
      .then((res) => {
        //adding response on cache
        const cloneData = res.clone();
        caches.open(CACHE_V1).then((cache) => {
          cache.put(event.request, cloneData);
        });

        // returning response
        return res;
      })
      // return data from cache if network fails
      .catch(() => caches.match(event.request).then((res) => res)),
  );
});

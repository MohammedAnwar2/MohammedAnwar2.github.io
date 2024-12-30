'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "231c2e4ce299f6ee458cc9982ed6fa94",
"assets/AssetManifest.bin.json": "4c2a88f2afd35508c170cf9796285c6b",
"assets/AssetManifest.json": "d8764e2ebf7cff41713d15039d0b8363",
"assets/assets/file/my_cv.pdf": "7a9307ad57db43e9fc6ae5b22c351b72",
"assets/assets/fonts/IBMPlexMono-Medium.ttf": "3594148d0a094b10fc8e21ae7aaef7d9",
"assets/assets/fonts/IBMPlexMono-Regular.ttf": "ea96a0afddbe8ff439be465b16cbd381",
"assets/assets/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/images/1.png": "146b4134ba921db86330b93d9cef868d",
"assets/assets/images/2.png": "684ecd7e3da3fc11351f3e8d4ae7e383",
"assets/assets/images/3.png": "4b898bc5a435321cd900291948ae110c",
"assets/assets/images/4.png": "aca5e36ed3ce352b1f2873a101a8c4c3",
"assets/assets/images/5.png": "6e23bbf2f04b1c6e9bdcd845a8166303",
"assets/assets/images/about_me.png": "39315ef59d6b41ff67577cacb1f88995",
"assets/assets/images/about_me_background.png": "0ddd613c04cd5a53925c1b763534282e",
"assets/assets/images/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/database.png": "6edd78fce2b2eb6d019f2046dfed2f4d",
"assets/assets/images/firebase.png": "dae7f44af6bf5c3f4b6eeb4d65eb2bde",
"assets/assets/images/flutter.png": "83e0b762778417141075bba73510d371",
"assets/assets/images/github.png": "47c3cf2e8544bd7dc4fe9d652eb9aef3",
"assets/assets/images/google_maps.png": "fd79a17cbf46b5059ec5f3c7d553f0f5",
"assets/assets/images/icon-briefcase.svg": "9b8b99ec824ec416123e56a9a0a9546e",
"assets/assets/images/icon-download.svg": "2d143d9d5214db6d4935d83de0b1f769",
"assets/assets/images/icon-instagram.svg": "c4e04289d80d292acd199f4f264af0b0",
"assets/assets/images/icon-link.svg": "b4cabcd23928267307369b3a3b3ea81b",
"assets/assets/images/icon-mail.svg": "0c496d7ebd0722a264b517e441c0df25",
"assets/assets/images/icon-map-pin.svg": "b582b1e00dcbbd872bd5e5c2008db198",
"assets/assets/images/icon-monitor.svg": "e1f98ab5ca2d3f94539e303dc00f0f74",
"assets/assets/images/icon-send.svg": "4f4a92ac888c19fa7cfd375fac48fdfd",
"assets/assets/images/icon-smartphone.svg": "3be957bf1ebbd11bcf0f8cd4e7017b8c",
"assets/assets/images/icon_discord.svg": "549e12fc2114719b9c7aac0bd0ecff3e",
"assets/assets/images/icon_github.svg": "106b01ae9d7a43a2fa4acea89283dc0e",
"assets/assets/images/json.png": "1ed6905a0b29a3eef627ad56df6cbb14",
"assets/assets/images/line.svg": "185cc389e8350981c471600c73bb0a2d",
"assets/assets/images/linkedin.png": "6c129dc56be294ceea1749affb19d09d",
"assets/assets/images/loading.gif": "79ffa0ef3b09c2a0245180d5e5967a49",
"assets/assets/images/module_title.svg": "45da039bc3df95c9ed7459c2a80dfdef",
"assets/assets/images/mvvm.png": "0dc8dda0659a235f1907aa8185d487d4",
"assets/assets/images/payment.png": "0ce7725379bd537a8b50f7033a0861bf",
"assets/assets/images/php.png": "3faea63afe7015af0fedd5ccc3a2e707",
"assets/assets/images/postman.png": "73bb49edb42db9daf6cb32614e970ef4",
"assets/assets/images/profile_image.svg": "879e91d8f3bfb7b664428f2f97ce1d11",
"assets/assets/images/profile_photo.svg": "64c86815256beba6f54eabb586aa93ad",
"assets/assets/images/project1.svg": "0ddcbd88dc1dc7892a23232fe3e96896",
"assets/assets/images/project_app1.svg": "a0764015a2c2e411383fd57173b2ec16",
"assets/assets/images/project_app2.svg": "27d750da65e2e3d5fa69c5d08b74989c",
"assets/assets/images/project_app3.svg": "b8e9c1856774e258d49748aca59f6933",
"assets/assets/images/project_app4.svg": "aee1a2df366600f4bfbe620ac96c0fcc",
"assets/assets/images/project_app5.svg": "2035f137fb015346183303501df8c3ad",
"assets/assets/images/skils_background.png": "55bbaef6f0f870ed012a7bd4600ecafd",
"assets/assets/images/whatsapp.png": "4c0a7f4df4651860a22ecc22836e24c0",
"assets/assets/images/works_background.png": "1a5babeccbb8a42e1cf1b29c46d1d668",
"assets/custom_loading.json": "3c413a8999d3a34543fb8d8d0cfc70c4",
"assets/FontManifest.json": "bf53eefda539c07618e79a7d388e76f1",
"assets/fonts/MaterialIcons-Regular.otf": "1d24117c7161963c9301292380ad7a08",
"assets/loading.gif": "79ffa0ef3b09c2a0245180d5e5967a49",
"assets/NOTICES": "3140a48a2fd43f80872b4b1928d8c104",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "89c3da3dece2625ab05384d1973b2bfc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d645b78912b38022e6d307437c9178de",
"/": "d645b78912b38022e6d307437c9178de",
"main.dart.js": "930e531baedb033aab47047bd0c87438",
"manifest.json": "9cc5002128a3005bf4b0f4c1afba1651",
"version.json": "2a4bdd3370ee966319e180d97d91e050"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

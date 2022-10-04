'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4a0274494e8c2c68d44de99b9be70d37",
"index.html": "9f1de549e96d25604ecebdcb9d136900",
"/": "9f1de549e96d25604ecebdcb9d136900",
"main.dart.js": "ccdf78ed7f2795939cabfb5ee668efec",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba79464276db2755cea82ad861624606",
".git/config": "a0c355f91b2343d8e18f1809f8d1e4b0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/56/b9b347efadc402b6ceb41d11dc1c7a8867901d": "e5ce7bd3f235412210aba2a3ad03271b",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b2/482172f06caa78d82825306768511ea293a984": "553710e5e853ac8a9a6fbc988f8a31de",
".git/objects/df/96c8b5f8896e79da7245323d0838ce477244af": "100dab8aeed23330ecdd78bedd13be68",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f522532705ad7fe9964adf111ceeebfc215db2": "98b56f2ba2c43af9ce3fdf9de18c20d8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/9a03e6813a5070c42b80db14fa711c796fc021": "793f87c1afd6405e87e84c1213e774b1",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/c4c863fc4d46e2dedb6b39da0a7b9b744a94ea": "93d3bf29bd174e9d40c66d68cee5775c",
".git/objects/27/e11181b122ae99c08df72e995683beedac0fb2": "9224d433f0d2207fe19d8d407085520b",
".git/objects/11/2668366dea1332de22f44dfd85bae2a2c39210": "c37376729b8a19a17011b93061e8667d",
".git/objects/16/9c94177b5f5bf4ce207e468bbdd346255427c1": "7bb8ca1b3f66ca52324e4e4a89611bd6",
".git/objects/89/53ddaa2fbacf9f8674673c23e94c795160dd3c": "ea2cc168dbe524e7f066795e267a48d0",
".git/objects/8f/f27d2179958b551a4d73f61f818b4245d30576": "533bf7b70d4219c45e9f4001dc1bc598",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/3b5d37f059908dcd3bdcde7d7e98296e6d15fc": "0165c8724cea496c35da8a7be811967c",
".git/objects/4d/bc7a9757d7027e9be518ea98849f159c7df7c8": "07788ecea0f31ac86d6c2642c96245bd",
".git/objects/4d/82ea545ae19d649af7f2ca27400df1ed46cc4f": "7c16b2de4ae13e10080370d594d3fe17",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/37/10ffcf3a4594701b5175851f4c73b94f1e2433": "a5e696c0ac9dc3a1c4746f6deaddba94",
".git/objects/99/bf69d307347b7eac75d062d962114454999897": "465270926143364fab6afd4754e0cffc",
".git/objects/0f/c58bbac7f1abd23eb3348f651a9eff828b7e5b": "d809c427eb333e79a1ea62eb93c30d7c",
".git/objects/b8/7866415c85b1f1e6f0a36e198dbe0579ba04a1": "d077333c1ea11c3ed2126ea42f8e0983",
".git/objects/d2/69ba2205fdc253c192d504b2159e5f1d26dc1c": "b6bcba652bc74d57a8ca217947b405af",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/d246996ba1bb4421e983080398ffe96df0cedb": "4f30b94bcb6c88487f883ddccd48ccb1",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/c2/87656d1f2fff3d8138b9dbca632061a2a9c28a": "3f2f40bdf36295e16c49d66f4837dd24",
".git/objects/f6/490773997f494fb7a424601f17c41fef8532ed": "891f256c91cfa17f0b0c4713c4c6ee0f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/85/4a05c6b4c15567876ec10c5597099a7c31e705": "9d344008bdbe9dd72f9f2dae07677be1",
".git/objects/1d/9688aaae529a6560871813c8876c272d8415f4": "6fe802119339db895ede0f975fa00141",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/13/7b89f2be0f2ae07546fb59a3cb7d8a27c794fd": "4a3fb61956881b6423b34c54ba8d933d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3ac0d9c7cfc997f76a78d58fed6740c4",
".git/logs/refs/heads/main": "3ac0d9c7cfc997f76a78d58fed6740c4",
".git/logs/refs/remotes/origin/main": "f5dc64e494fa4dbcb39d3011fdc41a93",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "290d93ae9fc9d64c58af660a10ecd54c",
".git/refs/remotes/origin/main": "290d93ae9fc9d64c58af660a10ecd54c",
".git/index": "8411d80df0605656e1fc794818ca096d",
".git/COMMIT_EDITMSG": "d4781070443795ee5e7b47b102986336",
"assets/AssetManifest.json": "6e5f643a3fe146c6aa9327d2ced1e16a",
"assets/NOTICES": "83e3fd63af6ae295c0ec769ec69377f8",
"assets/FontManifest.json": "25f57ee764046c1f0d6c70d6cee76f82",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/fonts/Bree-Bold.otf": "b6a8907b4906ec8bec3f51816cbcf185",
"assets/assets/fonts/Bree-Light.otf": "39d8d04b67b55bc147f36a19db0db7f4",
"assets/assets/fonts/Bree-Regular.otf": "7c03468c1372594310612fdb087464d0",
"assets/assets/fonts/Bree-Thin.otf": "05772647ed902d729debc44265f729ca",
"assets/assets/fonts/Bree-ExtraBold.otf": "c10ce948a9325b5c0be77bcd7156a61c",
"assets/assets/fonts/BREE%2520REGULAR.OTF": "dc2bb7f6c8c52ab1518304795591e780",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

// https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps
// service world.
const versicer= 1;
const nomo= 'TEKSTO' + versicer;
const resFl= [
  '/',
  '/index.html',
  'res/font/N4694-ciuj.woff2',
  'res/font/NotoSerifTangut-Regular.woff2',
  'res/site/background.jpg',
  'res/site/bgmap.jpg',
  'res/icon/Cabbage_128.png',
  'res/icon/Cabbage_160.png',
  'res/icon/Cabbage_256.png',
  'res/icon/Cabbage_512.png',
  'res/cabbage.png',
  'manifest.json'
]

// Install.
self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(nomo).then(cz=> cz.addAll(resFl))
  )
})

// Fetch. 
self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(fz=>{
      return fz || fetch(e.request).then(cz=>{
        cz.put(e.request, response.clone());
        return response;
      })
    })
  )
})

// Activate.
self.addEventListener('activate', e=>{
  e.waitUntil()
  caches.keys().then(lz=> {
    return Promise.all(lz.map(ky=>{
      if(nomo.indexOf(ky) === -1){return caches.delete(ky)}
    }))
  })
})

// self.addEventListener('', e=>{})
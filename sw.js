!function(){var s=["586288b1bb976704/bundle.js","fcf4b282629ec923/bundle.css","assets/Brooklyn-Brewery-Logo-Black.png","assets/CARTO.png","assets/CHERRE.png","assets/ITP.png","assets/ENIGMA.png","assets/GSAPP.png","assets/NEWLAB.jpg","assets/NL_LOGO_medium.png","assets/NYC_MODA.png","assets/SAVI_PRATT.png","assets/STAE_Logo.png","assets/STAE.png","assets/icon.png","assets/viderum-logo.png","assets/.DS_Store","assets/organizers/JESSIE.jpg","assets/organizers/JUAN.png","assets/organizers/JOEY.jpg","assets/organizers/STEPHEN.JPG","assets/organizers/WENFEI.png","assets/artists/ACHIM.jpg","assets/artists/ANA.jpg","assets/artists/AIDAN.jpg","assets/artists/.DS_Store","assets/artists/CRYSTAL.jpg","assets/artists/ANDREW.png","assets/artists/ECHIU.jpg","assets/artists/ITAY.jpg","assets/artists/ERIC.jpg","assets/artists/KARL.jpg","assets/artists/MELISSA.jpg","assets/artists/MOLLIE.jpg","assets/artists/NICO.jpg","assets/artists/PIERRE.jpg","assets/artists/STEPHANIE.png","assets/artists/WONYOUNG.jpg","assets/artists/XENA.png","assets/panelists/david.jpeg","assets/panelists/ingrid.jpg","assets/panelists/matt.jpeg","assets/panelists/sam.png","about","schedule","exhibition","talks","workshops","submit","ref","support","manifest.json"];self.addEventListener("fetch",function(s){s.respondWith(self.caches.match(s.request).then(function(t){return t||self.fetch(s.request)}))}),self.addEventListener("install",function(t){t.waitUntil(self.caches.open("1.0.0").then(function(t){return t.addAll(s)}))}),self.addEventListener("activate",function(s){s.waitUntil(self.caches.keys().then(function(s){return Promise.all(s.map(function(t,e){if("1.0.0"!==s[e])return self.caches.delete(s[e])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map
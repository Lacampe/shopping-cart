var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoppingcart');

var products = [
  new Product({
    imagePath: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fjordan-dna-lx-pure-platinum-001.jpg?q=75&w=1000&fit=max',
    title: 'Nike Jordan DNA LX Pure Platinum',
    description: 'It seems like a new Jordan Brand model dubbed the Jordan DNA LX has surfaced, premiering in a clean “Pure Platinum/Dark Grey” colorway. Previewed courtesy of sneaker leaker US11, this court-meets-lifestyle runner boasts a sleek mid-top silhouette, breathable Flyknit mesh upper, ribbed sock-like ankle, synthetic leather quarter panel and a foam-cushioned sole unit capped off with an icy outsole. Other details include metallic silver Jumpman branding at the side, heel pull tabs for easy slip-on and -off wear, and a unique lacing system that threads through TPU eyestays and the vamp of the mesh upper.',
    price: 95
  }),
  new Product({
    imagePath: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fnike-air-max-97-purple-smoke-1.jpg?q=75&w=800&fit=max',
    title: 'Nike Air Max 97 Purple Smoke',
    description: 'Nike Sportswear is set to welcome a new colorway to its Air Max 97 lineage. “Purple Smoke” is the next color scheme to coat the streamlined sneaker. Its full-length Air Max unit returns in black and is housed within a white midsole while the smoky shade of purple coats the entire upper along with a speckled pattern around its mudguard. Its monochromatic look continues on branding areas such as the tongue and heel, as well as its lateral and medial sides.',
    price: 145
  }),
  new Product({
    imagePath: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fnike-air-max-270-flyknit-triple-black-1.jpg?q=75&w=1000&fit=max',
    title: 'Nike Air Max 270 Flyknit Surfaces Triple Black',
    description: 'Nike‘s lifestyle-driven Air Max 270 Flyknit is back in a popular color scheme. One of the most recent models from the Swoosh gets dipped in “Triple Black” for an upcoming launch. Its original engineered mesh upper is swapped for the aforementioned Flyknit weaving with subtle branding hits on each lateral and medial side. Lastly, the heel’s large Air Max unit is presented in translucent black to complete the look.',
    price: 125
  }),
  new Product({
    imagePath: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fnike-react-element-87-official-closer-look-release-01.jpg?q=75&w=1000&fit=max',
    title: 'Nike React Element 87',
    description: 'After receiving a first look earlier this week courtesy of GC911, Nike has now debuted official photos of its futuristic Nike React Element 87 silhouette. Though we initially saw the React Element 87 done in collaboration with Jun Takahashi’s UNDERCOVER, the general release sees a stealthy, semi-translucent black and grey upper contrasted with a white React foam midsole featuring translucent black plugs. Industrial elements such as the exterior taping on the heel, and a wavy, trail-style lacing system help add another dose of exotic futurism into the shoe.',
    price: 130
  }),
  new Product({
    imagePath: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fmaison-margiela-knit-sock-boot-white-1.jpg?q=75&w=800&fit=max',
    title: 'Maison Margiela White Knit Sock Boot',
    description: 'Late last year month, Maison Margiela unveiled the “dad shoe”-inspired “Security” sneaker. That silhouette’s debut featured an all-black exterior, suede and textile detailing and a well-cushioned, thick Vibram rubber sole unit. Now, the famed fashion house has revealed plans for a new Knit Sock Boot. Billed as an “avant-garde” offering Maison Margiela’s latest footwear selection is an Italian-constructed item with an all-white stretch knit upper, a “distressed rubber sole unit,” square toe area and an 80% polyamide, 20% elastane build. Rounding out the new Knit Sock Boot: classic Maison Margiela labeling towards the ribbed, sock-like opening.',
    price: 440
  }),
  new Product({
    imagePath: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F05%2Fnike-og-air-max-1-white-university-red-release-date-1.jpg?q=75&w=1000&fit=max',
    title: 'Nike Air Max 1 University Red',
    description: 'One of Nike‘s most iconic models is set to hit retail shelves soon. Designed by Tinker Hatfield, the Air Max 1 will make a comeback in arguably its most well-known colorway. The White/University Red theme stays true to its OG form with the aforementioned shade of red placed on the mudguard and Nike branding, finished with white mesh and grey as its underlay.',
    price: 85
  }),
];

var done = 0
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}




const coffees = [
  {
    title: 'Italo Disco: Italian Espresso Blend',
    price: 19,
    image:
      'https://cdn.shopify.com/s/files/1/2350/4463/products/italo-disco_1000x_e8867dcb-f04c-44e0-9838-9aa691d7a163_700x.png?v=1594091851',
    grams: 250,
    stockQty: 10,
    description:
      'Italo Disco reinvents what a dark roast can be. All moody Moogs and syrupy synths, this blend brings deeply layered flavour with a sweet dark cup, tasting like chocolate and spice.',
    tastesLike: ['chocolate', 'spice'],
    roaster: '60474ecc819f0d156181fc23',
  },
  {
    title: 'Orthodox: House Espresso Blend',
    price: 19,
    image:
      'https://cdn.shopify.com/s/files/1/2350/4463/products/ORTHODOX_1000x_1bcd5e18-b640-4ca3-a2a8-cb7cf80b2e6a_700x.png?v=1594085558',
    grams: 250,
    stockQty: 10,
    description:
      'ST. ALi’s third wave twist on the classic Italian espresso blend. Never bitter, perfect for your milk coffees and those who like their espresso with kick',
    tastesLike: [
      'apple jam',
      'fudge',
      'milk chocolate',
      'brown sugar',
      'caramel',
    ],
    roaster: '60474ecc819f0d156181fc23',
  },
  {
    title: 'Feels Good: Organic Espresso Blend',
    price: 20,
    image:
      'https://cdn.shopify.com/s/files/1/2350/4463/products/FEELS_GOOD_ORGANIC_COFFEE_1000x_35fd035b-111b-4521-b355-cde421dcf50f_700x.png?v=1594085541',
    grams: 250,
    stockQty: 10,
    description:
      "ST. ALi's Feels Good organic espresso is the compilation of everything we've been working on for the last few years. Ethically sourced, skilfully roasted, 100% organic coffee beans, 100% recyclable coffee bag and tasty AF!",
    tastesLike: ['stonefruit', 'iced tea', 'chocolate'],
    roaster: '60474ecc819f0d156181fc23',
  },
  {
    title: 'Decaf: Swiss Water Method',
    price: 19,
    image:
      'https://cdn.shopify.com/s/files/1/2350/4463/products/ST._ALi_Decaf_700x.jpg?v=1575432909',
    grams: 250,
    stockQty: 10,
    description:
      "All of the tang, none of the bang! Swiss water decaf so you know it's good.",
    tastesLike: ['chocolate', 'honey', 'buttery'],
    roaster: '60474ecc819f0d156181fc23',
  },
  {
    title: 'Wide Awake: Strong Espresso Blend',
    price: 19,
    image:
      'https://cdn.shopify.com/s/files/1/2350/4463/products/ST._ALi_Decaf_700x.jpg?v=1575432909',
    grams: 250,
    stockQty: 10,
    description:
      'Welcome to the dark side of the roast! This coffee celebrates the rich, syrupy body achieved through the darker side of artful roasting - with an extra kick for those times you really need to stay wide awake.',
    tastesLike: ['dark chocolate', 'butterscotch', 'almond'],
    roaster: '60474ecc819f0d156181fc23',
  },
  //market lane
  {
    title: 'Seasonal Espresso',
    price: 18,
    image:
      'https://marketlane.com.au/media/catalog/product/cache/1/small_image/352x447/9df78eab33525d08d6e5fb8d27136e95/s/e/seasonal_esp._bag_image@2x.jpg',
    grams: 250,
    stockQty: 10,
    description:
      '50% of the blend is made up of Small Producers of Piatã from Brazil. We were introduced to this coffee by Brazilian exporter Silvio Leite, who is widely regarded as one of the world’s best cuppers and a leader in specialty coffee. Recently Silvio has been connecting with some of the newer small producers in the Piatã region to ensure the next generation of coffee producers gets the recognition and sustainable income they deserve. This lot brings together some exceptional coffees from a group of these producers.',
    tastesLike: ['brown sugar', 'spices', 'mandarins'],
    roaster: '60474ecc819f0d156181fc24',
  },
  {
    title: 'Santa Isabel Espresso',
    price: 22,
    image:
      'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/s/a/santa_isabel_espresso_bag_image@2x.jpg',
    grams: 250,
    stockQty: 10,
    description:
      'Santa Isabel is a fifth-generation family farm owned by Luis Valdés Sr and run by his son Luis Valdés Jr, nicknamed ‘Wicho’. Wicho grew up watching and helping his father on the farm, and he fell in love with coffee from a very young age. After high school, he went away to study agriculture. He returned to work at Santa Isabel in 1998.',
    tastesLike: ['toffee', 'plum', 'orange'],
    roaster: '60474ecc819f0d156181fc24',
  },
  {
    title: 'La Esperanza Espresso',
    price: 19,
    image:
      'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/l/a/la_esperanza_espresso_bag_image_1@2x.jpg',
    grams: 250,
    stockQty: 10,
    description:
      'La Esperanza is an 11–hectare farm, located in Colombia’s China Alta area and owned by William Buitrago and Aminta Mahocha Franco. Historically, China Alta was famous for its cattle, sugarcane and trout, but its reputation is slowly changing – over the last few decades, the region has gained recognition for the extremely high quality of the coffees grown here.',
    tastesLike: ['milk chocolate', 'peach', 'caramel'],
    roaster: '60474ecc819f0d156181fc24',
  },
  //single o
  {
    title: 'COE COLOMBIA #3 EL PARAÍSO GESHA',
    price: 65,
    image:
      'https://cdn.shopify.com/s/files/1/1103/9622/products/El-Paraiso-COLOMBIA-COE-3-150g-coffee_grande.jpg?v=1612762131',
    grams: 250,
    stockQty: 10,
    description:
      'What happens when the Gesha variety, known for its heady floral allure, is in the hands of passionate, 3rd generation Colombian coffee farmer, John Gomez? This spellbinder! The Cup of Excellence Colombia 2020 jurors were taken too, with El Paraíso placing 3rd in one of the hottest coffee comps going. John is driven by the positive results & impacts on coworkers, derived from hard work & constant effort at improvements. This comp win has seen him set more high goals with a view to market worldwide. We’re chuffed to share it with you in our Heroes Series.',
    tastesLike: ['jasmine', 'citrus', 'peach', 'raspberry'],
    roaster: '60474ecc819f0d156181fc25',
  },
  {
    title: 'Fram Farm, Kenya',
    price: 20.5,
    image:
      'https://cdn.shopify.com/s/files/1/1103/9622/products/Fram-Farm-Kenya-coffee_grande.jpg?v=1614667636',
    grams: 250,
    stockQty: 10,
    description:
      'Fram Farm is a coffee name you may well remember, not just because it’s short n’ simple, but has a memorable cup profile that has seen it win the annual East Africa Taste of Harvest comp in Kenya, plus the whole of East Africa too! It’s produced by James Kariruki on around 12 acres. It’s processed at the family-owned wet mill, where James & his brothers, who have their own coffee farm plots, use the mill on alternate days of the week. Like our other Africa coffees, it arrived later than usual, so it’s going down an extra treat as part of our Africa Catch Up',
    tastesLike: ['white chocolate', 'rasberry', 'papaya'],
    roaster: '60474ecc819f0d156181fc25',
  },
  {
    title: 'El Naranjo Pura Cepa, Colombia',
    price: 19.5,
    image:
      'https://cdn.shopify.com/s/files/1/1103/9622/products/El-Naranjo-Pura-Cepa-COLOMBIA-coffee_grande.jpg?v=1613451572',
    grams: 250,
    stockQty: 10,
    description:
      'The word sustainability is tossed around lots but Pura Cepa are the real mccoy. Their innovative approach sees them achieve longer term higher incomes for producers, lowered costs, diversification of crops & increased cash flow. One of their key levers is the application of science for processing, to control the coffee’s flavour. This newest batch comes from the original Pura Cepa site in Colombia. We’ve chosen a Carbonic Maceration lot, a technique borrowed from Beaujolais where cherries are loaded into steel tanks, inoculated with esther yeasts & lactic bacteria, to delicious effect!',
    tastesLike: ['orange', 'strawberry', 'tropical punch'],
    roaster: '60474ecc819f0d156181fc25',
  },
  {
    title: 'Kerinci, Sumatra',
    price: 19.5,
    image:
      'https://cdn.shopify.com/s/files/1/1103/9622/products/Kerinci-SUMATRA-coffee_grande.jpg?v=1613449892',
    grams: 250,
    stockQty: 10,
    description:
      'A super-clean new Sumatra on the scene, grown on a plateau at the foot of Mount Kerinci, by 300 members of the Koerintji Barokah Bersama Coop. Super fertile soil is what helps make this coffee special. Mount Kerinci is part of the Pacific Ring of Fire, where eruptions emanate from 452 volcanoes across a horse-shoe shaped 40,000-kilometre stretch. Kerinci’s past eruptions means a smokin’ supply of fertile volcanic soil for this coffee to thrive in.',
    tastesLike: ['cane sugar', 'mandarin orange', 'oolong tea'],
    roaster: '60474ecc819f0d156181fc25',
  },
  {
    title: 'Reservoir',
    price: 16.0,
    image:
      'https://cdn.shopify.com/s/files/1/1103/9622/products/2018_16_NDTC_Res_250g_2048x2048_copy_1ec1fd27-e267-4eff-8d18-372a0687e68f_grande.jpg?v=1549328905',
    grams: 250,
    stockQty: 10,
    description:
      'Reservoir embodies our love of well-structured coffees & has been the pride of our café on reservoir street since 2003. It’s passed through naked handles as risties, & these days through splits as spros, always savoured for its vibrancy, the bright spark it is.',
    tastesLike: ['stonefruit', 'citrus', 'orange', 'oolong tea'],
    roaster: '60474ecc819f0d156181fc25',
  },
  //ona
  {
    title: 'Ethiopia Diamond 0420, CM Washed',
    price: 30.0,
    image:
      'https://cdn.shopify.com/s/files/1/0464/4824/6934/products/mockupDiamondEthiopia0420_4471f966-34f2-432b-b93b-5bc7016decf6_1296x.png?v=1614147656',
    grams: 250,
    stockQty: 10,
    description:
      "This lot is the 2020 harvest of the same coffee that ONA prepared in 2018 for Aga Rojewska to win the 2018 World Barista Championships in Amsterdam. This coffee is sourced from a selection of small producers in the Guji region of Ethiopia. Our partners on the ground, Primrose, manage the experimental processing here for Project Origin. This lot is a washed, carbonic maceration lot. Rhe CM Selections range uses five categories to describe the flavour profiles of coffees produced using this method: Diamond, Amber, Jasper, Indigo and Opal. As this coffee has a Diamond profile, in processing we look to respect the coffee's natural origin and varietal traits and flavours. The carbonic process's impact on Diamond coffees is subtle on flavour characteristics, but does wonders to the structure and texture of the coffee. The acidity has more pop, sparkle and refinement. The texture is more creamy and plush, and the aftertaste is longer and more elegant in nature.",
    tastesLike: ['cherry', 'plum', 'dark chocolate'],
    roaster: '60474ecc819f0d156181fc26',
  },
  {
    title: 'Brazil Fazenda Santa Ines, Natural',
    price: 16.0,
    image:
      'https://cdn.shopify.com/s/files/1/0464/4824/6934/products/MockupBrazilSantaInes_1296x.png?v=1614140036',
    grams: 200,
    stockQty: 10,
    description:
      "Fazenda Santa Ines is a large, 215ha farm that is located on the Mantiqueira Mountain Range in the 'Sul de Minas' region, about 25km from the Municipality of Carmo de Minas. This estate was acquired by the Sertao Group in 1979, who opted to completely overhaul the farm by replacing the majority of the established coffee trees growing there with new varieties. They hired experts to help improve quality and introduced new harvesting and processing techniques as well as farm technology.",
    tastesLike: ['green tea', 'chamomile', 'nectarine', 'berries'],
    roaster: '60474ecc819f0d156181fc26',
  },
  {
    title: 'Kenya Thageini Lot N01, Natural',
    price: 16.0,
    image:
      'https://cdn.shopify.com/s/files/1/0464/4824/6934/products/MockupKenyaThageiniLotN01_1296x.png?v=1614143960',
    grams: 200,
    stockQty: 10,
    description:
      'The Aguthi Farmers Co-operative Society have four wet mills (Thageini, Gaaki, Gititu and Kagumo), with the Thageini mill the second largest in terms of member producers (around 350 men and 100 women). The whole Aguthi Co-op has around 2,000 producer members. ONA loves the work that green bean sourcers Project Origin have been doing with this co-op over the last four years that we have been buying from them.',
    tastesLike: ['red currant', 'lime', 'toffee', 'berries'],
    roaster: '60474ecc819f0d156181fc26',
  },
  {
    title: 'Honduras Finca La Perla, Washed',
    price: 16.0,
    image:
      'https://cdn.shopify.com/s/files/1/0464/4824/6934/products/MockupHondurasFincaLaPerla_1296x.png?v=1614142982',
    grams: 200,
    stockQty: 10,
    description:
      "This La Perla lot is one of the most important lots for the Paz Mejía family. Producer Jose Arnold Paz Mejia takes us back to 1998, the year of Hurricane Mitch, to help us understand why. That year, a landslide wiped out two blocks from the farm due to heavy rains and soil saturation: La Perla's predecessor, the all important Los Limas lot, was lost. It was not until 2004 that Arnold's father wanted to approach replanting because of the sentimentality of the land which had previously held the prestigious former lot.",
    tastesLike: ['sweet', 'honey', 'orange', 'marmalade', 'peach'],
    roaster: '60474ecc819f0d156181fc26',
  },
  //proud mary
  {
    title: 'Burundi Nyagashiha, Natural',
    price: 22.0,
    image:
      'https://cdn.shopify.com/s/files/1/0206/2220/products/MEL-ESP-BUR-Nyagashiha-Red-Bourbon-Natural-_Bush-Doof_-front_1296x.png?v=1611527614',
    grams: 200,
    stockQty: 10,
    description:
      'The Nyagashiha washing station is one of 13 mills that form the Akawa project, created to help producers escape the cycle of poverty in a sustainable way. The project emphasises good agricultural practices, environmental responsibility, and social equity. Nyagashiha is located in the Murago region just south of Bujumbura. The annual average temperature is cooler here than other parts of Burundi which causes the cherries to develop more slowly, increasing their sugar content. Nyagashiha placed 20th in the Cup of Excellence in 2019.',
    tastesLike: ['red grape', 'chocolate', 'black cherry', 'raspberry'],
    roaster: '60474ecc819f0d156181fc27',
  },
  {
    title: 'Papua New Guinea Baroida Estate, Honey Natural Espresso',
    price: 21.0,
    image:
      'https://cdn.shopify.com/s/files/1/0206/2220/products/AU-ESP-PNG-Baroida-Estate-Mixed-Honey-front_1296x.png?v=1609727042',
    grams: 200,
    stockQty: 10,
    description:
      'Baroida Estate is named after a spirit that lives in a steadfast river rock on the estate. The rock has remained there for as long as anyone can remember, and no flood has managed to shift it. The estate was founded in the 1960s by Ben Colbran, a New Zealander, and is now managed by his son Nicol. In the beginning, they grew fruits and vegetables to sell in the port city’s markets so they could buy other necessities not available in the rural areas. It’s been a long journey for the family, not without many challenges along the way, but it’s all been worth it.',
    tastesLike: ['peach', 'floral', 'brown sugar', 'syrupy'],
    roaster: '60474ecc819f0d156181fc27',
  },
  {
    title: 'Kenya Chania Estate C, Washed Espresso',
    price: 20.0,
    image:
      'https://cdn.shopify.com/s/files/1/0206/2220/products/AU-ESP-KEN-Chania-Estate-C-Mixed-Washed-front_1296x.png?v=1609727213',
    grams: 200,
    stockQty: 10,
    description:
      "Chania Estate is named after the Chania river that runs along one of its boundaries. Owned by the Harries family, who have resided in Thika since 1904, the estate is located on a plateau surrounded by deep river valleys. The soil is a deep red colour, rich in nutrients ideal for growing coffee. This lot is made up of a mix of all the varieties that grow on the farm: French Mission, Ruiru 11, Batian, & SL14 & 28. Its 'C' grade is a denotation of bean size and includes beans 5.5mm and up. Sorting coffees by size creates different flavour profiles and makes it easier to get an even roast. C grade coffees are very balanced and mild in flavour.",
    tastesLike: ['vanilla', 'black tea', 'lime', 'brown sugar'],
    roaster: '60474ecc819f0d156181fc27',
  },
  //seven seeds
  {
    title: 'Seven Seeds Espresso Blend',
    price: 18.0,
    image:
      'https://cdn.shopify.com/s/files/1/0168/5442/products/NEW_SS_Espresso_Blend_bag_1408x1408.png?v=1575006946',
    grams: 250,
    stockQty: 10,
    description:
      'We design our seasonal house espresso blend to present a sweet and delicate, sometimes floral and always clean extraction. We source coffees to meet the intent to highlight good acidity, clarity and sweetness. Delicious served black and paired with milk.',
    tastesLike: ['vanilla', 'caramel', 'sweet', 'brown sugar'],
    roaster: '60474ecc819f0d156181fc28',
  },
  {
    title: 'La Serrania, Decaf, Colombia',
    price: 17.0,
    image:
      'https://cdn.shopify.com/s/files/1/0168/5442/products/LaSerrania_Decaf_1408x1408.png?v=1604272919',
    grams: 250,
    stockQty: 10,
    description:
      'La Serranía Decaf is grown along an isolated set of mountains within the central cordillera of the Andes that go through Pitalito, Acevedo, Palestina, Timaná, and Suaza. This coffee represents the work of more than 50 producers who are committed to quality and excellence. La Serrania is carefully hand-sorted and processed at each individual farm, with special attention paid to the drying process to ensure consistency, uniformity, and a clean cup profile. La Serranía Decaf is a Natural EA Decaf Coffee, processed at the Descafecol plant in Manizales. The decaffeination process uses ethyl acetate derived 100% from sugar cane mixed with mountain water, together removing 99.7% of the caffeine present. The beauty of the Natural EA process is that it helps preserve most of the original flavors of the coffee while adding fruity notes and some complexity to the cup.',
    tastesLike: ['creamy', 'vanilla', 'banana'],
    roaster: '60474ecc819f0d156181fc28',
  },
  {
    title: 'Familia Borre, Brazil',
    price: 20.0,
    image:
      'https://cdn.shopify.com/s/files/1/0168/5442/products/FamiliaBorr_BrazilBag_1408x1408.png?v=1614836318',
    grams: 250,
    stockQty: 10,
    description:
      'A micro lot from our old friends, Família Borre, this coffee is long on the palette and is sweet, sweet, sweet. Fabiano Borre is the third generation owner, operator of Fazenda Progresso - which was initially a potato farm. They started producing coffee in 2005, and facilitate the processing and export of all the coffees we purchase in the Chapada Diamantina region. Progresso stretches over 20,000 hectares in total, with 8000 being farmed but only 700 of that is used for growing coffee.',
    tastesLike: ['apple', 'cantaloupe', 'butterscotch'],
    roaster: '60474ecc819f0d156181fc28',
  },
  {
    title: 'Muthuthiini, Kenya',
    price: 20.0,
    image:
      'https://cdn.shopify.com/s/files/1/0168/5442/products/Muthuthiini_bag_1408x1408.png?v=1614228000',
    grams: 250,
    stockQty: 10,
    description:
      'After a quick nip in the freezer, Muthuthiini is back on the menu! Yes, frozen in time, we saved a small portion of this classically Kenyan coffee from the original release. Muthuthiini (mu-thu-thi-ini) is a wet mill affiliated to Ruthaka Farmers Coop Society. This Cooperative has five wet mills; Ruarai, Kamuchuni, Nduma, Muthuthini & Mukui. Ruthaka FCS belonged to the giant Mukurwe-ini society but after a split, some members decided to form a society from those five wet mills. The cooperative is located in Mukurwe-ini Sub County, Nyeri County. Geographically, the Ruthaka society is in Upper Medium (UM2) zone. Red volcanic soil favours coffee farming as the major cash crop.',
    tastesLike: ['blackberry jam', 'red apple', 'butterscotch'],
    roaster: '60474ecc819f0d156181fc28',
  },
];

export default coffees;

//TODO: update the coffee model and the create coffee routes

const Coffee = [
  {
    name: 'Orthodox - House Espresso Blend',
    image:
      'https://cdn.shopify.com/s/files/1/2350/4463/products/ORTHODOX_1000x_1bcd5e18-b640-4ca3-a2a8-cb7cf80b2e6a_1000x.png?v=1594085558',
    price: 10,
    grams: 250,
    countInStock: 10,
    caffeine: 'caf',
    grindType: 'wholeBeans',
    roaster: 'id',
    //coffee specific
    description: '',
    roastLevel: 5,
    region: 'South America',
    variety: 'Arabica',
    harvest: '2019',
    altitude: '1800 - 2000',
    process: ['washed', 'natural'],
    tastesLike: ['apple jam', 'fudge', 'chocolate'],
    producer: '',
    isBlend: true,
    blendComponents: [
      {
        percentage: 40,
        component: '',
      },
    ],
    //brew specific; for each brew method there is a corresponding brew guide that customers can cycle through.
    brewMethod: ['a', 'b', 'c'],
    brewGuide: [
      {
        method: 'espresso',
        notes: '',
        guide: {
          in: '22',
          out: '22',
          time: '29',
          temp: '95',
        },
      },
      {
        method: 'pour over',
        guide: '',
      },
    ],
  },
];

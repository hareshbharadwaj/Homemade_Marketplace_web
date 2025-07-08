import { Product } from '../types';

export const initialProducts: Product[] = [
  // Recipes
  {
    id: '1',
    category: 'recipe',
    title: 'Homemade Bread',
    description: 'Delicious artisan bread made with simple ingredients',
    detailedDescription: `
      # Homemade Artisan Bread
      
      ## Ingredients
      - 3 cups all-purpose flour
      - 1 1/2 teaspoons salt
      - 1/2 teaspoon active dry yeast
      - 1 1/2 cups warm water
      
      ## Instructions
      1. In a large bowl, mix flour, salt, and yeast
      2. Add water and stir until combined
      3. Cover with plastic wrap and let sit at room temperature for 12-18 hours
      4. Preheat oven to 450°F with a Dutch oven inside
      5. Transfer dough to a floured surface and form into a ball
      6. Place in Dutch oven, cover, and bake for 30 minutes
      7. Remove lid and bake for another 15 minutes until golden brown
      8. Let cool before slicing
    `,
    imageUrl: 'https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg',
    uploaderId: 'user1',
    uploaderName: 'BreadMaster',
    createdAt: '2023-01-15T08:30:00Z'
  },
  {
    id: '2',
    category: 'recipe',
    title: 'Chocolate Chip Cookies',
    description: 'Classic homemade cookies with a soft center',
    detailedDescription: `
      # Perfect Chocolate Chip Cookies
      
      ## Ingredients
      - 2 1/4 cups all-purpose flour
      - 1 teaspoon baking soda
      - 1 teaspoon salt
      - 1 cup (2 sticks) butter, softened
      - 3/4 cup granulated sugar
      - 3/4 cup packed brown sugar
      - 2 large eggs
      - 2 teaspoons vanilla extract
      - 2 cups semi-sweet chocolate chips
      
      ## Instructions
      1. Preheat oven to 375°F
      2. Combine flour, baking soda, and salt in a small bowl
      3. Beat butter, granulated sugar, and brown sugar until creamy
      4. Add eggs one at a time, then vanilla
      5. Gradually beat in flour mixture
      6. Stir in chocolate chips
      7. Drop by rounded tablespoon onto ungreased baking sheets
      8. Bake for 9-11 minutes until golden brown
      9. Cool on baking sheets for 2 minutes, then transfer to wire racks
    `,
    imageUrl: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    uploaderId: 'user2',
    uploaderName: 'CookieLover',
    createdAt: '2023-02-10T14:15:00Z'
  },
  {
    id: '3',
    category: 'recipe',
    title: 'Vegetable Soup',
    description: 'Hearty and healthy homemade vegetable soup',
    detailedDescription: `
      # Hearty Vegetable Soup
      
      ## Ingredients
      - 2 tablespoons olive oil
      - 1 onion, diced
      - 2 carrots, diced
      - 2 celery stalks, diced
      - 3 garlic cloves, minced
      - 1 zucchini, diced
      - 1 can (14.5 oz) diced tomatoes
      - 6 cups vegetable broth
      - 1 teaspoon dried thyme
      - 1 teaspoon dried basil
      - Salt and pepper to taste
      - 1 cup pasta (optional)
      
      ## Instructions
      1. Heat oil in a large pot over medium heat
      2. Add onion, carrots, and celery; cook for 5 minutes
      3. Add garlic and cook for 1 minute
      4. Add zucchini, tomatoes, broth, thyme, and basil
      5. Bring to a boil, then reduce heat and simmer for 20 minutes
      6. If using pasta, add now and cook until tender
      7. Season with salt and pepper
      8. Serve hot with crusty bread
    `,
    imageUrl: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
    uploaderId: 'user3',
    uploaderName: 'HealthyEats',
    createdAt: '2023-03-05T11:45:00Z'
  },
  {
    id: '4',
    category: 'recipe',
    title: 'Homemade Pizza',
    description: 'Create your own delicious pizza from scratch',
    detailedDescription: `
      # Homemade Pizza
      
      ## Ingredients
      
      ### For the dough:
      - 2 1/4 teaspoons active dry yeast
      - 1 teaspoon sugar
      - 1 cup warm water
      - 2 1/2 cups all-purpose flour
      - 2 tablespoons olive oil
      - 1 teaspoon salt
      
      ### For the sauce:
      - 1 can (15 oz) tomato sauce
      - 1 teaspoon dried oregano
      - 1 teaspoon dried basil
      - 1 garlic clove, minced
      - 1 tablespoon olive oil
      
      ### Toppings:
      - 2 cups shredded mozzarella cheese
      - Your favorite pizza toppings
      
      ## Instructions
      1. In a bowl, combine yeast, sugar, and warm water. Let sit for 5 minutes
      2. Add flour, olive oil, and salt to the yeast mixture
      3. Knead until smooth, about 5 minutes
      4. Place in an oiled bowl, cover, and let rise for 1 hour
      5. Preheat oven to 450°F
      6. Mix sauce ingredients in a small bowl
      7. Punch down dough and shape into a pizza on a baking sheet
      8. Spread sauce on dough, add cheese and toppings
      9. Bake for 12-15 minutes until crust is golden
    `,
    imageUrl: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg',
    uploaderId: 'user1',
    uploaderName: 'BreadMaster',
    createdAt: '2023-04-12T18:20:00Z'
  },
  {
    id: '5',
    category: 'recipe',
    title: 'Berry Smoothie',
    description: 'Refreshing mixed berry smoothie',
    detailedDescription: `
      # Mixed Berry Smoothie
      
      ## Ingredients
      - 1 cup mixed berries (strawberries, blueberries, raspberries)
      - 1 banana
      - 1/2 cup Greek yogurt
      - 1/2 cup milk (any kind)
      - 1 tablespoon honey or maple syrup (optional)
      - Ice cubes (optional)
      
      ## Instructions
      1. Add all ingredients to a blender
      2. Blend until smooth and creamy
      3. Add more milk if too thick
      4. Taste and add sweetener if needed
      5. Serve immediately
    `,
    imageUrl: 'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg',
    uploaderId: 'user3',
    uploaderName: 'HealthyEats',
    createdAt: '2023-05-08T09:10:00Z'
  },
  {
    id: '6',
    category: 'recipe',
    title: 'Homemade Granola',
    description: 'Crunchy granola with nuts and dried fruits',
    detailedDescription: `
      # Homemade Crunchy Granola
      
      ## Ingredients
      - 3 cups rolled oats
      - 1 cup mixed nuts (almonds, walnuts, pecans), chopped
      - 1/2 cup seeds (sunflower, pumpkin)
      - 1/2 cup shredded coconut
      - 1/2 cup honey or maple syrup
      - 1/3 cup coconut oil or olive oil
      - 1 teaspoon vanilla extract
      - 1 teaspoon cinnamon
      - 1/2 teaspoon salt
      - 1 cup dried fruits (raisins, cranberries, apricots)
      
      ## Instructions
      1. Preheat oven to 325°F
      2. In a large bowl, combine oats, nuts, seeds, and coconut
      3. In a small saucepan, warm honey and oil until combined
      4. Stir in vanilla, cinnamon, and salt
      5. Pour the liquid mixture over the dry ingredients and stir
      6. Spread on a baking sheet and bake for 20-25 minutes, stirring halfway
      7. Let cool completely, then add dried fruits
      8. Store in an airtight container for up to 2 weeks
    `,
    imageUrl: 'https://images.pexels.com/photos/1374370/pexels-photo-1374370.jpeg',
    uploaderId: 'user2',
    uploaderName: 'CookieLover',
    createdAt: '2023-06-15T07:30:00Z'
  },
  {
    id: '7',
    category: 'recipe',
    title: 'Homemade Salsa',
    description: 'Fresh and spicy tomato salsa',
    detailedDescription: `
      # Fresh Homemade Salsa
      
      ## Ingredients
      - 4 ripe tomatoes, diced
      - 1/2 red onion, finely diced
      - 1-2 jalapeños, seeded and minced
      - 1/4 cup cilantro, chopped
      - 2 cloves garlic, minced
      - 2 tablespoons lime juice
      - 1/2 teaspoon cumin
      - Salt and pepper to taste
      
      ## Instructions
      1. Combine all ingredients in a bowl
      2. Let sit for at least 30 minutes for flavors to meld
      3. Taste and adjust seasoning if needed
      4. Serve with tortilla chips or as a topping
      5. Store in refrigerator for up to 5 days
    `,
    imageUrl: 'https://images.pexels.com/photos/5711255/pexels-photo-5711255.jpeg',
    uploaderId: 'user1',
    uploaderName: 'BreadMaster',
    createdAt: '2023-07-22T16:45:00Z'
  },
  {
    id: '8',
    category: 'recipe',
    title: 'Banana Bread',
    description: 'Moist and delicious banana bread',
    detailedDescription: `
      # Classic Banana Bread
      
      ## Ingredients
      - 3 ripe bananas, mashed
      - 1/3 cup melted butter
      - 3/4 cup sugar
      - 1 egg, beaten
      - 1 teaspoon vanilla extract
      - 1 teaspoon baking soda
      - Pinch of salt
      - 1 1/2 cups all-purpose flour
      - 1/2 cup chopped walnuts or chocolate chips (optional)
      
      ## Instructions
      1. Preheat oven to 350°F
      2. Grease a 4x8 inch loaf pan
      3. In a bowl, mix mashed bananas and melted butter
      4. Mix in sugar, egg, and vanilla
      5. Sprinkle baking soda and salt over the mixture and stir
      6. Add flour and mix just until combined
      7. Fold in nuts or chocolate chips if using
      8. Pour into loaf pan and bake for 50-60 minutes
      9. Let cool before slicing
    `,
    imageUrl: 'https://images.pexels.com/photos/830894/pexels-photo-830894.jpeg',
    uploaderId: 'user2',
    uploaderName: 'CookieLover',
    createdAt: '2023-08-05T10:15:00Z'
  },
  {
    id: '9',
    category: 'recipe',
    title: 'Homemade Hummus',
    description: 'Creamy chickpea dip with tahini',
    detailedDescription: `
      # Creamy Homemade Hummus
      
      ## Ingredients
      - 1 can (15 oz) chickpeas, drained and rinsed
      - 1/4 cup fresh lemon juice
      - 1/4 cup tahini
      - 1 small garlic clove, minced
      - 2 tablespoons olive oil, plus more for serving
      - 1/2 teaspoon ground cumin
      - 2-3 tablespoons water
      - Salt to taste
      - Paprika and chopped parsley for garnish
      
      ## Instructions
      1. In a food processor, combine chickpeas and lemon juice. Process for 1 minute
      2. Add tahini, garlic, olive oil, and cumin. Process for 30 seconds
      3. With processor running, add water until desired consistency
      4. Taste and add salt as needed
      5. Transfer to a bowl, drizzle with olive oil, and sprinkle with paprika and parsley
      6. Serve with pita bread or vegetables
    `,
    imageUrl: 'https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg',
    uploaderId: 'user3',
    uploaderName: 'HealthyEats',
    createdAt: '2023-09-18T14:30:00Z'
  },
  {
    id: '10',
    category: 'recipe',
    title: 'Apple Pie',
    description: 'Classic homemade apple pie with flaky crust',
    detailedDescription: `
      # Homemade Apple Pie
      
      ## Ingredients
      
      ### For the crust:
      - 2 1/2 cups all-purpose flour
      - 1 teaspoon salt
      - 1 tablespoon sugar
      - 1 cup cold unsalted butter, cubed
      - 1/4 to 1/2 cup ice water
      
      ### For the filling:
      - 6-7 large apples, peeled and sliced
      - 3/4 cup sugar
      - 2 tablespoons all-purpose flour
      - 1 teaspoon cinnamon
      - 1/4 teaspoon nutmeg
      - 1/4 teaspoon salt
      - 1 tablespoon lemon juice
      - 2 tablespoons butter, cut into small pieces
      
      ## Instructions
      1. For the crust: Mix flour, salt, and sugar. Cut in butter until pea-sized. Add ice water until dough forms. Divide in half, chill for 1 hour
      2. Preheat oven to 425°F
      3. For the filling: Toss apples with sugar, flour, spices, salt, and lemon juice
      4. Roll out half the dough for bottom crust, place in pie dish
      5. Add filling, dot with butter
      6. Roll out remaining dough for top crust, place over filling
      7. Seal edges, cut slits for steam
      8. Bake for 20 minutes, reduce heat to 375°F and bake 30-40 minutes more
      9. Cool before serving
    `,
    imageUrl: 'https://images.pexels.com/photos/4553119/pexels-photo-4553119.jpeg',
    uploaderId: 'user1',
    uploaderName: 'BreadMaster',
    createdAt: '2023-10-31T13:00:00Z'
  },
  
  // Food
  {
    id: '11',
    category: 'food',
    title: 'Homemade Pasta',
    description: 'Fresh pasta made from scratch',
    detailedDescription: `
      # Fresh Homemade Pasta
      
      This delicious homemade pasta is made using just flour and eggs. The texture and flavor are incomparable to store-bought versions.
      
      ## Ingredients
      - 2 cups all-purpose flour
      - 3 large eggs
      - 1 tablespoon olive oil
      - Pinch of salt
      
      ## Process
      The dough is kneaded by hand until smooth and elastic, then rested for 30 minutes before being rolled out and cut into fettuccine. It can be cooked immediately or dried for later use.
      
      ## Serving Suggestions
      Pairs perfectly with a simple tomato sauce, creamy alfredo, or light olive oil and garlic.
    `,
    imageUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    uploaderId: 'user1',
    uploaderName: 'PastaLover',
    createdAt: '2023-01-20T12:00:00Z'
  },
  {
    id: '12',
    category: 'food',
    title: 'Artisan Sourdough',
    description: 'Naturally fermented sourdough bread',
    detailedDescription: `
      # Artisan Sourdough Bread
      
      This sourdough is made with a natural starter that's been fermented for over 3 years, giving it a complex tangy flavor and beautiful open crumb.
      
      ## Ingredients
      - Organic bread flour
      - Filtered water
      - Sea salt
      - Sourdough starter
      
      ## Process
      The dough undergoes a 24-hour fermentation process, with gentle stretching and folding to develop the gluten structure. It's baked in a Dutch oven to create a perfect crust.
      
      ## Flavor Profile
      Slightly tangy with a deep, complex wheat flavor and a chewy interior surrounded by a crackling crust.
    `,
    imageUrl: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg',
    uploaderId: 'user2',
    uploaderName: 'BreadArtisan',
    createdAt: '2023-02-15T09:45:00Z'
  },
  {
    id: '13',
    category: 'food',
    title: 'Homemade Kimchi',
    description: 'Traditional Korean fermented cabbage',
    detailedDescription: `
      # Traditional Homemade Kimchi
      
      This authentic kimchi is made using traditional Korean methods passed down through generations. The fermentation process creates a perfect balance of flavors.
      
      ## Ingredients
      - Napa cabbage
      - Korean red pepper flakes (gochugaru)
      - Garlic, ginger, and green onions
      - Fish sauce
      - Rice flour paste
      - Salt
      
      ## Process
      The cabbage is salted for several hours, then mixed with a spicy paste and allowed to ferment at room temperature for 2-3 days before being refrigerated.
      
      ## Flavor Profile
      Spicy, tangy, and slightly funky with umami depth. The fermentation creates beneficial probiotics.
    `,
    imageUrl: 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg',
    uploaderId: 'user3',
    uploaderName: 'FermentationFan',
    createdAt: '2023-03-10T15:30:00Z'
  },
  {
    id: '14',
    category: 'food',
    title: 'Handmade Chocolates',
    description: 'Artisan chocolates with various fillings',
    detailedDescription: `
      # Artisan Handmade Chocolates
      
      These beautiful chocolates are handcrafted in small batches using premium ingredients and traditional tempering methods.
      
      ## Ingredients
      - 70% dark chocolate couverture
      - Organic heavy cream
      - Local honey
      - Various flavorings (vanilla bean, raspberry, mint)
      
      ## Process
      The chocolate is carefully tempered to create a perfect crystal structure, then molded and filled with ganache, caramel, or flavored fondant centers.
      
      ## Flavor Varieties
      - Dark chocolate with sea salt caramel
      - Milk chocolate with raspberry ganache
      - White chocolate with vanilla bean
      - Dark chocolate with mint fondant
    `,
    imageUrl: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg',
    uploaderId: 'user2',
    uploaderName: 'ChocolateMaster',
    createdAt: '2023-04-05T11:15:00Z'
  },
  {
    id: '15',
    category: 'food',
    title: 'Homemade Hot Sauce',
    description: 'Spicy fermented hot sauce',
    detailedDescription: `
      # Fermented Hot Sauce
      
      This hot sauce is made through natural fermentation, creating complex flavors and preserving the bright color of the peppers.
      
      ## Ingredients
      - Fresh hot peppers (habanero, jalapeño, cayenne)
      - Garlic
      - Onion
      - Sea salt
      - Raw apple cider vinegar
      
      ## Process
      The peppers and aromatics are fermented in a salt brine for 2-4 weeks, then blended and strained. The natural fermentation creates lactic acid for preservation.
      
      ## Heat Level
      Medium-hot with a balance of heat, acidity, and fruity pepper flavor. The fermentation reduces some of the raw heat while adding complexity.
    `,
    imageUrl: 'https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg',
    uploaderId: 'user1',
    uploaderName: 'SpicyCreations',
    createdAt: '2023-05-12T16:20:00Z'
  },
  {
    id: '16',
    category: 'food',
    title: 'Homemade Jam',
    description: 'Seasonal fruit preserves',
    detailedDescription: `
      # Seasonal Fruit Jam
      
      This jam is made with locally sourced seasonal fruits at their peak ripeness to capture the best possible flavor.
      
      ## Ingredients
      - Fresh seasonal fruit (strawberries, blueberries, peaches)
      - Organic cane sugar
      - Lemon juice
      - Pectin (minimal amount)
      
      ## Process
      The fruit is gently cooked with sugar until it reaches the perfect set point, then jarred using proper canning methods for shelf stability.
      
      ## Varieties
      - Summer: Strawberry, Blueberry, Peach
      - Fall: Apple Butter, Grape, Fig
      - Winter: Citrus Marmalade
    `,
    imageUrl: 'https://images.pexels.com/photos/1020519/pexels-photo-1020519.jpeg',
    uploaderId: 'user3',
    uploaderName: 'JamMaker',
    createdAt: '2023-06-08T08:50:00Z'
  },
  {
    id: '17',
    category: 'food',
    title: 'Artisan Cheese',
    description: 'Homemade aged cheese',
    detailedDescription: `
      # Homemade Artisan Cheese
      
      This handcrafted cheese is made using traditional methods with milk from local grass-fed cows.
      
      ## Ingredients
      - Raw or pasteurized milk
      - Cheese cultures
      - Vegetable rennet
      - Sea salt
      
      ## Process
      The milk is cultured, set with rennet, cut, and drained. The cheese is then pressed, brined, and aged in a temperature and humidity-controlled environment for 2-12 months.
      
      ## Flavor Profile
      This semi-hard cheese has a nutty flavor with subtle grassy notes and a creamy texture that becomes more complex with age.
    `,
    imageUrl: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    uploaderId: 'user2',
    uploaderName: 'CheeseArtisan',
    createdAt: '2023-07-14T13:40:00Z'
  },
  {
    id: '18',
    category: 'food',
    title: 'Homemade Granola Bars',
    description: 'Healthy no-bake energy bars',
    detailedDescription: `
      # Homemade Energy Granola Bars
      
      These nutritious granola bars are made with whole ingredients and naturally sweetened.
      
      ## Ingredients
      - Rolled oats
      - Nuts and seeds (almonds, sunflower, chia)
      - Dried fruits (dates, cranberries)
      - Natural nut butter
      - Honey or maple syrup
      - Dark chocolate chips
      
      ## Process
      The ingredients are mixed with warmed honey and nut butter, pressed into a pan, chilled, and cut into bars. No baking required!
      
      ## Nutrition
      Each bar contains approximately 200 calories with 5g of protein, healthy fats, and fiber for sustained energy.
    `,
    imageUrl: 'https://images.pexels.com/photos/6941033/pexels-photo-6941033.jpeg',
    uploaderId: 'user1',
    uploaderName: 'HealthySnacks',
    createdAt: '2023-08-19T10:10:00Z'
  },
  {
    id: '19',
    category: 'food',
    title: 'Homemade Yogurt',
    description: 'Creamy probiotic yogurt',
    detailedDescription: `
      # Homemade Probiotic Yogurt
      
      This yogurt is made through natural fermentation of milk, creating billions of beneficial probiotics.
      
      ## Ingredients
      - Organic milk (cow, goat, or sheep)
      - Live yogurt culture
      
      ## Process
      The milk is gently heated to 180°F, cooled to 110°F, then inoculated with culture and held at a constant temperature for 6-12 hours until it reaches the desired tanginess.
      
      ## Serving Suggestions
      Enjoy plain, with fruit and honey, or strain to make Greek-style yogurt. Can also be used in smoothies, dressings, and baking.
    `,
    imageUrl: 'https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg',
    uploaderId: 'user3',
    uploaderName: 'FermentationFan',
    createdAt: '2023-09-25T07:30:00Z'
  },
  {
    id: '20',
    category: 'food',
    title: 'Homemade Pickles',
    description: 'Crisp fermented cucumber pickles',
    detailedDescription: `
      # Naturally Fermented Pickles
      
      These pickles are made through natural lacto-fermentation rather than vinegar, creating a probiotic-rich food with complex flavor.
      
      ## Ingredients
      - Fresh cucumbers
      - Dill
      - Garlic
      - Spices (mustard seed, coriander, black pepper)
      - Sea salt
      - Filtered water
      
      ## Process
      The cucumbers are submerged in a salt brine with spices and allowed to ferment at room temperature for 1-2 weeks, developing flavor and acidity naturally.
      
      ## Flavor Profile
      Crisp, tangy, and garlicky with a complexity that store-bought pickles can't match. The natural fermentation creates beneficial probiotics.
    `,
    imageUrl: 'https://images.pexels.com/photos/5946672/pexels-photo-5946672.jpeg',
    uploaderId: 'user2',
    uploaderName: 'PicklePro',
    createdAt: '2023-10-30T14:15:00Z'
  },
  
  // Artwork
  {
    id: '21',
    category: 'artwork',
    title: 'Hand-Knitted Blanket',
    description: 'Cozy chunky knit blanket in merino wool',
    detailedDescription: `
      # Luxury Hand-Knitted Blanket
      
      This beautiful blanket is hand-knitted using super chunky merino wool, creating a luxuriously soft and warm throw that adds texture to any space.
      
      ## Materials
      - 100% merino wool
      - Chunky weight (super bulky)
      - Natural dyes
      
      ## Dimensions
      - 40" x 60" (throw size)
      
      ## Care Instructions
      Spot clean only or dry clean. Lay flat to dry. Store folded in a cool, dry place away from direct sunlight.
    `,
    imageUrl: 'https://images.pexels.com/photos/1639720/pexels-photo-1639720.jpeg',
    uploaderId: 'user1',
    uploaderName: 'YarnArtist',
    createdAt: '2023-01-25T11:30:00Z'
  },
  {
    id: '22',
    category: 'artwork',
    title: 'Ceramic Vase',
    description: 'Hand-thrown pottery vase with unique glaze',
    detailedDescription: `
      # Handcrafted Ceramic Vase
      
      This one-of-a-kind vase is wheel-thrown by hand and finished with a custom-mixed glaze that creates beautiful variations in color.
      
      ## Materials
      - Stoneware clay
      - Food-safe glaze
      - Fired to cone 6
      
      ## Dimensions
      - Height: 10 inches
      - Diameter: 6 inches
      
      ## Features
      The vase features a natural organic shape with slight variations that showcase its handmade nature. The glaze transitions from deep blue to soft green, reminiscent of ocean waves.
    `,
    imageUrl: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg',
    uploaderId: 'user2',
    uploaderName: 'ClayCreator',
    createdAt: '2023-02-18T14:20:00Z'
  },
  {
    id: '23',
    category: 'artwork',
    title: 'Macramé Wall Hanging',
    description: 'Boho-style knotted fiber art',
    detailedDescription: `
      # Boho Macramé Wall Hanging
      
      This intricate macramé wall hanging is handcrafted using traditional knotting techniques to create a stunning textural piece for your home.
      
      ## Materials
      - 100% cotton cord
      - Natural wood dowel
      - Hand-dyed fibers
      
      ## Dimensions
      - Width: 24 inches
      - Length: 36 inches
      
      ## Design
      Featuring a combination of square knots, spiral knots, and diamond patterns that create a flowing, organic design. Each piece has slight variations due to the handmade nature.
    `,
    imageUrl: 'https://images.pexels.com/photos/1497254/pexels-photo-1497254.jpeg',
    uploaderId: 'user3',
    uploaderName: 'FiberArtist',
    createdAt: '2023-03-22T09:45:00Z'
  },
  {
    id: '24',
    category: 'artwork',
    title: 'Hand-Painted Silk Scarf',
    description: 'Watercolor-inspired wearable art',
    detailedDescription: `
      # Hand-Painted Silk Scarf
      
      Each of these luxurious scarves is individually painted by hand using traditional silk painting techniques, making it a unique piece of wearable art.
      
      ## Materials
      - 100% habotai silk
      - Professional-grade silk dyes
      - Steam-set for permanence
      
      ## Dimensions
      - 14" x 72" (long rectangle)
      
      ## Care
      Hand wash in cold water with mild soap. Iron on low silk setting. Colors are permanent and will not fade with proper care.
    `,
    imageUrl: 'https://images.pexels.com/photos/6469845/pexels-photo-6469845.jpeg',
    uploaderId: 'user1',
    uploaderName: 'SilkArtisan',
    createdAt: '2023-04-18T16:05:00Z'
  },
  {
    id: '25',
    category: 'artwork',
    title: 'Handmade Candles',
    description: 'Soy wax candles with essential oils',
    detailedDescription: `
      # Artisan Soy Candles
      
      These beautiful candles are hand-poured in small batches using natural soy wax and premium essential oils for clean, aromatic burning.
      
      ## Materials
      - 100% soy wax
      - Cotton wicks
      - Pure essential oils
      - Recycled glass containers
      
      ## Burn Time
      - 8oz jar: 40-50 hours
      
      ## Scent Profiles
      - Lavender & Sage: Calming, herbaceous
      - Cedar & Vanilla: Warm, comforting
      - Citrus Grove: Bright, uplifting
    `,
    imageUrl: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg',
    uploaderId: 'user2',
    uploaderName: 'CandleCrafter',
    createdAt: '2023-05-30T13:40:00Z'
  },
  {
    id: '26',
    category: 'artwork',
    title: 'Botanical Embroidery',
    description: 'Hand-stitched floral hoop art',
    detailedDescription: `
      # Botanical Embroidery Hoop Art
      
      Each piece is meticulously hand-stitched using various embroidery techniques to create lifelike botanical designs inspired by nature.
      
      ## Materials
      - 100% cotton fabric
      - DMC embroidery floss
      - Wooden embroidery hoop
      
      ## Dimensions
      - 6" diameter hoop
      
      ## Techniques
      The piece incorporates French knots, satin stitch, stem stitch, and seed stitch to create texture and dimension in the floral design.
    `,
    imageUrl: 'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg',
    uploaderId: 'user3',
    uploaderName: 'ThreadArtist',
    createdAt: '2023-06-24T10:15:00Z'
  },
  {
    id: '27',
    category: 'artwork',
    title: 'Stained Glass Suncatcher',
    description: 'Handcrafted glass art for windows',
    detailedDescription: `
      # Handcrafted Stained Glass Suncatcher
      
      This beautiful piece is handmade using traditional stained glass techniques, with each piece of glass carefully cut, ground, wrapped in copper foil, and soldered together.
      
      ## Materials
      - Handcrafted glass in various colors
      - Copper foil
      - Lead-free solder
      - Hanging chain
      
      ## Dimensions
      - 8" diameter
      
      ## Care
      Wipe with a soft, dry cloth. Avoid harsh cleaners. The patina will naturally darken with age, adding character to the piece.
    `,
    imageUrl: 'https://images.pexels.com/photos/11937961/pexels-photo-11937961.jpeg',
    uploaderId: 'user1',
    uploaderName: 'GlassArtist',
    createdAt: '2023-07-19T15:30:00Z'
  },
  {
    id: '28',
    category: 'artwork',
    title: 'Hand-Carved Wooden Bowl',
    description: 'Natural edge wood bowl from fallen trees',
    detailedDescription: `
      # Hand-Carved Natural Edge Bowl
      
      This beautiful bowl is hand-turned from a single piece of locally sourced wood from fallen trees, highlighting the natural grain and edge of the wood.
      
      ## Materials
      - Maple (sustainably sourced)
      - Food-safe oil finish
      
      ## Dimensions
      - Diameter: 10-12 inches (varies)
      - Height: 3-4 inches (varies)
      
      ## Care
      Hand wash only, do not soak. Periodically reapply food-safe mineral oil to maintain the finish and prevent drying.
    `,
    imageUrl: 'https://images.pexels.com/photos/5834723/pexels-photo-5834723.jpeg',
    uploaderId: 'user2',
    uploaderName: 'WoodArtisan',
    createdAt: '2023-08-12T11:05:00Z'
  },
  {
    id: '29',
    category: 'artwork',
    title: 'Handmade Soap Bars',
    description: 'Cold process artisan soap with natural ingredients',
    detailedDescription: `
      # Artisan Cold Process Soap
      
      These beautiful soap bars are handcrafted using the traditional cold process method, allowing for natural glycerin retention and gentle cleansing.
      
      ## Materials
      - Organic oils (olive, coconut, shea butter)
      - Essential oils
      - Natural colorants (clays, herbs, botanicals)
      - No synthetic fragrances or preservatives
      
      ## Weight
      - 4-5 oz per bar
      
      ## Varieties
      - Lavender Oatmeal: Calming, gentle exfoliation
      - Activated Charcoal: Detoxifying
      - Citrus Mint: Refreshing, invigorating
    `,
    imageUrl: 'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg',
    uploaderId: 'user3',
    uploaderName: 'SoapMaker',
    createdAt: '2023-09-28T09:20:00Z'
  },
  {
    id: '30',
    category: 'artwork',
    title: 'Woven Wall Basket',
    description: 'Handwoven decorative storage basket',
    detailedDescription: `
      # Handwoven Wall Basket
      
      This decorative basket is entirely handwoven using natural fibers in a traditional coil technique, creating both a beautiful wall hanging and functional storage.
      
      ## Materials
      - Natural sea grass
      - Cotton cord
      - Jute
      
      ## Dimensions
      - Diameter: 14 inches
      - Depth: 4 inches
      
      ## Features
      The basket features a unique pattern created by alternating fibers and includes a leather loop for wall hanging. Each piece has subtle variations that highlight its handmade nature.
    `,
    imageUrl: 'https://images.pexels.com/photos/5835113/pexels-photo-5835113.jpeg',
    uploaderId: 'user1',
    uploaderName: 'BasketWeaver',
    createdAt: '2023-10-15T14:45:00Z'
  },
  
  // Home Design
  {
    id: '31',
    category: 'homedesign',
    title: 'Minimalist Living Room',
    description: 'Clean, simple design with functional beauty',
    detailedDescription: `
      # Minimalist Living Room Design
      
      This minimalist living room design focuses on the "less is more" principle, creating a calm, uncluttered space with carefully selected pieces.
      
      ## Design Elements
      - Neutral color palette (whites, beiges, soft grays)
      - Clean lines and simple forms
      - Natural materials (wood, linen, cotton)
      - Abundant natural light
      - Hidden storage solutions
      
      ## Key Pieces
      - Low-profile sofa in natural linen
      - Solid wood coffee table with minimalist design
      - Simple floor lamp with architectural presence
      - One statement art piece as focal point
      
      ## Design Philosophy
      The space embodies the principle that everything should have a purpose and beauty can be found in simplicity and function rather than excess.
    `,
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    uploaderId: 'user1',
    uploaderName: 'MinimalistDesigner',
    createdAt: '2023-01-08T10:30:00Z'
  },
  {
    id: '32',
    category: 'homedesign',
    title: 'Urban Jungle Bedroom',
    description: 'Plant-filled sanctuary in the city',
    detailedDescription: `
      # Urban Jungle Bedroom Oasis
      
      This bedroom design transforms an ordinary space into a lush retreat filled with plants and natural elements for improved wellbeing and air quality.
      
      ## Design Elements
      - Abundant indoor plants of varying sizes and types
      - Natural materials (rattan, bamboo, cotton)
      - Earthy color palette with pops of green
      - Macramé plant hangers
      - Natural fiber rug
      
      ## Plant Selection
      - Statement floor plants: Fiddle Leaf Fig, Monstera
      - Hanging plants: Pothos, Spider Plant
      - Air purifying: Snake Plant, Peace Lily
      - Low light tolerant: ZZ Plant, Calathea
      
      ## Maintenance Considerations
      The design includes considerations for proper light conditions, ease of watering, and plant care routines to ensure the space remains beautiful and sustainable.
    `,
    imageUrl: 'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
    uploaderId: 'user2',
    uploaderName: 'PlantLover',
    createdAt: '2023-02-20T15:15:00Z'
  },
  {
    id: '33',
    category: 'homedesign',
    title: 'Scandinavian Kitchen',
    description: 'Functional beauty with Nordic influence',
    detailedDescription: `
      # Scandinavian-Inspired Kitchen Design
      
      This kitchen design embraces the Scandinavian principles of simplicity, functionality, and connection to nature for a bright, inviting cooking space.
      
      ## Design Elements
      - White base with wood accents
      - Clean lines and minimal ornamentation
      - Open shelving for everyday items
      - Matte black fixtures for contrast
      - Abundant natural light
      
      ## Key Features
      - Handleless cabinets for clean look
      - Solid wood countertops
      - Simple subway tile backsplash
      - Efficient workflow design
      - Indoor herbs for cooking and visual appeal
      
      ## Organization
      The design prioritizes thoughtful storage solutions, keeping frequently used items accessible while maintaining a clutter-free aesthetic.
    `,
    imageUrl: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    uploaderId: 'user3',
    uploaderName: 'NordicDesign',
    createdAt: '2023-03-15T11:45:00Z'
  },
  {
    id: '34',
    category: 'homedesign',
    title: 'Reading Nook Corner',
    description: 'Cozy bookworm retreat in any space',
    detailedDescription: `
      # Cozy Reading Nook Design
      
      This reading corner design creates a dedicated space for literary escape, combining comfort, function, and style in a small footprint.
      
      ## Design Elements
      - Comfortable seating (window seat or overstuffed chair)
      - Task lighting positioned for reading
      - Small side table for beverages
      - Book storage within arm's reach
      - Soft textiles for comfort
      
      ## Key Features
      - Custom cushions for window seat
      - Adjustable reading lamp
      - Built-in or freestanding bookshelf
      - Throw pillows and blanket for comfort
      
      ## Implementation Tips
      The design can be adapted to various spaces - bay windows, unused corners, or even closet conversions for those with limited square footage.
    `,
    imageUrl: 'https://images.pexels.com/photos/4050401/pexels-photo-4050401.jpeg',
    uploaderId: 'user1',
    uploaderName: 'BookishDesigner',
    createdAt: '2023-04-22T14:10:00Z'
  },
  {
    id: '35',
    category: 'homedesign',
    title: 'Small Space Home Office',
    description: 'Productive workspace for apartments',
    detailedDescription: `
      # Small Space Home Office Solution
      
      This clever home office design maximizes productivity in minimal square footage, perfect for apartment dwellers or those converting part of another room.
      
      ## Design Elements
      - Wall-mounted or floating desk to save floor space
      - Vertical storage solutions
      - Ergonomic seating
      - Good task lighting
      - Cable management system
      
      ## Key Features
      - Fold-down desk option when space is extremely limited
      - Wall grid system for customizable organization
      - Dual-purpose furniture (desk that converts to dining table)
      - Concealment options (closet office or secretary desk)
      
      ## Technology Integration
      The design includes considerations for proper outlet access, equipment storage, and video call backgrounds.
    `,
    imageUrl: 'https://images.pexels.com/photos/4050468/pexels-photo-4050468.jpeg',
    uploaderId: 'user2',
    uploaderName: 'SpaceOptimizer',
    createdAt: '2023-05-18T09:30:00Z'
  },
  {
    id: '36',
    category: 'homedesign',
    title: 'Bohemian Living Space',
    description: 'Eclectic, colorful, and collected design',
    detailedDescription: `
      # Bohemian Eclectic Living Space
      
      This free-spirited design embraces color, pattern, and personal expression through a collected-over-time aesthetic that tells the owner's story.
      
      ## Design Elements
      - Layered textiles (rugs, pillows, throws)
      - Mix of patterns and textures
      - Plants and natural elements
      - Global influences and found objects
      - Rich, warm color palette
      
      ## Key Features
      - Low seating options (floor cushions, poufs)
      - Gallery wall with personal artwork
      - Vintage and handmade furniture pieces
      - Macramé and woven wall hangings
      
      ## Styling Approach
      Unlike more structured design styles, this approach embraces imperfection and personalization, allowing the space to evolve over time with new finds and creations.
    `,
    imageUrl: 'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg',
    uploaderId: 'user3',
    uploaderName: 'BohoDesigner',
    createdAt: '2023-06-29T16:45:00Z'
  },
  {
    id: '37',
    category: 'homedesign',
    title: 'Japandi Bathroom',
    description: 'Japanese and Scandinavian fusion',
    detailedDescription: `
      # Japandi Bathroom Design
      
      This bathroom design merges Japanese minimalism with Scandinavian functionality, creating a serene, spa-like space that focuses on simplicity and natural materials.
      
      ## Design Elements
      - Natural materials (wood, stone, bamboo)
      - Neutral color palette
      - Simple, clean lines
      - Intentional negative space
      - Indoor plants for life and color
      
      ## Key Features
      - Freestanding soaking tub
      - Minimalist fixtures
      - Wooden stool or bench
      - Natural fiber textiles
      - Simple organization solutions
      
      ## Design Philosophy
      The space embodies the Japanese concept of "ma" (intentional negative space) and the Scandinavian principle of "hygge" (comfort and contentment), creating a bathroom that feels both functional and deeply restorative.
    `,
    imageUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
    uploaderId: 'user1',
    uploaderName: 'ZenDesigner',
    createdAt: '2023-07-24T13:20:00Z'
  },
  {
    id: '38',
    category: 'homedesign',
    title: 'Kid-Friendly Living Room',
    description: 'Stylish space that welcomes children',
    detailedDescription: `
      # Family-Friendly Living Room Design
      
      This living room design proves that style and family-friendliness can coexist, creating a beautiful space that accommodates children without sacrificing aesthetics.
      
      ## Design Elements
      - Performance fabrics for upholstery
      - Rounded edges on furniture
      - Clever toy storage solutions
      - Durable, stain-resistant materials
      - Designated kid zones within the space
      
      ## Key Features
      - Sectional sofa with washable covers
      - Coffee table with soft edges or ottoman alternative
      - Baskets and bins that complement decor
      - Activity table that blends with adult furnishings
      
      ## Design Strategy
      The space is layered with different zones for various activities, allowing adults and children to enjoy the room simultaneously while maintaining visual harmony.
    `,
    imageUrl: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
    uploaderId: 'user2',
    uploaderName: 'FamilyDesigner',
    createdAt: '2023-08-17T10:50:00Z'
  },
  {
    id: '39',
    category: 'homedesign',
    title: 'Vertical Garden Wall',
    description: 'Living plant wall for indoor spaces',
    detailedDescription: `
      # Interior Living Wall Design
      
      This vertical garden installation brings nature indoors through a stunning wall of plants that improves air quality while creating a dramatic focal point.
      
      ## Design Elements
      - Variety of plant species for visual interest
      - Modular planting system
      - Integrated irrigation
      - Proper lighting considerations
      - Compatible plant selections for similar needs
      
      ## Key Components
      - Structural support system
      - Waterproofing for wall protection
      - Drip irrigation system
      - Growth medium appropriate for vertical application
      - Low-maintenance plant varieties
      
      ## Maintenance Considerations
      The design includes accessible maintenance paths, easy plant replacement options, and carefully considered water and light requirements to ensure the installation remains beautiful with reasonable upkeep.
    `,
    imageUrl: 'https://images.pexels.com/photos/1039199/pexels-photo-1039199.jpeg',
    uploaderId: 'user3',
    uploaderName: 'GreenDesigner',
    createdAt: '2023-09-14T15:35:00Z'
  },
  {
    id: '40',
    category: 'homedesign',
    title: 'Multi-Functional Guest Room',
    description: 'Home office that transforms for visitors',
    detailedDescription: `
      # Multi-Purpose Guest Room Design
      
      This clever room design serves multiple functions, primarily as a home office but easily converting to accommodate overnight guests without compromising either purpose.
      
      ## Design Elements
      - Dual-purpose furniture
      - Concealed bed solution
      - Efficient storage
      - Defined zones within the space
      - Cohesive design aesthetic
      
      ## Key Features
      - Murphy bed or daybed with trundle
      - Desk that can remain set up when bed is in use
      - Wall-mounted lighting to save surface space
      - Closet organization for both office supplies and guest items
      
      ## Transformation Strategy
      The design allows for quick conversion between uses, with thoughtful touches like accessible outlets for guests, easily cleared surfaces, and privacy considerations.
    `,
    imageUrl: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    uploaderId: 'user1',
    uploaderName: 'FlexibleDesigner',
    createdAt: '2023-10-20T11:25:00Z'
  }
];
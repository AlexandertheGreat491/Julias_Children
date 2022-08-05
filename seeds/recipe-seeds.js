const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Creamy White Chili',
    category: 'lunch',
    ingredients:
      '1 pound boneless skinless chicken breasts, cut into 1/2-inch cubes, 1 medium chopped onion, 1-1/2 teaspoons garlic powder, 1 tablesoon canola oil, 2 cans (15 ounces each) great northern beans, rinsed and drained, 1 can (14-1/2 ounces each chopped green chiles, 1 teaspoon salt, 1 teaspoon ground cumin, 1 teaspoon dried oregano, 1/2 teaspoon pepper, 1/4 teaspoon cayenne pepper, 1 cup sour cream, 1/2 cup heavy whipping cream, optional: Torilla chps, shredded cheddar cheese, sliced seeded jalapeno pepper',
    difficulty: 'easy',
    time: 'Prep: 10 minutes, Cook: 40 minutes, Total: 50 minutes ',
    directions: 'Cook in a pot on the stove',
    user_id: 10,
  },
  {
    title: 'Best Ever Banana Bread',
    category: 'breakfast',
    ingredients:
      '1-3/4 cups all-purpose flour, 1-1/2 cups sugar, 1 teaspoon baking soda, 1/2 teaspoon salt, 2 large eggs, room temperature, 2 medium ripe bananas, mashed (1 cup), 1/2 cup canola oil, 1/4 cup plus 1 tablespoon buttermilk, 1 teaspoon vanilla extract, 1 cup chopped walnuts',
    difficulty: 'medium',
    time: 'Prep: 15 minutes, Cook: 1 hour 15 minutes, Total: 1 hour 30 minutes',
    directions: 'Cook in a medium sized bread pan.',
    user_id: 8,
  },
  {
    title: 'Amish Breakfast Casserole',
    category: 'dinner',
    ingredients:
      '1 pound sliced bacon, diced, 1 medium sweet onion, chopped, 6 large eggs, lightly beaten, 4 cups frozen shredded hash brown potatoes thawed, 2 cups shredded cheddar cheese, 1-1/2 cups 4% cottage cheese, 1-1/4 shredded Swiss cheese',
    difficulty: 'medium',
    time: 'Prep: 15 minutes, Cook: 35 minutes, Total: 50 minutes',
    directions: 'Cook in a large casserole dish in the oven.',
    user_id: 1,
  },
  {
    title: 'Pumpkin Spice Cupcakes with Cream Cheese Frosting',
    category: 'dessert',
    ingredients:
      "3/4 cup butter softened, 2-1/2 cups sugar, 3 large eggs, 1 can(15 ounces) solid-pack pumpkin, 2-1/3 cups all-purpose flour, 1 tablespoon pumpkin pie spice, 1 teaspoon baking powder, 1 teaspoon ground cinnamon, 3/4 teaspoon salt, 1/2 teaspoon baking soda, 1/2 teaspoon ground ginger, 1 cup buttermilk, Frosting:, 1 package (8 ounces) cream cheese, softened, 4 cups confectioners' sugar, 1 teaspoon vanilla extract, 2 teaspoons ground cinnamon",
    difficulty: 'hard',
    time: 'Prep: 25 minutes, Cook: 20 minutes, Total: 45 minutes',
    directions: 'Bake and then frost',
    user_id: 4,
  },
  {
    title: 'Flavorful Chicken Fajitas',
    category: 'snack',
    ingredients:
      '4 tablespoons canola oil divided, 2 tablespoons lemon juice, 1-1/2 teaspoons seasoned salt, 1-1/2 dried oregano, 1-1/2 teaspoons ground cumin, 1 teaspoon garlic powder, 1/2 teaspoon chili powder, 1/2 teaspoon paprika, 1/2 teaspoon crushed red pepper flakes, 1-1/2 pounds boneless skinless chicken breasts cut into thin stips, 1/2 medium sweet red pepper julienned, 1/2 medium green pepper julienned, 4 green onions, thinly sliced, 1/2 cup chopped onion, 6 flour tortillas(8 inches) warmed, Optional: shredded cheddar cheese taco sauce salsa guacamole sliced red onions and sour cream',
    difficulty: 'medium',
    time: 'Prep: 20 minutes, Cook: 10 minutes, Total: 30 minutes',
    directions: 'Put the chicken in tortillas.',
    user_id: 7,
  },
  {
    title: 'Apple Pie',
    category: 'dessert',
    ingredients:
      'Dough for double-crust pie, 1/3 cup sugar, 1/3 cup packed brown sugar, 1/4 cup all-purpose flour, 1 teaspoon ground cinnamon, 1/4 teaspoon ground nutmeg, 6 to 7 cups thinly sliced peeled tart apples, 1 tablespoon lemon juice, 1 tablespoon butter, 1 large egg white, Optional: Turbinado or coarse sugar, ground cinnamon, vanilla bean ice cream, and caramel sauce',
    difficulty: 'hard',
    time: 'Prep: 20 minutes, Cook: 45 minutes, Total: 1 hour 5 minutes',
    directions: 'Cook in a pan',
    user_id: 4,
  },
  {
    title: 'Traditional Lasagna',
    category: 'dinner',
    ingredients:
      '1 pound ground beef, 3/4 pound bulk pork sausage, 3 cans(8 ounces each) tomato sauce, 2 cans (6 ounces each) tomato paste, 2 garlic cloves minced, 2 teaspons sugar, 1 teaspoon Italian seasoning, 1/2 to 1 teaspoon salt, 1/4 to 1/2 teaspoon pepper, 3 large eggs, 3 tablespoons minced fresh parsely, 3 cups 4% small-curd cottage cheese, 1 cup ricotta cheese, 1/2 cup grated Parmesean cheese, 9 lasagna noodles cooked and drained, 6 slices Beliogioso Provolone Cheese (about 6 ounces), 3 cups shredded part-skim mozzarella cheese divided',
    difficulty: 'hard',
    time: 'Prep: 30 minutes, Cook: 1 hour 10 minutes, Total: 1 hour 40 minutes',
    directions: 'Cook in a big pan',
    user_id: 1,
  },
  {
    title: "Li'l Cheddar Meat Loaves",
    category: 'dinner',
    ingredients:
      '1 large egg, 3/4 cup whole milk, 1 cup shredded cheddar cheese, 1/2 quick-cooking oats, 1/2 cup quick-cooking oats, 1/2 cup chopped onion, 1/2 teaspoon salt, 1 pound ground beef, 2/3 cup ketchup, 1/2 cup packed brown sugar, 1-1/2 teaspoons prepared mustard',
    difficulty: 'medium',
    time: 'Prep: 15 minutes, Cook: 25 minutes, Time: 40 minutes',
    directions: 'Cook in the oven',
    user_id: 9,
  },
  {
    title: 'Rustic Italian Tortellini Soup',
    category: 'dinner',
    ingredients:
      '3/4 pound Italian turkey sausage links, casings removed, 1 medium onion, chopped, 6 garlic cloves, minced, 2 cans (14-1/2 ounces each) reduced-sodium chicken broth, 1-3/4 cups water, 1 can (14-1/2 ounces) diced tomatoes, undrained, 1 package (9 ounces) refrigerated cheese tortellini, 1 package (6 ounces) fresh baby spinach, coasrsely chopped, 2-1/4 teaspoons minced fresh basil or 3/4 teaspoon dried basil, 1/4 teaspoon pepper, dash crushed red pepper flakes, shredded parmesean cheese, optional',
    difficulty: 'easy',
    time: 'Prep: 20 minutes, Cook: 20 minutes, Total: 40 minutes',
    directions: 'Cook in a pot on the stove',
    user_id: 5,
  },
  {
    title: 'Fluffy Key Lime Pie',
    category: 'dessert',
    ingredients:
      '1/4 cup boiling water, 1 package (0.3 ounce) sugar-free lime gelatin, 2 cartons (6 ounces each) Key lime yogurt, 1 carton (8 ounces) frozen fat-free whipped topping thawed, 1 reduced-fat graham cracker crust(9 inches)',
    difficulty: 'easy',
    time: 'Prep: 20 minutes, Cook: 30 minutes, Total: 50 minutes',
    directions: 'Cook in the oven',
    user_id: 3,
  },
  {
    title: 'Pineapple Orange Cake',
    category: 'dessert',
    ingredients:
      '1 package yellow cake mix(regular size), 1 can (11 ounces) mandarin oranges undrained, 4 large egg whites, 1/2 cup unsweetened applesauce, Topping: 1 can(20 ounces) crushed pineapple undrained, 1 package (1 ounce) sugar free instant vanilla pudding mix, 1 carton (8 ounces) reduced-fat whipped topping',
    difficulty: 'medium',
    time: 'Prep: 15 minutes, Bake: 25 minutes, Total: 40 minutes',
    directions: 'Put oranges in a cake',
    user_id: 7,
  },
  {
    title: 'Baked Spaghetti',
    category: 'lunch',
    ingredients:
      '1 cup chopped onion, 1 cup chopped green pepper, 1 tablespoon butter, 1 can(28 ounces) diced tomatoes undrained, 1 can (4 ounces) mushroom stems and pieces drained, 1 can (2-1/4 ounces) sliced ripe olives drained, 2 teaspoons dried oregano, 1 pound ground beef, browned and drained, optional, 12 ounces spaghetti cooked and drained, 2 cups shredded cheddar cheese, 1 can (10-3/4 ounces) condensed cream of mushroom soup undiluted, 1/4 cup water, 1/4 cup grated parmesean cheese',
    difficulty: 'medium',
    time: 'Prep: 30 minutes, Bake: 30 minutes, Total: 1 hour',
    directions: 'Cook it',
    user_id: 6,
  },
  {
    title: 'Buttery Cornbread',
    category: 'snack',
    ingredients: '2/3 cup butter softened, 1 cup sugar, 3 large eggs room temperature, 1-2/3 cups 2% milk, 2-1/3 all-purpose flour, 1 cup cornmeal, 4-1/2 teaspoons baking powder, 1 teaspoon salt',
    difficulty: 'medium',
    time: 'Prep: 10 minutes, Cook: 20 minutes, Total: 30 minutes',
    directions:
      'Preheat oven to 400°. In a large bowl, cream butter and sugar until light and fluffy, 5-7 minutes. Combine eggs and milk. Combine flour, cornmeal, baking powder and salt; add to creamed mixture alternately with egg mixture. Pour into a greased 13x9-in. baking pan. Bake 22-27 minutes or until a toothpick inserted in center comes out clean. Cut into squares; serve warm.',
    user_id: 4,
  },
  {
    title: "Sandy's Chocolate Cake",
    category: 'dessert',
    ingredients:
      '1 cup butter softened, 3 cups packed brown sugar, 4 large eggs room temperature, 2 teaspoons vanilla extract, 2-2/3 cups all-purpose flour, 3/4 cup baking cocoa, 3 teaspoons baking soda, 1/2 teaspoon salt, 1-1/3 cups sour cream, 1-1/3 cups boiling water',
    difficulty: 'hard',
    time: 'Prep: 30 minutes, Cook: 30 minutes, Total: 1 hour',
    directions: 'Eat chocolate',
    user_id: 6,
  },
  {
    title: 'Macaroni Coleslaw',
    category: 'dinner',
    ingredients:
      '1 package (7 ounces) ring macaroni or ditalini, 1 package (14 ounces) coleslaw mix, 2 medium onions finely chopped, 2 celery ribs finely chopped, 1 medium cucumber finely chopped, 1 medium green pepper, finely chopped, 1 can (8 ounces) whole water chestnuts drained and chopped, Dressing: 1-1/2 cups Miracle Whip Light, 1/3 cup sugar, 1/4 cup cider vinegar, 1/2 teaspoon salt, 1/4 teaspoon pepper ',
    difficulty: 'easy',
    time: 'Prep: 25 minutes, Cook: 30 minutes, Total: 1 hour',
    directions: 'Mix it up',
    user_id: 7,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;

//the recipes in these post seeds were found at: https://www.tasteofhome.com/collection/our-100-highest-rated-recipes-ever/

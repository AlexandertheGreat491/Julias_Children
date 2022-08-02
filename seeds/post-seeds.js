const { Post } = require("../models");

const postdata = [
  {
    title: "Best Ever Banana Bread",
    genre: "bread",
    ingredients:
      "flour, sugar, baking soda, salt, large eggs, medium ripe bananas, canola oil, buttermilk, vanilla extract, chopped walnuts",
    difficulty: "medium",
    requirements: "Prep time: 15 minutes, Bake: 1-1/4 hours + cooling",
    user_id: 8,
  },
  {
    title: "Amish Breakfast Casserole",
    genre: "casserole",
    ingredients:
      "sliced bacon, medium sweet onion, large eggs, shredded hash brown potatoes, shredded cheddar cheese, cottage cheese, shredded Swiss cheese",
    difficulty: "medium",
    requirements: "Prep time: 15 minutes, Bake: 35 minutes + standing",
    user_id: 1,
  },
  
  
  {
    title: "Apple Pie",
    genre: "pie",
    ingredients:
      "pie dough, sugar, brown sugar, all-purpose flour, ground cinnamon, ground nutmeg, apples, lemon juice, butter, egg, cinnamon",
    difficulty: "hard",
    requirements:
      "Prep time: 20 minutes + chilling, Bake: 45 minutes + cooling",
    user_id: 4,
  },
  {
    title: "Traditional Lasagna",
    genre: "lasagna",
    ingredients:
      "ground beef, pork sausage, cans tomato sauce, tomato paste, garlic cloves minced, sugar, Italian seasoning, salt, pepper, large eggs, parsely, small-curd cottage cheese, ricotta cheese, grated Parmesean cheese, lasagna noodles, provolone Cheese, shredded mozzarella cheese",
    difficulty: "hard",
    requirements:
      "Prep time: 30 minutes + simmering, Bake: 70 minutes + standing",
    user_id: 1,
  },
  {
    title: "Li'l Cheddar Meat Loaves",
    genre: "meat loaf",
    ingredients:
      "large egg, whole milk, shredded cheddar cheese, quick-cooking oats, chopped onion, salt, ground beef, ketchup, packed brown sugar, mustard",
    difficulty: "medium",
    requirements: "Prep time: 15 minutes, Bake: 25 minutes",
    user_id: 9,
  },
  {
    title: "Rustic Italian Tortellini Soup",
    genre: "soup",
    ingredients:
      "Italian turkey sausage links, onion, garlic cloves, reduced-sodium chicken broth, water, diced tomatoes, cheese tortellini, baby spinach, minced basil, pepper, dash crushed red pepper flakes, shredded parmesean cheese",
    difficulty: "easy",
    requirements: "Prep time: 20 minutes, Cook: 20 minutes",
    user_id: 5,
  },
  {
    title: "Fluffy Key Lime Pie",
    genre: "pie",
    ingredients:
      "boiling water, sugar-free lime gelatin, Key lime yogurt, frozen whipped topping thawed, graham cracker crust",
    difficulty: "easy",
    requirements: "Prep time: 20 minutes + chilling",
    user_id: 3,
  },
  {
    title: "Pineapple Orange Cake",
    genre: "cake",
    ingredients:
      "yellow cake mix, mandarin oranges, large egg whites, applesauce, crushed pineapple, instant vanilla pudding mix, whipped topping",
    difficulty: "medium",
    requirements: "Prep time: 15 minutes, Bake: 25 minutes",
    user_id: 7,
  },
  {
    title: "Baked Spaghetti",
    genre: "pasta",
    ingredients:
      "onion, green pepper, butter, diced tomatoes undrained, mushroom, sliced ripe olives drained, dried oregano, ground beef, spaghetti, shredded cheddar cheese, cream of mushroom soup, water, grated parmesean cheese",
    difficulty: "medium",
    requirements: "Prep time: 30 minutes, Bake: 30 minutes",
    user_id: 6,
  },
  {
    title: "Buttery Cornbread",
    genre: "bread",
    ingredients: "",
    difficulty: "medium",
    requirements:
      "butter, sugar, eggs, 2% milk, all-purpose flour, cornmeal, baking powder, salt",
    user_id: 4,
  },
  {
    title: "Sandy's Chocolate Cake",
    genre: "cake",
    ingredients:
      "butter, packed brown sugar, large eggs, vanilla extract, all-purpose flour, baking cocoa, baking soda, salt, sour cream, boiling water",
    difficulty: "hard",
    requirements: "Prep time: 30 minutes, Bake: 30 minutes + cooling",
    user_id: 6,
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

//the recipes in these post seeds were found at: https://www.tasteofhome.com/collection/our-100-highest-rated-recipes-ever/
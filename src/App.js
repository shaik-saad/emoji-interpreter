import { useState } from "react";
import "./styles.css";

var emojisList = {
  "🍇": "Grapes ",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🫑": "Bell Pepper",
  "🫐": "Blueberries",
  "🫒": "Olive",
  "🫓": "Flatbread",
  "🫔": "Tamale",
  "🫕": "Fondue",
  "🫖": "Teapot",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧋": "Bubble Tea",
  "🧃": "Beverage Box",
  "🧉": "Mate",
  "🧊": "Ice",
  "🥢": "Chopsticks",
  "🍽️": "Fork and Knife with Plate",
  "🔪": "Kitchen Knife",
  "🍴": "Fork and Knife",
  "🥄": "Spoon"
};

var emojis = Object.keys(emojisList);

export default function App() {
  var [meaning, setMeaning] = useState("Name will come here..");

  function onChangeHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojisList) {
      var mean = emojisList[userInput];
      setMeaning(mean);
    } else if (userInput === undefined || userInput === "") {
      setMeaning("Name will come here..");
    } else {
      setMeaning("Sorry! we don't have this emoji here.");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojisList[emoji]);
  }
  return (
    <div className="App">
      <h1>BOB The Emoji Name!</h1>
      <div id="io-div">
        <input onChange={onChangeHandler} placeholder=" input an emoji here" />
        <p id="meaning-p">{meaning}</p>
      </div>
      <h3 style={{ marginTop: "3rem" }}>Food Emojis We Have</h3>
      <div id="emojis-div">
        <ul>
          {emojis.map((emoji) => {
            return (
              <li onClick={() => emojiClickHandler(emoji)} key={emoji}>
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

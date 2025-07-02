🎈 Bubble Game – A JavaScript Mini Project
A fun and interactive browser game designed for JavaScript beginners and also for experienced developers looking to brush up on DOM manipulation, event bubbling, and game logic.

📸 Preview
Click the bubbles! Match the target number before time runs out and rack up your score.

🧠 What You'll Learn
🔹 The ABCs of HTML, CSS, and JavaScript
🔹 How to manipulate the DOM to create dynamic interfaces
🔹 Make things pop with event bubbling
🔹 Build a real game project from scratch to test your JS fundamentals

📁 Project Structure
bash
Copy
Edit
bubble-game/
│
├── index.html        # Markup for the game layout
├── style.css         # Basic styling for the game
└── script.js         # Core game logic in JavaScript
🚀 How to Run
Download or clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/bubble-game.git
Open index.html in your browser.

Start playing — Click the bubble that matches the target number to gain points!

🧩 Core Game Logic (JavaScript)
📌 Game Variables
js
Copy
Edit
var timer = 6;
var score = 0;
var randomNumber = 0;
🎯 Game Functions
scoreUpdate() → Updates your score by 10 points.

hitVal() → Sets a new random target number to "hit".

makeBubble() → Generates 160 clickable bubbles with random numbers.

runTimer() → Starts a 6-second countdown. When time runs out, the game ends.

Event Bubbling: Efficiently handles clicks on bubbles using one event listener.

📥 Event Bubbling (Why it's used)
Instead of adding event listeners to 160+ bubbles, we attach one to their common parent. This uses event bubbling to catch all clicks efficiently.

js
Copy
Edit
document.querySelector("#pbottom").addEventListener("click", function(details){
    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber === randomNumber){
        scoreUpdate();
        makeBubble();
        hitVal();
    }
});
💡 Key JavaScript Concepts Covered
✅ DOM Manipulation
✅ querySelector()
✅ setInterval()
✅ Math.random() & Math.floor()
✅ Global variables
✅ Event bubbling
✅ Template literals
✅ Game loop logic

🧪 Ideal For
🟢 Beginners: Learn the building blocks of a web game
🟡 Intermediate devs: Practice structuring JS and working with the DOM
🔵 Experienced devs: Revisit the fundamentals with a lightweight project

🎁 Bonus Ideas
Want to level it up?

Add sound effects 🎵

Add a start/restart button 🎮

Keep track of high scores 🏆

Add difficulty levels (more bubbles or less time) ⏱️

👨‍💻 Author
Yashvardhan Jadhav
Feel free to connect or fork this project!

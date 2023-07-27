const questionList = [
  // Light
  "Do you know how light behaves as both a particle and a wave?",
  "Do you know how different colors of light are produced and perceived?",
  "Do you know how fiber optic cables revolutionized communication technology?",
  "Do you know how fiber optic cables transmit information using light?",
  "Do you know the actual science behind rainbow?",
  "Do you know how polarized sunglasses reduce glare?",
  // Energy
  "Do you know how energy is stored and transferred in a battery?",
  "Do you know how potential energy and kinetic energy are related?",
  "Do you know how energy conservation plays a role in sustainable living?",
  "Do you know how solar panels convert sunlight into electricity?",
  "Do you know how energy is transformed in a wind turbine?",
  // Sound
  "Do you know how sound intensity is measured and its unit of measurement?",
  "Do you know how sound waves are used in medical imaging technologies like ultrasounds?",
  "Do you know how different musical instruments produce distinct sounds?",
  "Do you know how sound travels through different mediums?",
  "Do you know how noise-canceling headphones work?",
  "Do you know how dolphins use echolocation to navigate and find prey?",
  // Motion
  "Do you know how the concept of inertia affects an object's motion?",
  "Do you know how what's difference between average speed and instantaneous speed?",
  "Do you know how friction makes objects move?",
  "Do you know what factors affect the speed and acceleration of a moving object?",
  "Do you know how the shape of a car affects its motion and fuel efficiency?",
  "Do you know how to experience weightlessness in a lift?",
  // Physical Quantity and Units
  "Do you know how to convert between Celsius and Fahrenheit temperature scales?",
  "Do you know how to calculate density using the mass and volume of an object?",
  "Do you know how to measure the force using Newtons as the unit?",
  "Do you know how to convert between different units, such as meters to kilometers?",
  // Types of Chemical Reactions
  "Do you know what happens during a combustion reaction?",
  "Do you know how to identify a redox reaction?",
  "Do you know how to neutralize an acid?",
  // Atoms and Nucleus
  "Do you know how to determine the number of protons, neutrons, and electrons in an atom?",
  "Do you know how the arrangement of electrons in an atom influences its chemical properties?",
  "Do you know how nuclear reactions differ from chemical reactions?",
  "Do you know what subatomic particles make up an atom?",
  "Do you know what an isotope is and how it differs from a regular atom?",
  "Do you know what are nuclear fission and fusion reactions?",
  // Chemical Bonding
  "Do you know how metallic bonds contribute to the properties of metals?",
  "Do you know how to draw Lewis dot structures for molecules and determine their bond types?",
  "Do you know how intermolecular forces influence the boiling and melting points of substances?",
  "Do you know what happens when an ionic bond is formed between two atoms?",
  "Do you know how covalent bonds are different from ionic bonds?",
  "Do you know what determines the strength of a chemical bond?",
  // Chemistry in the Real World
  "Do you know how chemistry is used in the production of fertilizers to improve crop yield?",
  "Do you know how chemistry plays a role in food flavoring and preservation techniques?",
  "Do you know how chemistry is involved in the creation of synthetic materials like plastics?",
  "Do you know how chemistry is used in food preservation techniques?",
  "Do you know how chemistry plays a role in developing new medications?",
  "Do you know how chemistry is involved in water treatment processes?",
  // Physics in the Real World
  "Do you know how physics principles are used in designing efficient solar panels?",
  "Do you know how physics concepts are applied in traffic engineering and optimizing transportation systems?",
  "Do you know how physics helps us understand the behavior of waves in music and communication systems?",
  "Do you know how physics principles are used in designing roller coasters?",
  "Do you know how physics concepts are applied in designing bridges and buildings?",
  "Do you know how physics is used in sports like cricket or soccer, so that the ball can change direction in between air?",
  // Algebra
  "Do you know how to simplify and evaluate expressions involving algebraic fractions?",
  "Do you know how to solve inequalities and graph them on a number line?",
  "Do you know how to solve equations using graph?",
  // Exponents and Powers
  "Do you know how to use the laws of exponents to simplify expressions with multiple exponents?",
  "Do you know how to solve exponential equations involving variables?",
  "Do you know how to express very large or very small numbers using scientific notation?",

  // Integer, Fraction, and Decimals
  "Do you know how to multiply and divide integers with different signs?",
  "Do you know how to convert between improper fractions and mixed numbers?",
  "Do you know how to perform operations on decimals, such as adding, subtracting, multiplying, and dividing?",
  "Do you know how to multiply and divide numbers with exponents?",
  "Do you know how to simplify expressions with negative exponents?",
  "Do you know how to solve algebraic equations involving exponents?",
  // Geometry
  "Do you know how to calculate the volume and surface area of three-dimensional shapes like cylinders or cones?",
  "Do you know how to use trigonometry to solve problems involving angles and side lengths in right triangles?",
  "Do you know how to determine the properties of parallel lines, such as alternate interior angles or corresponding angles?",
  "Do you know how to determine the angles in different types of polygons?",
  "Do you know how to use the Pythagorean theorem to find the length of a side in a right triangle?",
  "Do you know how to calculate volume of any material just by knowing the height and area of it's base?",
  // Heat
  "Do you know how heat is transferred through conduction, convection, and radiation?",
  "Do you know how specific heat capacity affects the temperature change of a substance?",
  "Do you know how heat engines, such as car engines, convert thermal energy into mechanical work?"
];

// Function to get a random index from the question list, excluding the given argument
function getRandomIndex(except) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questionList.length);
  } while (randomIndex === except);
  return randomIndex;
}

// Usage example
const randomIndex = getRandomIndex(-1); // Provide a valid index to exclude, -1 for no exclusion
const randomQuestion = questionList[randomIndex];

window.addEventListener('DOMContentLoaded', function() {
      var closeBtn = document.querySelector('.close-btn');
      var popupCard = document.querySelector('.popup-card');
      document.getElementById('que').innerHTML = randomQuestion;               
      closeBtn.addEventListener('click', function() {
        popupCard.style.display = 'none';
        document.getElementById("back").style.display = "none";
      });
    });















const firebaseConfig = {
  apiKey: "AIzaSyBDsxYYOOFBjpQZqY9G-YD-OOdfa9P9b2E",
  authDomain: "student-70de4.firebaseapp.com",
  databaseURL: "https://student-70de4-default-rtdb.firebaseio.com",
  projectId: "student-70de4",
  storageBucket: "student-70de4.appspot.com",
  messagingSenderId: "437914394886",
  appId: "1:437914394886:web:2d6087fe6d8074d7597e87",
  measurementId: "G-XLDV54FQX0"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database
    var database = firebase.database();

    // Define the global variables
    var value1, value2, value3, value4, value5, Task1, Task2, Task3, Points, t1, t2, t3, hw, img, mon, xtnd, frgv, mini, wild, trch, dates, CurrDates = new Date().toLocaleDateString();
    


function writeValue(key,value) {
  database.ref('data/'+ key ).set(value)
    .then(function() {
      console.log(key + " value updated successfully to " + value);
    })
    .catch(function(error) {
      console.log("Error updating" + key + "value:", error);
    });
}


var num;
function getValue(key){
database.ref('data/' + key).once('value').then(function(snapshot) {
  num = snapshot.val();
}).catch(function(error) {
  console.log('Error retrieving',key,':', error);
});
  return num
}

console.log(getValue('1'));

    function retrieveAndShowValues() {
      // Get the values from the "data" node
      database.ref('data').once('value')
        .then((snapshot) => {
          value1 = snapshot.val().val1;
          value2 = snapshot.val().val2;
          value3 = snapshot.val().val3;
          value4 = snapshot.val().val4;
          value5 = snapshot.val().val5;
          Task1 = snapshot.val().Task1;
          Task2 = snapshot.val().Task2;
          Task3 = snapshot.val().Task3;
          Points = snapshot.val().point;
          mon = snapshot.val().coins;
          hw = snapshot.val().hw;
          t1 = snapshot.val().t1;
          t2 = snapshot.val().t2;
          t3 = snapshot.val().t3;
          img = snapshot.val().img;
          note = snapshot.val().note;
          xtnd = snapshot.val().xtnd;
          frgv = snapshot.val().frgv;
          mini = snapshot.val().mini;
          wild = snapshot.val().wild;
          trch = snapshot.val().trch;
          dates = snapshot.val().date;
          
          
          // Convert the values to numbers
          value1 = Number(value1);
          value2 = Number(value2);
          value3 = Number(value3);
          value4 = Number(value4);
          value5 = Number(value5);
          Task1 = Number(Task1);
          Task2 = Number(Task2);
          Task3 = Number(Task3);
          Points = Number(Points);
          t1 = Number(t1);
          t2 = Number(t2);
          t3 = Number(t3);
          mon = Number(mon);
          xtnd = Number(xtnd);
          frgv = Number(frgv);
          mini = Number(mini);
          wild = Number(wild);
          trch = Number(trch);
          
          console.log('Values from database:');
          console.log('value1:', value1);
          console.log('value2:', value2);
          console.log('value3:', value3);
          console.log('value4:', value4);
          console.log('value5:', value5);
          document.getElementById("hw").innerHTML = hw;
          document.getElementById("selected-image").src = img;
          document.getElementById("note").value = note;
          document.getElementById("coins").textContent = mon;
          document.getElementById("xtnd").textContent = xtnd;
          document.getElementById("frgv").textContent = frgv;
          document.getElementById("mini").textContent = mini;
          document.getElementById("wild").textContent = wild;
          document.getElementById("trch").textContent = trch;
          if (dates !== CurrDates){
              document.getElementById("login").style.background = "linear-gradient(to bottom right, hsl(40, 100%, 30%), hsl(40, 100%, 50%), hsl(40, 100%, 70%), hsl(40, 100%, 50%), hsl(40, 100%, 30%))";
              document.getElementById("login").onclick = function login(){
                  Points += 2;
                  writeValue('point',Points);
                  writeValue('date',CurrDates);
                  wait(1000);
                location.reload();
              };
          }
          var img = document.getElementById('image');
          var bodi = document.getElementById('bodi');
          if (Points > 300){
          img.src = "images/master.png";
          bodi.style.background = "linear-gradient(to bottom right, hsl(0, 0%, 10%), hsl(0, 0%, 20%), hsl(0, 0%, 40%), hsl(0, 0%, 20%), hsl(0, 10%, 10%))";
          }
          else if (Points > 200){
          img.src = "images/crystal.png"
          bodi.style.background = "linear-gradient(to bottom right, hsl(210, 30%, 60%), hsl(210, 30%, 70%), hsl(0, 0%, 100%), hsl(310, 10%, 60%), hsl(310, 10%, 50%))";
          }
          else if (Points > 120){
          img.src = "images/gold.png"
          bodi.style.background = "linear-gradient(to bottom right, hsl(38, 60%, 50%), hsl(40, 50%, 70%), hsl(40, 50%, 80%), hsl(40, 50%, 50%), hsl(40, 30%, 40%))";
          }
          else if (Points > 60){
          img.src = "images/silver.png"
          bodi.style.background = "linear-gradient(to bottom right, hsl(0, 0%, 55%), hsl(0, 0%, 75%), hsl(0, 0%, 95%), hsl(0, 0%, 65%), hsl(0, 0%, 55%))";
          }
          else{
          img.src = "images/bronze.png"
          bodi.style.background = "linear-gradient(to bottom right, hsl(25, 50%, 30%), hsl(25, 50%, 50%), hsl(25, 50%, 70%), hsl(25, 50%, 50%), hsl(25, 50%, 30%))";
          };
          
          if (t1 === 1){
          document.getElementById("but1").style.background = "linear-gradient(to bottom right, hsl(40, 100%, 30%), hsl(40, 100%, 50%), hsl(40, 100%, 70%), hsl(40, 100%, 50%), hsl(40, 100%, 30%))";
          }
          else if (t2 === 1){
          document.getElementById("but2").style.background = "linear-gradient(to bottom right, hsl(40, 100%, 30%), hsl(40, 100%, 50%), hsl(40, 100%, 70%), hsl(40, 100%, 50%), hsl(40, 100%, 30%))";
          }
          else if (t3 === 1){
          document.getElementById("but3").style.background = "linear-gradient(to bottom right, hsl(40, 100%, 30%), hsl(40, 100%, 50%), hsl(40, 100%, 70%), hsl(40, 100%, 50%), hsl(40, 100%, 30%))";
          };
          
          function setProgress(progress, progressBar) {
            progressBar.setAttribute('data-progress', progress);
            progressBar.style.setProperty('--progress', progress / 100);
            progressBar.style.setProperty('--progress-color', getProgressColor(progress));
        }

        function getProgressColor(progress) {
            if (progress < 25) {
                return '#ff0000'; // red
            } else if (progress < 60) {
                const redValue = 255;
                const greenValue = Math.round((progress - 25) * (255 / 35));
                return `rgb(${redValue}, ${greenValue}, 0)`;
            } else if (progress < 90) {
                const redValue = Math.round(255 - ((progress - 60) * (255 / 30)));
                const greenValue = 255;
                return `rgb(${redValue}, ${greenValue}, 0)`;
            } else {
                return '#00ffff'; // green
            }
        }
      console.log(Task1, Task2, Task3, Points, t1, t2, t3);
      updateTasks();
      updatePoints();
        // Initial progress settings
        const progressBar1 = document.querySelectorAll('.progress-bar')[0];
        setProgress(value1, progressBar1);

        const progressBar2 = document.querySelectorAll('.progress-bar')[1];
        setProgress(value2, progressBar2);
        
        const progressBar3 = document.querySelectorAll('.progress-bar')[2];
        setProgress(value3, progressBar3);
        
        const progressBar4 = document.querySelectorAll('.progress-bar')[3];
        setProgress(value4, progressBar4);
        
        const progressBar5 = document.querySelectorAll('.progress-bar')[4];
        setProgress(value5, progressBar5);
        
        })
        .catch((error) => {
          console.error('Error retrieving values:', error);
        });
    };
    
 retrieveAndShowValues();
 
 var tasks = [
    "Learn all definitions in physics chapter. [20]",
    "​Learn all definitions of a chemistry chapter. [20]",
    "​Revise all properties of a maths chapter. [10]",
    "​Give all formula test of physics. [8]",
    "​Give all formula test of a maths chapter. [10]",
    "​Do 8 easy sums of maths. [10]",
    "​Do 5 easy problem sums of maths. [10]",
    "​Do 3 hard problem sums of maths. [15]",
    "​Revise and learn a 'nutshell' of a physics chapter. [15]",
    "​Revise and learn a 'nutshell' of chemistry chapter. [15]",
    "​Do 5 voice change. [12]",
    "​Do 5 narration changes. [12]",
    "​Do 5 sentence transformation. [10]",
    "​Revise the chapter Nouns. [15]",
    "​Revise the chapter Verbs. [20]",
    "​Revise the chapter Pronoun. [20]",
    "-​Revise the chapter Adjective. [20]",
    "​Revise the chapter Adverb. [20]",
    "​Revise the chapter Phrase. [15]",
    "​Revise the chapter Clause. [20]",
    "​Revise the chapter Sentence. [15]",
    "​Do 4 numericals of physics. [12]"   
    ];



    function claim(taskNumber) {
      var taskId, task, writ;
      
      if (taskNumber === 1) {
        taskId = Task1;
        task = t1;
        writ = 't1';
      } else if (taskNumber === 2) {
        taskId = Task2;
        task = t2;
        writ = 't2';
      } else if (taskNumber === 3) {
        taskId = Task3;
        task = t3;
        writ = 't3';
      }
      var taskText = tasks[taskId];
      var points = getPoints(taskText);
      if (task === 1) {
        Points += points;
        mon += points*0.25;
        
        writeValue('coins',mon);
        writeValue('point',Points);
        writeValue(writ, 0);
        alert("Successfully hunted: "+taskText+".\n\n"+points+" badges are added successfully to your bag.");          
        updateNums();
        updateTasks();
        updatePoints();
        location.reload();
      }
      else{
      alert("Looks like you aren't enough prepared to hunt this down!");
      };
    }
    function updateNums(){
      var rand = getRandomTasks(Task1, Task2, Task3, tasks);
      Task1 = rand[0];
      writeValue('Task1', Task1);
      Task2 = rand[1];
      writeValue('Task2', Task2);
      Task3 = rand[2];
      writeValue('Task3', Task3);
    }

    function updateTasks() {
      document.getElementById("Task1").textContent = tasks[Task1];
      document.getElementById("Task2").textContent = tasks[Task2];
      document.getElementById("Task3").textContent = tasks[Task3];
    }

    function updatePoints() {
      document.getElementById("Points").textContent = Points;
    }

    function getRandomTasks(arg1, arg2, arg3, task) {
  var taskRange = task.length; // Assuming task is an existing list/array

  // Create an array with all possible valid indexes
  var validIndexes = Array.from({ length: taskRange }, (_, index) => index);

  // Remove the three arguments from the valid indexes array
  validIndexes = validIndexes.filter(index => index !== arg1 && index !== arg2 && index !== arg3);

  // Shuffle the valid indexes array
  validIndexes.sort(() => Math.random() - 0.5);

  // Take the first three indexes from the shuffled array
  var randomIndexes = validIndexes.slice(0, 3);

  return randomIndexes;
};

    function getPoints(taskText) {
      var pointsRegex = /\[(\d+)\]/;
      var match = taskText.match(pointsRegex);
      return match ? parseInt(match[1]) : 0;
        }


function showImageList() {
  var imageList = document.getElementById("imageList");
  if (imageList.style.display === "none") {
    imageList.style.display = "block";
  } else {
    imageList.style.display = "none";
  }
}

function selectImage(event) {
  var clickedElement = event.target;
  var imageList = document.getElementById("imageList");
  
  // Check if the click event originated from the image selector or the image list
  var isInsideImageSelector = clickedElement.classList.contains("image-selector");
  var isInsideImageList = clickedElement === imageList || imageList.contains(clickedElement);
  
  // If the clicked element is neither the image selector nor inside the image list, do nothing
  if (!isInsideImageSelector && !isInsideImageList) {
    return;
  }
  
  // Find the closest image element in the list from the clicked element
  var closestImage = clickedElement.closest("li").querySelector("img");
  if (!closestImage) {
    return; // Do nothing if the clicked element is not an image
  }
  
  var isDisabled = closestImage.classList.contains("disabled");
  
  if (isDisabled) {
    return; // Do nothing if the image is disabled
  }

  var selectedImage = closestImage.src;
  document.getElementById("selected-image").src = selectedImage;
  showImageList();
  writeValue('img',selectedImage);
}

// Add a click event listener to the document to close the image list when clicking outside
document.addEventListener("click", function (event) {
  var imageList = document.getElementById("imageList");
  var imageSelector = document.querySelector(".image-selector");

  // Check if the click event originated from the image selector or the image list
  var isInsideImageSelector = event.target === imageSelector || imageSelector.contains(event.target);
  var isInsideImageList = event.target === imageList || imageList.contains(event.target);

  if (!isInsideImageSelector && !isInsideImageList) {
    imageList.style.display = "none";
  }
});

function rewrite(){
    var n = document.getElementById("note").value;
    writeValue('note',n);
};


function updateCoinsDisplay() {

      document.getElementById('coins').textContent = mon;
      writeValue('coins',mon);
    }

    function buyItem(itemPrice,name) {
      if (mon >= itemPrice) {
          var amnt = Number(document.getElementById(name).innerHTML);
        amnt = Number(amnt);
        amnt = amnt + 1;
        writeValue(name,amnt);
        mon -= itemPrice;
        updateCoinsDisplay();
        location.reload();
      } else {
        displayInsufficientCoinsPopup();
      }
    }

    function displayInsufficientCoinsPopup() {
      const popup = document.getElementById('insufficientCoinsPopup');
      popup.style.display = 'block';
    }

    function closePopup() {
      const popup = document.getElementById('insufficientCoinsPopup');
      popup.style.display = 'none';
    }
    

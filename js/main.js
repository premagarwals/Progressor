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
    var value1, value2, value3, value4, value5, Task1, Task2, Task3, Points, t1, t2, t3;

    function updateValues() {
      var val1 = 31;
      var val2 = 46;
      var val3 = 63;
      var val4 = 92;
      var val5 = 83;

      // Set the values in the "data" node
      database.ref('data').set({ val1, val2, val3, val4, val5 })
        .then(() => {
          console.log('Values updated successfully!');
        })
        .catch((error) => {
          console.error('Error updating values:', error);
        });
    }
    

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

function pick(){
  document.getElementById("dhan").innerHTML = getValue('var1');
}
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
          t1 = snapshot.val().t1;
          t2 = snapshot.val().t2;
          t3 = snapshot.val().t3;
          
          
          
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
          
          console.log('Values from database:');
          console.log('value1:', value1);
          console.log('value2:', value2);
          console.log('value3:', value3);
          console.log('value4:', value4);
          console.log('value5:', value5);
          
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
      Task1 = getRandomTaskId();
      writeValue('Task1', Task1);
      Task2 = getRandomTaskId();
      writeValue('Task2', Task2);
      Task3 = getRandomTaskId();
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

    function getRandomTaskId() {
      return Math.floor(Math.random() * tasks.length);
    }

    function getPoints(taskText) {
      var pointsRegex = /\[(\d+)\]/;
      var match = taskText.match(pointsRegex);
      return match ? parseInt(match[1]) : 0;
        }
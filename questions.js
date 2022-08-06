//NODE THINGS
/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);*/

//database connection
/*var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //query
    /*con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
  });*/

//APP THINGS
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#input").addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            console.log("You pressed the enter button!")
        }
    });
});
const appQuestions = [
    "What is your name?",
    "What is your gender?",
    "What is your age?",
    //"Mental health or physical health?",    //?
    //"Which part of your body is in pain?",
    "What are your symptoms?"
];

const ailments = [
    a1 = {
        Name: "Heart disease",
        NumSymptoms: 0
    },
    a2 = {
        Name: "Breast Cancer",
        NumSymptoms: 0
    },
    a3 = {
        Name: "Pregnancy",
        NumSymptoms: 0
    },
    a4 = {
        Name: "Osteoporosis",
        NumSymptoms: 0
    },

    a5 = {
        Name: "Depression",
        NumSymptoms: 0
    },
    a6 = {
        Name: "Anxiety",
        NumSymptoms: 0
    },
    a7 = {
        Name: "Endometriosis",
        NumSymptoms: 0
    },
    a8 = {
        Name: "Menopause",
        NumSymptoms: 0
    },
    a9 = {
        Name: "High blood pressure",
        NumSymptoms: 0
    },
    a10 = {
        Name: "Kidney disease",
        NumSymptoms: 0
    }, a11 = {
        Name: "Osteoarthritis",
        NumSymptoms: 0
    }, a12 = { Name: "Eating disorder", NumSymptoms: 0 }
];

const symptoms = [
    "Chest Pain",
    "Shortness of breath",
    "Nipple discharge",
    "Skin dimpling",
    "Fatigue",
    "Nausea",
    "Back pain",
    "Loss of interest",
    "Oversleping",
    "Uncontrollable feelings",
    "Painful periods",
    "Excessive bleeding",
    "Weight gain",
    "Vaginal dryness",
    "Difficulty breathing",
    "Irregular heartbeat",
    "Loss of appetite",
    "Tenderness",
    "Frequent dieting",
    "Stomach cramps"
]
var name, age, bodypart;

function getName() {
    //append name to whatever data structure/array whatever
    name = document.getElementById("myTextInputID").value;
}

function getAge() {
    //append age to whatever data structure/array
    age = document.getElementById("myTextInputID").value;
}

function getBodyPart() {
    //append body part to whatever data structure/array
    bodypart = document.getElementById("myTextInputID").value;
}

function getSymptoms(){
    //append symptom to whatever data structure/array based on selected symptoms
    var ailments = getAilment(array);
    var top1 = { Name: "", NumSymptoms: 0 };
    var top2 = { Name: "", NumSymptoms: 0 };
    var top3 = { Name: "", NumSymptoms: 0 };

    ailments.forEach((ailment) => {
        if (ailment.NumSymptoms>top1.NumSymptoms) {
            top1 = ailment;
      }});

    ailments.forEach((ailment) => {
        if (ailment.NumSymptoms>top.NumSymptoms && ailment!=top1) {
            top2 = ailment;
      }});

      ailments.forEach((ailment) => {
        if (ailment.NumSymptoms>top.NumSymptoms && ailment!=top2 && ailment.top1) {
            top3 = ailment;
      }});

    return top1.Name + " " + top2.Name + " " + top3.Name;
}

function getAilment(array) {
    array.forEach(function (item) {
        switch (item) {
            case symptoms[0]:
                ailments[a1[NumSymptoms]]++;
                ailments[a9[NumSymptoms]]++;
                break;
            case symptoms[1]:
                ailments[a1[NumSymptoms]]++;
                ailments[a10[NumSymptoms]]++;
                break;
            case symptoms[2]:
                ailments[a2[NumSymptoms]]++;
                break;
            case symptoms[3]:
                ailments[a2[NumSymptoms]]++;
                break;
            case symptoms[4]:
                ailments[a3[NumSymptoms]]++;
                ailments[a9[NumSymptoms]]++;
                break;
            case symptoms[5]:
                ailments[a3[NumSymptoms]]++;
                ailments[a10[NumSymptoms]]++;
                break;
            case symptoms[6]:
                ailments[a4[NumSymptoms]]++;
                break;
            case symptoms[7]:
                ailments[a5[NumSymptoms]]++;
                break;
            case symptoms[8]:
                ailments[a5[NumSymptoms]]++;
                break;
            case symptoms[9]:
                ailments[a6[NumSymptoms]]++;
                break;
            case symptoms[10]:
                ailments[a7[NumSymptoms]]++;
                break;
            case symptoms[11]:
                ailments[a7[NumSymptoms]]++;
                break;
            case symptoms[12]:
                ailments[a8[NumSymptoms]]++;
                break;
            case symptoms[13]:
                ailments[a8[NumSymptoms]]++;
                break;
            case symptoms[14]:
                ailments[a9[NumSymptoms]]++;
                break;
            case symptoms[15]:
                ailments[a9[NumSymptoms]]++;
                break;
            case symptoms[16]:
                ailments[a10[NumSymptoms]]++;
                break;
            case symptoms[17]:
                ailments[a11[NumSymptoms]]++;
                break;
            case symptoms[18]:
                ailments[a12[NumSymptoms]]++;
                break;
            case symptoms[19]:
                ailments[a12[NumSymptoms]]++;
                break;
            default:
                return "You are healthy :)"
        }
    })
}
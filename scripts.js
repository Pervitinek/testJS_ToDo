let work = [
    {
        title: "Název úkolu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend accumsan viverra.",
        done: true
    },
    {
        title: "Název úkolu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend accumsan viverra.",
        done: false
    },
    {
        title: "Název úkolu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend accumsan viverra.",
        done: true
    },
    {
        title: "Název úkolu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend accumsan viverra.",
        done: false
    },
    {
        title: "Název úkolu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend accumsan viverra.",
        done: false
    },
];

let workTitles = [];

work.forEach(thing =>{

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("card");

    const assignmentName = document.createElement("h2");
    assignmentName.innerText = thing.title;
    assignmentName.classList.add("name");
    takeTitles(assignmentName.innerText);

    assignmentName.style = "font-size: 16px;\n" +
        "    font-style: normal;\n" +
        "    font-weight: 700;\n" +
        "    line-height: normal;\n" +
        "    color: #374151;\n" +
        "    margin-top: 0;\n" +
        "    margin-bottom: 7px;";

    const text = document.createElement("p");
    text.innerText = thing.text;
    text.classList.add("content");

    if(thing.done){
        assignmentName.innerHTML = thing.title.strike();
        text.innerHTML = thing.text.strike();
        contentDiv.classList.add("card-bad");
    }

    contentDiv.appendChild(assignmentName);
    contentDiv.appendChild(text);
    document.querySelector("#work").appendChild(contentDiv);
});

function takeTitles(x){
    workTitles.push(x);
}
console.log(workTitles);

let first = [];
function take(title, text){
    first["text"] = text;
    first["title"] = title;
    first["done"] = true;

    if(document.querySelector(".card-bad")){
        first["done"] = true;
    }else{
        first["done"] = false;
    }
    console.log(first);
}
take(document.querySelector(".card-bad").querySelector(".name").innerText, document.querySelector(".card-bad").querySelector(".content").innerText);
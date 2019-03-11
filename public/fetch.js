async function getTodos() {

    var auth = sessionStorage.getItem("xauth");
        
    const rawResponse = await fetch('/todos', {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth': auth
        }
    });
    

    if(rawResponse.status == 401)
    {
      console.log("response status 401");
      window.location = '/';
      return;
    }

    const content = await rawResponse.json();

    console.log(content, rawResponse.headers.get('x-auth'));

    isDataReceived = true;

    createCardsFromData(content.todos);
    AddContentEditableInputEvent();
};

async function login() {

    var mail = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
        
    const rawResponse = await fetch('/users/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: mail, password: pass})
    });
    const content = await rawResponse.json()

    //Dashboard is authenticating now so we need to wait to get our auth token
    //before we allow a redirect to dashboard - this is NOT currently happening
    console.log(content, rawResponse.headers.get('x-auth'));
    sessionStorage.xauth = rawResponse.headers.get('x-auth');
  
    window.location = '/dashboard';


};

var cards = [];
var isDataReceived = false;

function ShowNewNoteFields(){
  var noteTitle = document.getElementById("newNoteTitle");
  noteTitle.setAttribute("style", "display: block;");
  moveCursorToContentEditableStart();
}

function HideNewNoteFields(){
  console.log("hide title note");
  var noteTitle = document.getElementById("newNoteTitle");
  noteTitle.setAttribute("style", "display: none;");
}

const moveCursorToContentEditableStart = () =>{
  var el = document.getElementById("newNoteText");
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(el.childNodes[0], 0);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}

function createCardsFromData(data)
{
  for(var i =0; i < data.length; i++)
  {
      createCard(data[i]);
  }
}

function createCard(card_data)
{
  var cardDiv = createHtmlElement("div", "");

  var cardName = createHtmlElement("p", card_data.text);
  var cardCompleted = createHtmlElement("p", card_data.completed);

  cardDiv.appendChild(cardName);
  cardDiv.appendChild(cardCompleted);


  var cardClass = document.createAttribute("class");
  cardClass.value = "card";
  cardDiv.setAttributeNode(cardClass);
  
  pushDataToArray(card_data.name, cardDiv);
  addHtmlToRoot(cardDiv);
}

function pushDataToArray(cardName, cardNode)
{
  cards.push({
    name: cardName,
    node: cardNode
  })
}


function addHtmlToRoot(element)
{
  document.getElementById("root").appendChild(element);
}

function createHtmlElement(element, textValue)
{
  var elementNode = document.createElement(element);
  elementNode.textContent = textValue;
  return elementNode;
}

function createImgElement(src)
{
  var element = document.createElement("img");
  var attr = document.createAttribute("src");
  attr.value = src;                           // 
  element.setAttributeNode(attr);     
  return element;
}

function search(){
  var searchBar = document.getElementById("searchBar").value.toUpperCase();
  
  var results = [];
  
  if(isDataReceived)
  {
    if(searchBar !== "")
    {
      var myNode = document.getElementById("root");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }


      for(var i = 0; i < cards.length; i++)
      {
        var upperName = cards[i].name.toUpperCase();

        if(upperName.includes(searchBar))
        {
          results.push(cards[i]);
        }
      }

      console.log(searchBar);
      console.log(results);

      for(var j = 0; j < results.length; j++)
      {
        addHtmlToRoot(results[j].node);
      }

    }
    else{
      for(var k = 0; k < cards.length; k++)
      {
        addHtmlToRoot(cards[k].node);
      }
    }
  }
}

const AddContentEditableInputEvent = () =>{
    document.getElementById("newNoteText").addEventListener("input", function(e) {
    
    var elem = e.target;
    console.log(elem.innerHTML);

    if(elem.innerHTML.includes('Make a new Todo...<i class="far fa-edit"></i>'))
    {
      e.target.innerHTML = "";
    }
    
    
    console.log("input event fired");
    }, false);
}

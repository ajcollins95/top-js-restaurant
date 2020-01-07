import loadPage from './modules/loadpage';
import home from './modules/home';
import contact from './modules/contact';
import menu from './modules/menu';



function init() {
    let page = loadPage();
    document.getElementById('content').appendChild(page)
    document.getElementById('content-frame').appendChild(home())
    addListeners()

}

function addListeners() {
    //adds a listener to each button
    let buttons= document.getElementsByTagName('nav')[0].childNodes
    buttons.forEach( (btn) => {
        btn.addEventListener("click", () =>{ 
            switchTab(btn)
        })  
    })
}

function switchTab(btn) {
    let frame = document.getElementById('content-frame')
    let oldChild = frame.childNodes[0]
    let newChild = document.createElement('p')
    
    switch (btn.id) {
        case 'home':
            newChild = home();
            break;
        case 'menu':
            newChild = menu();
            break;
        case 'contact':
            newChild = contact();
            break;
        default:
          alert('ERROR: id of button is unaccounted for');

      }
    frame.removeChild(oldChild)
    frame.appendChild(newChild)
}

init()
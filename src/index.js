import loadPage from './modules/loadpage';



function init() {
    let page = loadPage();
    document.getElementById('content').appendChild(page)
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

    newChild.innerText = btn.id
    frame.removeChild(oldChild)
    frame.appendChild(newChild)
}

init()
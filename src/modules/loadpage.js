function loadPage() {
    //returns an element that contains a skeleton of the page
    //ie Nav Bar, content frame, and footer

    let nav = createNav()
    let frame = createContentWindow()
    //let footer = createFooter()

    let page = document.createElement('div')

    page.appendChild(nav)
    page.appendChild(frame)
    //page.appendChild(footer)

    return page
}


//Navbar function and helpers
function createNav() {
    //creates a navbar with three buttons
    let nav = document.createElement('nav')
    let tabs = ['Home','Menu','Contact']

    nav.classList.add('flex-container')
    tabs.forEach( (tab) => {
        let btn = createButton(tab)
        nav.appendChild(btn)
    })

    return nav
}

function createButton(name) {
    //makes a button named name and has a lowercase name as the id
    let id = name.toLowerCase()
    let btn = document.createElement('button')

    btn.id = id
    btn.innerText = name

    return btn
}

function createContentWindow() {
    let content = document.createElement('div')

    content.id = 'content-frame'

    return content
}

export default loadPage;
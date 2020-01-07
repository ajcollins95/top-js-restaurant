function loadPage() {
    //returns an element that contains a skeleton of the page
    //ie Nav Bar, content frame, and footer

    let title = createTitle()
    let nav = createNav()
    let frame = createContentWindow()
    let footer = createFooter()
    let spacer = createSpacer()
    let page = document.createElement('div')

    page.appendChild(nav)
    page.appendChild(title)
    page.appendChild(frame)
    page.appendChild(spacer)
    page.appendChild(footer)

    return page
}

//Title Creator
function createTitle() {
    //Show restaurant name
    let h2 = document.createElement('h2')
    let restaurantName = 'The Rusty Spatula(r)'

    h2.id = 'title'
    h2.innerText = restaurantName

    return h2
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

//ContentWindow function
function createContentWindow() {
    let content = document.createElement('div')

    content.id = 'content-frame'

    return content
}

//Create footer 
function createFooter() {
    //creates footer content and positions it.
    let footer = document.createElement('footer')
    let p = document.createElement('p')

    p.innerText = '*tetanus shots not included'
    p.style['text-align'] = 'center'
    p.style.margin = 'auto'

    footer.appendChild(p)

    return footer
}

//Create spacer 
function createSpacer() {
    //creates spacer element
    let spacer = document.createElement('div')
    spacer.classList.add('spacer')
    return spacer
}

export default loadPage;
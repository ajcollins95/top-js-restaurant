function menu() {
    //creates a menu inside a parent div (to enable flex
    //without changing content-frame)
    let parent = document.createElement('div');

    parent.classList.add('menu-container')
    parent.appendChild(createMenu())
    
    return parent
}

function createMenu() {
    //creates a menu display
    let menu = document.createElement('div');

    menu.classList.add('menu')
    let rows = 3
    for (let i = 0; i < rows; i++) {
        menu.appendChild(createRow(i))
    } 

    return menu
}

function createRow(i) {
    let row = document.createElement('div');

    row.classList.add('menu-row')
    row.appendChild(createCell(i*2))
    row.appendChild(createCell(i*2 + 1))

    return row
}

function createCell(i) {
    let cell = document.createElement('div');
    let item = document.createElement('div');
    let description = document.createElement('div');
    let price = document.createElement('div');

    cell.classList.add('menu-cell')

    item.classList.add('item')
    description.classList.add('description')
    price.classList.add('price')

    item.innerText = menuItems[i]
    description.innerText = menuDescriptions[i]
    price.innerText = menuPrices[i]

    cell.appendChild(item)
    cell.appendChild(price)
    cell.appendChild(description)

    
    return cell
}

let menuItems = ['One','Two','Three','Four','Five','Six']
let menuPrices = ['1.00','2.00','3.00','4.00','5.00','6.00']
let menuDescriptions = ['Yummy','Yummy yummy','Yummy yummy yummy',
'Yummy yummy yummy yummy', 'Yummy yummy yummy yummy yummmy',
'Yummy yummy yummy yummy yummmy yummy']

export default menu;
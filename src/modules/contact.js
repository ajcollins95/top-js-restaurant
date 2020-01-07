function contact() {
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    div.classList.add('contact')
    p1.innerText = 'Contact us at (111) 111-1111'
    p2.innerText = 'Email us at email@email.com'
    div.appendChild(p1)
    div.appendChild(p2)
    return div
}

export default contact;
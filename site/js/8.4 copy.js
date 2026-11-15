function onHeaderClick() {
    if (spoilerState) {
        element.classList.add('opened');
    } else {
        element.classList.remove('opened');
    }
}
function createSpoiler(element, state = false, decoration = '') {
    let spoilerState = state; 
    const header = element.querySelector('h6');
    element.classList.add('spoiler');
    if (spoilerState) {
        element.classList.add('opened');
    }
    if (decoration) {
        element.classList.add(decoration);
    }
    header.addEventListener('click', onHeaderClick);
}
function createSpoiler(element, state = false, decoration = '') {
    let spoilerState = state; 
    function onHeaderClick() {
        spoilerState = !spoilerState;
        if (spoilerState) {
            element.classList.add('opened'); // element берется из замыкания
        } else {
            element.classList.remove('opened');
        }
    }
    const header = element.querySelector('h6');
    element.classList.add('spoiler');
    if (spoilerState) {
        element.classList.add('opened');
    }
    if (decoration) {
        element.classList.add(decoration);
    }
    header.addEventListener('click', onHeaderClick);
}
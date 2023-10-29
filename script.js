//your JS code here. If required.
const targetElement = document.getElementById('level');


function getDomLevel(element) {
    let level = 0;
    let currentElement = element;

    while (currentElement !== document.documentElement) {
        currentElement = currentElement.parentNode;
        level++;
    }

    return level;
}


const domLevel = getDomLevel(targetElement);

alert(`The level of the element is: ${domLevel}`);


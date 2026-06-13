function initialize() {
    var myobj = {
        keys: "something",
        myarr: [1,3,45]
    }
    console.log(myobj.keys);
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const spans = document.querySelectorAll('span');
            const curtask = button.previousElementSibling.innerHTML;

            if (button.classList.contains('downButton')) {
                for (i = 0; i < spans.length; i++) {
                    if (spans[i].innerHTML == curtask) {
                        button.previousElementSibling.innerHTML = spans[i + 1].innerHTML;
                        spans[i + 1].innerHTML = curtask;
                        break;
                    }
                }

            } else if (button.previousElementSibling.innerHTML == "↓") {
                const spectask = button.parentElement.firstElementChild.innerHTML;
                for (i = 0; i < spans.length; i++) {
                    if (spans[i].innerHTML == spectask) {
                        button.parentElement.firstElementChild.innerHTML = spans[i - 1].innerHTML;
                        spans[i - 1].innerHTML = spectask;
                        break;
                    }
                }
            } else {
                for (i = 0; i < spans.length; i++) {
                    if (spans[i].innerHTML == curtask) {
                        button.previousElementSibling.innerHTML = spans[i - 1].innerHTML;
                        spans[i - 1].innerHTML = curtask;
                        break;
                    }
                }
            }
        });
    });
}

document.body.innerHTML = `
<div>
    <span>Prepare presentation</span>
    <button class="downButton" type="button">&darr;</button>
</div>
<div>
    <span>Read emails</span>
    <button class="downButton" type="button">&darr;</button>
    <button class="upButton" type="button">&uarr;</button></div>
<div>

    <span>Monthly report</span>
    <button class="upButton" type="button">&uarr;</button>
</div>`;

initialize();

document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();

console.log(document.body.innerHTML);
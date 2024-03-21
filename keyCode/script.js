
let box = document.querySelector('.box')
console.log(box)
window.addEventListener('keydown',(event)=>{
    box.innerHTML = `
        <div class="key">
            ${event.key=== ' ' ? 'space':event.key}
            <small>
                Event Key
            </small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>
                Event Key Code
            </small>
        </div>
        <div class="key">
            ${event.code}
            <small>
                Event Code
            </small>
        </div>
    `
})
const form = document.getElementById("color-form")
const colorSelect = document.getElementById("color-picker")
const schemeSelect = document.getElementById("scheme-select")

let data = {}
let colorArray = []
let hexValues = []

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    hexValues = []
    
    let colorS = colorSelect.value.replace('#', '')
    schemeSelect.value
    
    data = {
        color: colorS,
        scheme: schemeSelect.value
    }
    
    document.getElementById("color4-box").style.background = colorSelect.value
    document.getElementById("color4-name").textContent = colorSelect.value
    
    getScheme()
    //form.reset()
    
    
})

function getScheme(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${data.color}&mode=${data.scheme}&count=4`)
        .then(response => response.json())
        .then(colorData => {
            colorArray = colorData.colors
            
            for(let c of colorArray){
                hexValues.push(c.hex.value)
            }
        
            for(let i = 0; i < 4; i++ ){
                document.getElementById(`color${i}-box`).style.background = hexValues[i]
                document.getElementById(`color${i}-name`).textContent =  hexValues[i]
            }
    })      
}







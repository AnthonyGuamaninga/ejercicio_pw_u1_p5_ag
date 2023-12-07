
let result = 0
const getRandom= (max, idText) => {
    let value = document.getElementById(idText).innerText = Math.floor(Math.random()*max)
    sum(value)
    viewBtn(idText)
}

const sum = (value)=> {
    result = result + value
    console.log(result);
    document.getElementById('IdDisplay').innerText = result
}

const viewBtn = (id) =>{
    if(document.getElementById(id).innerText===""){
        document.getElementById(id).innerText="x"
    }
 
}
 
const noneBtn= (id) => {
    if(document.getElementById(id).innerText==="x"){
        document.getElementById(id).innerText=""
    }
}
let monsterContainer;
const back = document.getElementById("back")
let forward,backward
let pageNo = 1;
document.addEventListener("DOMContentLoaded",
function(){
     monsterContainer = document.getElementById("monster-container")

    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNo}`)
    .then(resp=>resp.json())
    .then((data)=>{
        updateMonsters(data)
    })
 forward = document.getElementById("forward")
forward.addEventListener("click",nextPage)
backward = document.getElementById("back")
backward.addEventListener("click",prevPage)

}

)

function updateMonsters(monsters){
    console.log(monsters)
    for(let i =0; i<monsters.length ; i++){
        
        monsterContainer.innerHTML +=`
        <h2>${monsters[i].name}</h2>
        <h4>Age: ${monsters[i].age}</h4>
        <p>${monsters[i].description}</p>
        ` 

    }

}

function nextPage(){

    monsterContainer.innerHTML = ""
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNo++}`)
    .then(resp=>resp.json())
    .then((data)=>{
updateMonsters(data)
    })
}
function prevPage(){
    if(pageNo>1){
    monsterContainer.innerHTML = ""
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNo--}`)
    .then(resp=>resp.json())
    .then((data)=>{
updateMonsters(data)
    })
}
else{
    return undefined
}
}
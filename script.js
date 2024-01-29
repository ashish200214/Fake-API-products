const mainDiv = document.getElementById("main-div");


async function fetchData(){
    try{
        let result = await fetch("https://dummyjson.com/products")
    let data
    if(result.ok){
        data = await result.json()
        console.log(data.products);
        data=data.products;
        
        //forEach
        data.forEach(display)
    }
    }
    catch(e){
        console.error("an error occurred : "+e)
    }
}



fetchData()

//display fucntion to display the content

function display(element){
    //subDiv
    const subDiv = document.createElement("div");
    //appending subDiv to mainDiv to show it 
    mainDiv.append(subDiv)
    subDiv.classList.add("sub-div")
    
    //image
    const img = document.createElement("img")
    img.src = element.images[0]
    img.classList.add("img")
    
    //title
    const title = document.createElement("h3")
    title.textContent = element.title;

    //btn of description
    const btn = document.createElement("button")
    btn.textContent = "Description"

    //div of description
    const divHidden = document.createElement("div")
    // divHidden.classList.add("div-hidden")

    //adding click eventlistener to the button description
    btn.addEventListener("click",function(event){
        
        console.log(event.target)
        
        if(divHidden.textContent===""){
            divHidden.textContent = element.description
         divHidden.style.display="block"

        }
        else{
            divHidden.textContent=""
            divHidden.style.display ="none"
        }
         
         
    })

    //appeding the content to subDiv
    subDiv.append(img,title,btn,divHidden)
}
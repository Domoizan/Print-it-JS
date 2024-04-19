
function add_dot(selsected){
    let dot=document.createElement("span")
    dot.classList.add("dot")
    if(selected)dot.classList.add("dot_selected")
    return dot
}

function change_dot(sel, old){
    let span=document.querySelector(`div[class=dots]`)
    span.children[old].classList.remove("dot_selected")
    span.children[sel].classList.add("dot_selected")
}

function change_img(slide){
    document.querySelector("img[class=banner-img]").src=`./assets/images/slideshow/${slide.image}`
    document.querySelector("#banner p").innerHTML=slide.tagLine
}

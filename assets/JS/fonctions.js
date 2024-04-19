
function add_dot(selected, cpt){
    let dot=document.createElement("span")
    dot.classList.add("dot")
    if(selected)dot.classList.add("dot_selected")
    dot.setAttribute("id",`dot_${cpt}`)
    Evt_dots.push(dot.addEventListener("click", function (e) {
        GestEvtDot(e.target.getAttribute("id").split('_')[1]*1);
        })
    )
    return dot
}

function GestEvtDot(idx){
    change_img(slides[idx])
    change_dot(idx,idx_slide)
    idx_slide=idx
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

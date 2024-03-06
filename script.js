function add(){
    document.getElementById("popup").style.transform="scale(1.5)"
    document.getElementById("popup").style.top="70px"
}
function submit(){
    document.getElementById("popup").style.transform="scale(0)"
    document.getElementById("popup").style.top="20px"
    var url=document.getElementById("url").value
    var name=document.getElementById("name").value
    if(name.trim()!="" && url.trim()!="" )

    var data= document.createElement("div")
    data.className="data"
    document.getElementById("content").appendChild(data)

    var dataTxt = document.createElement("p")
    dataTxt.className="dataTxt"
    dataTxt.innerHTML=name
    data.appendChild(dataTxt)

    var rdiv = document.createElement("div")
    rdiv.className="rdiv"
    data.appendChild(rdiv)

    var dataUrl=document.createElement("a")
    dataUrl.className="dataUrl"
    dataUrl.href=url
    dataUrl.innerText="Open"
    rdiv.appendChild(dataUrl)

    var dataDel=document.createElement("button")
    dataDel.innerHTML="Remove"
    dataDel.className="dataDel"
    dataDel.onclick= deleteData
    rdiv.appendChild(dataDel)

    document.getElementById("url").value=""
    document.getElementById("name").value=""
}

function deleteData(){
    var elm= this.parentNode.parentNode
    elm.remove()
}


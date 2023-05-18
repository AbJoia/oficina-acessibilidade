var nodes = document.getElementById("root").childNodes;
console.log(nodes)
for(var i = 0; i < nodes.length; i++){
    if(nodes[i].nodeName === "BUTTON"){
        var attributes = nodes[i].attributes;
        if(attributes.length === 0){
            nodes[i].style.visibility = 'hidden';
        }
        for(var j = 0; j < attributes.length; j++){
            if(attributes[j].nodeName !== "role"){
                nodes[i].style.visibility = 'hidden';
            }
        }
    };
}

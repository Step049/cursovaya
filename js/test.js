function showHide(element_id,button) {
    if (document.getElementById(element_id, button)) { 
        let obj = document.getElementById(element_id); 
        let butt = document.getElementById(button); 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
            butt.className = "button-on";
        }
        else {
            obj.style.display = "none";
            butt.className = "button-off";
        }
    }
    else alert("Элементы с id: " + element_id + button + " не найдены!"); 
} 





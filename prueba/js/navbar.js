let dropDownList = document.getElementById('dropdown')
let dropDownMenu = document.getElementById('nota-dropdown')

dropDownMenu.onmouseenter = showDropDown
dropDownMenu.onmouseleave = hideDropDown

dropDownList.onmouseenter = showDropDown
dropDownList.onmouseleave = hideDropDown

function showDropDown(){
    dropDownList.style.opacity = '1'
}

function hideDropDown(){
    dropDownList.style.opacity = '0'
}
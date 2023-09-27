function changeRecipe(source) {
    document.getElementById("recipe-iframe").style.width = "100%";
    document.getElementById("recipe-iframe").style.height = "900px";
    const recipeIframe = document.getElementById('recipe-iframe');
    recipeIframe.src = source; // Set the iframe src to the selected recipe
}

function reset_site(){
    document.getElementById("recipe-iframe").style.width = "0";
    document.getElementById("recipe-iframe").style.height = "0";
}

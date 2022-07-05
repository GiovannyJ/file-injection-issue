function fileValidate(id){
    //get element
    var fileInput = document.getElementById(id);
    //get path
    var filePath = fileInput.value;
    //allowed extentions
    var allowedExtentions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    //if the exention is not in the path then reject
    if(!allowedExtentions.exec(filePath)){
        alert('invalied file type');
        //reset value so it doesnt return on screen
        fileInput.value = '';
    }
}
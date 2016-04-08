function showPic(){
    var oA=document.getElementsByTagName('a');
    var placeholder=document.getElementById("placeholder");
    var oDescription=document.getElementById("description");

    for(var i=0;i<oA.length;i++){
        oA[i].onclick= function () {
            var source=this.getAttribute('href');
            var otitle=this.getAttribute('title');
            placeholder.setAttribute("src",source);
            oDescription.firstChild.nodeValue=otitle;
            return false;
        }
    }
}

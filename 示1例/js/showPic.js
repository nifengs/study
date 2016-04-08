/**
 * Created by wangzan on 2015/10/20.
 */
function showPic(whichPic){
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text=whichPic.getAttribute("title");
    var decription=document.getElementById("description");
    decription.firstChild.nodeValue=text;
}

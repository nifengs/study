/**
 * Created by wangzan on 2015/10/27.
 */
//加载
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload= function () {
            oldonload();
            func();
        }
    }
}
//书写insertAfter方法
function insertAfter(newElement,targetElement{
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElementw);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
})
function highlightPage(){
    //检测
    if(!document.getElementsByTagName)
    return false;
    if(!document.getElementById)
    return false;
    var headers=document.getElementsByTagName('header');
    if(headers.length==0)
    return false;
    var navs=headers[0].getElementsByTagName('nav');
    if(navs.length==0)
    return false
    //取得导航链接
    var links=navs[0].getElementsByTagName('a');
    var linkurl;
    for (var i=0;i<links.length;i++){
        linkurl=links[i].getAttribute('href');
        if(window.location.href.indexOf(linkurl)!=-1){
            links[i].className='here';
            var linktext=links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}
addLoadEvent(highlightPage);
//幻灯片

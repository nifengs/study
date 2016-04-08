/**
 * Created by wangzan on 2016/3/23.
 */

//创建个对象
function vquery(varg){
    this.elements=[];//选择元素的集合
    switch (typeof varg){
        case 'function':
    }
};


//返回创建的对象
function $(varg){
    return new vquery(varg);
};
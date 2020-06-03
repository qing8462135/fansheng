function ajax(type,url,params,dataType,callback) {
    var xhr = null;
    if(window.XMLHttpRequest){//用来区分浏览器
        xhr = new XMLHttpRequest();
    }else{
        xhr = new AbortController("Microsoft.XMLHTTP");
    }
    if(type == "get"){
        url += "?"+params;
    }
    xhr.open(type,url,true);
    if(type == "get"){
        xhr.send(null);
    }else if(type == "post"){
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            var result = null;
            var result1 = null;
            if(dataType == "json"){
                result1 = JSON.parse(xhr.responseText);
                result = result1.data;
            }else if(dataType == "xml"){
                result1 = xhr.responseXML;
                result = result1.data;
            }else{
                result1 = xhr.responseText;
                result = result1.data;
            }
            callback(result,xhr.responseText);
        }
    }
}
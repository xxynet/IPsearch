function GetIPInfo(ip)
{
    $.getJSON("https://api.xsot.cn/ip/?ip="+ip,function(data,status)
        {
           return data.addr;
        })
}
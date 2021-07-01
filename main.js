function SearchIP(ip)
{
    $.getJSON("https://api.xsot.cn/ip/?ip="+ip,function(data,status){
        return data.addr;
    })
}



{/* <script>
    $(document).ready(function(){
        $("#search").click(function(){
            // $("#sip").text(GetIPInfo(ip))
                $("#sip").text("查询中……")
                $("#cip").text("");
                var ip = $("#ip").val();
                $.getJSON("https://api.xsot.cn/ip/?ip="+ip,function(data,status){
                    $("#sip").text(ip)
                    $("#cip").text(data.addr);
                })
            })
    })
</script> */}
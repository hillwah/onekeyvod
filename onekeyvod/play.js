var vodapi = 'http://www.hillwah.net/vod/vod.html#!url=';
host = window.location.host;

if (host === "www.yyets.com") {
    $(".resod_list > li").each(function(i, n){
        var href = $(this).find("a[type='ed2k']").attr('href');
        var link = vodapi + href;
        $(this).find(".r a[class='subtitle']").after("<a class='f5' style='cursor: text;'>|</a><a href='" + link + "' style='float:left;display: inline-block;background: #DC2E33;border: 1px solid #cc0007;color: white;padding: 1px 2px;border-radius:2px;margin-right: 2px;margin-top: 1px;margin-bottom: 1px;' target='_blank'>云</a>");
})
} else if (host === "imax.im") {
    $("tbody > tr").each(function(i, n) {
        var href = $(this).find(".name a").attr('href');
        var link = vodapi + href;
        $(this).find("td[class='opts']").prepend("<a href='" + link + "' class='btn btn-mini' target='_blank'>云</a>");
    })
}
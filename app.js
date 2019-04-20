//var articleToSearch = $("#search-article").val();
var articleToSearch = $('#search-article').val();
var pubData = $('#pub-year').val();
var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=election&pub_year=${pubDate}&page=1&sort=newest&api-key=4Gfcr4VEPhIGGaDJ8A3gjBJbDRs80nLr`;

function getData() {
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}
$(".search-content").submit(loadData);
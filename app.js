//var articleToSearch = $("#search-article").val();
var articleToSearch = $('search-article').val();
var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${articleToSearch}&page=1&sort=newest&api-key=4Gfcr4VEPhIGGaDJ8A3gjBJbDRs80nLr`;

function getData() {
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}
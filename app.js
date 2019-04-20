//var articleToSearch = $("#search-article").val();
var articleToSearch = $('#search-article').val();
var pubData = $('#pub-year').val();
var numberOfRecords = $("#numberRecords").val();
var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${articleToSearch}&pub_year=${pubData}&page=1&sort=newest&api-key=4Gfcr4VEPhIGGaDJ8A3gjBJbDRs80nLr`;

function getData() {
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i < 0; i < numberOfRecords; i++) {
            $("").append(
                '<li class="article">' +
                '<a href="' +
                response.docs[i].web_url +
                '">' +
                response.docs[i].headline.main +
                "</a>" +
                "<p>" +
                response.docs[i].snippet +
                "</p>" +
                "</li>"
            );
        }
    })
}
getData();
$(".search-content").submit(getData);
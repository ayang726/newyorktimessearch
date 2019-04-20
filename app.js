

var articleToSearch;
var numberOfRecords;
var pubData;
var endYear;
var url;

$("#search").on("click", function (e) {
    e.preventDefault();
    articleToSearch = $("#searchTerm").val();
    numberOfRecords = 5;
    pubData = $("#startYear").val();
    endYear = $("#endYear").val();
    url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=election&pub_year=2019&page=1&sort=newest&api-key=4Gfcr4VEPhIGGaDJ8A3gjBJbDRs80nLr`;
    if (searchTerm !== "" && numberOfRecords !== "") {
        // ajax request
        getData();
    }
})

function getData() {
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < numberOfRecords; i++) {
            $("#articleList").append(
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
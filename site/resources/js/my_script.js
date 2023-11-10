

function getStuff() {
    
    console.log("hello old chap");
    // var url = 'http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
    var url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';


    url = '/blah'
    // $.ajax({type: 'GET',
    //         url: url,
    //         dataType: "jsonp",
    //         async: true,
    //         crossDomain: true,
    //         headers: {
    //             "accept": "application/json",
    //             "Access-Control-Allow-Origin":"*",
    //             "X-Content-Type-Options": "nosniff"
    //         }}).then(data => {
    //     console.log(data);
    // })
    $.ajax({url: url, dataType:'json', type:'post'}).then(data => {
        console.log(data);
    })
}

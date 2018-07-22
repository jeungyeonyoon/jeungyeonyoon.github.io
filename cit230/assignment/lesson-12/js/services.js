function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<tr><td>' + arr[i].name + '</td><td>' +
        arr[i].price + '$'+ '</td></tr>' ;
    }
    document.getElementById("tablea").innerHTML = out ;
}

/*var requestURL = 'js/services.json';
  //my services.json file is in js file. 
  var request = new XMLHttpRequest();

  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
      var response = request.response;

      console.log(response.services);

      $.each(response.services, function (i, item) {
          var tr = $('<tr>');
          var td1 = $('<td>');
          var td2 = $('<td>');

          td1.text(item.name);
          td2.text('$' + item.price.toFixed(2));

          tr.append(td);
          tr.append(td);


          var tr = $('<tr>').append(
              $('<td>').text(item.name),
              $('<td>').text('$' + item.price.toFixed(2))
          );
          $("table").append(tr);
      });

  }
*/
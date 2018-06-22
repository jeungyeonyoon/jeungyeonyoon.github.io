var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townsInfo = request.response;
    showTowns(townsInfo);
}

function showTowns(jsonObj) {
    var towns = jsonObj['towns'];
    for (var i = 0; i < towns.length; i++) {

        if (towns[i].name != "Placerton") {
            var myArticle = document.createElement('article');
            myArticle.className = "articleCity";
            var myDiv = document.createElement('div');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myDiv2 = document.createElement('div');
            myDiv2.className = "ImgDiv";
            var myImage = document.createElement('img');
            myImage.setAttribute('width', '100%');
            if (towns[i].name == "Springfield") {
                myImage.setAttribute('alt', 'springfield-city');
                myImage.setAttribute('src', 'images/jsonimage1.jpg');
            } else if (towns[i].name == "Greenville") {
                myImage.setAttribute('alt', 'greenville-city');
                myImage.setAttribute('src', 'images/jsonimage2.jpg');
            } else if (towns[i].name == "Franklin") {
                myImage.setAttribute('alt', 'franklin-city');
                myImage.setAttribute('src', 'images/jsonimage3.jpg');
            }

            myH2.textContent = towns[i].name;
            myPara1.textContent = 'Motto: ' + towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

            myDiv.appendChild(myH2);
            myDiv.appendChild(myPara1);
            myDiv.appendChild(myPara2);
            myDiv.appendChild(myPara3);
            myDiv.appendChild(myPara4);
            myDiv2.appendChild(myImage);
            myArticle.appendChild(myDiv);
            myArticle.appendChild(myDiv2);
            section.appendChild(myArticle);
        }

    }
}

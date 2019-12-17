//  Food Central General Search

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const url_cn1 = "https://api.icndb.com/jokes/random";
const url_cn2 = "https://api.chucknorris.io/jokes/random";
const url_jo = "https://official-joke-api.appspot.com/jokes/random";
const url_tr = "https://opentdb.com/api.php?amount=1";
const url_fa = "https://uselessfacts.jsph.pl/random.json?language=en";
const url_an = "https://kitsu.io/api/edge/anime?filter[id]=";
const url_dp = "https://dog.ceo/api/breeds/image/random";

const url_qu = "https://api.quotable.io/random";
const url_sq = "https://thesimpsonsquoteapi.glitch.me/quotes";



let fetchData = {
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json"
};

//to check json
/*fetch(url_qu2)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML  = JSON.stringify(data, undefined, 2);
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML = error;
  });  */

function music(num){
  switch(num){
      case 1:document.getElementById("music").load(); 
        document.getElementById("music").play();
        break;
      case 2:document.getElementById("music1").load();
        document.getElementById("music1").play();
        break;
      case 3:document.getElementById("music2").load(); 
        document.getElementById("music2").play();
        break;
      case 4:document.getElementById("music3").load(); 
        document.getElementById("music3").play();
        break;
      case 5:document.getElementById("music4").load(); 
        document.getElementById("music4").play();
        break;
      case 6:document.getElementById("music5").load(); 
        document.getElementById("music5").play();
        break;
      case 7:document.getElementById("music6").load(); 
        document.getElementById("music6").play();
        break;
      case 8:document.getElementById("music7").load(); 
        document.getElementById("music7").play();
        break;
    }
}
function loadJ1() {
  fetch(url_cn1)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML = data.value.joke;
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML = error;
    });
} //cn1

function loadJ2() {
  fetch(url_cn2)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML = data.value;
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML = error;
    });
} //cn2

function loadJ3() {
  fetch(url_jo)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML =
        data.setup + "<br><br>" + data.punchline;
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML = error;
    });
} //joke
function loadtr() {
  fetch(url_tr)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML =
        data.results[0].question + "<br><br>inc: " + data.results[0].incorrect_answers +"<br><br>cor: "+data.results[0].correct_answer;
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML = error;
    });
} //trivia

function loadan() {
  //url_an +=14269;

  fetch(url_an + ranNum(14269))
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML = data.data[0].attributes.slug;
    })
    .catch(function(error) {
      document.getElementById("anime").innerHTML = error;
    });
} //anime

function loadfa() {
  fetch(url_fa)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML = data.text;
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML = error;
    });
} //ranfavct
function loaddf() {
  let url = "https://some-random-api.ml/facts/dog";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML  = json.fact;
     });
   });
} //dogfact
function loadcf2() {
  let url = "https://some-random-api.ml/facts/cat";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML  = json.fact;
     });
   });
} //cat fact
function loadpf() {
  let url = "https://some-random-api.ml/facts/panda";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML  = json.fact;
     });
   });
} //panda fact
function loadff() {
  let url = "https://some-random-api.ml/facts/fox";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML  = json.fact;
     });
   });
} //foxy facts
function loadbf() {
  let url = "https://some-random-api.ml/facts/bird";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML  = json.fact;
     });
   });
} //birbfact
function loadkf() {
  let url = "https://some-random-api.ml/facts/koala";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML  = json.fact;
     });
   });
} //koala

function loadcf() {
   let url = "https://cat-fact.herokuapp.com/facts";
 var x = ranNum(228);
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML  = json.all[x].text + " <br>submitted by " + json.all[x].user.name.first + json.all[x].user.name.last;
     });
   });
} //cat fact
function loadmeme() {
   let url = "https://some-random-api.ml/meme";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.image+' " >';
     });
   });
} //meme



function loadpika() {
   let url = "https://some-random-api.ml/pikachuimg";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadhug() {
   let url = "https://some-random-api.ml/animu/hug";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadpat() {
   let url = "https://some-random-api.ml/animu/pat";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadwink() {
   let url = "https://some-random-api.ml/animu/wink";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadkoala() {
   let url = "https://some-random-api.ml/img/koala";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadpanda() {
   let url = "https://some-random-api.ml/img/panda";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadrpanda() {
   let url = "https://some-random-api.ml/img/red_panda";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadbirb() {
   let url = "https://some-random-api.ml/img/birb";

  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadfox() {
   let url = "https://some-random-api.ml/img/fox";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loadcat() {
   let url = "https://some-random-api.ml/img/cat";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme
function loaddog() {
   let url = "https://some-random-api.ml/img/dog";
  fetch(proxyUrl + url).then(function(response) {
       response.json().then(function(json) {
           document.getElementById("main").innerHTML = '<img src="' +json.link+' " >';
     });
   });
} //meme

/*function loadload() {
      document.getElementById("body").innerHTML += '<div class="button" onclick="loadload()" >yeet</div>';
} //yeet++
*/
function loadqu() {
  fetch(url_qu)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML = data.content+"<br><br>"+data.author;
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML = error;
    });
} //quote

function loadsq() {
  fetch(url_sq)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML = data[0].quote +"<br><br>"+data[0].character;
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML = error;
    });
} //quotes ,but simpsons

function loaddp() {
  fetch(url_dp)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("main").innerHTML = '<img src="' +data.message+' " >';
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML = error;
    });
} //dog pic

function ranNum(max) {
  return Math.round(Math.random() * max);
} //ranNum











function view(x){
  switch(x){
			case 1:
				
        document.getElementById("text").className = "unhidden";
        document.getElementById("audio").className = "hidden";
        document.getElementById("image").className = "hidden";
				break;
			
			case 2:
				document.getElementById("text").className = "hidden";
        document.getElementById("audio").className = "hidden";
        document.getElementById("image").className = "unhidden";
				
				break;
			case 3:
				document.getElementById("text").className = "hidden";
        document.getElementById("audio").className = "unhidden";
        document.getElementById("image").className = "hidden";
				
				break;
			default:
				document.getElementById("text").className = "unhidden";
        document.getElementById("audio").className = "hidden";
        document.getElementById("image").className = "hidden";
				break;
			
		}	
  
  
}


function changeVisibility(divID) {
	var element = document.getElementById(divID);
	
	if (element){
		element.className = (element.className == "hidden") ? "unhidden" : "hidden";
	}
}




/*function getDataFromCache(){
  if (!('caches' in window)) {
    return null;
  }
  const url = `${window.location.origin}/forecast/${coords}`;
  return caches.match(url)
      .then((response) => {
        if (response) {
          return response.json();
        }
        return null;
      })
      .catch((err) => {
        console.error('Error getting data from cache', err);
        return null;
      });
}
*/
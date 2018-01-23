var url = 'https://api.whatdoestrumpthink.com/api/v1/quotes',
    xhrBtn    = document.querySelector("#xhr"),
    fetchBtn  = document.querySelector("#fetch"),
    jqueryBtn = document.querySelector("#jquery"),
    axiosBtn  = document.querySelector("#axios"),
    display   = document.querySelector("#Quote");

xhrBtn.addEventListener("click",function() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      var randomIndex = Math.floor(Math.random() * 48);
      var Quote = JSON.parse(XHR.responseText).messages.non_personalized[randomIndex];
      display.innerText = Quote;
    }
  }
  XHR.open("GET",url);
  XHR.send();
});

fetchBtn.addEventListener("click",function() {
  fetch(url)
  .then(function(req) {
    req.json().then(function(data){
      var randomIndex = Math.floor(Math.random() * 48);
      var Quote = data.messages.non_personalized[randomIndex];
      display.innerText = Quote;
    })
  })
  .catch(function(err) {
    alert("Error");
    console.log(err);
  })
})

$("#jquery").click(function() {
  $.getJSON(url)
  .done(function(data) {
    var randomIndex = Math.floor(Math.random() * 48);
    var Quote = data.messages.non_personalized[randomIndex];
    $("#Quote").text(Quote);
  })
  .fail(function(err) {
    alert("Error");
    console.log(err);
  })
})

axiosBtn.addEventListener("click",function() {
  axios.get(url)
  .then(function(res) {
    var randomIndex = Math.floor(Math.random() * 48);
    var Quote = res.data.messages.non_personalized[randomIndex];
    display.innerText = Quote;
  })
  .catch(function(e) {
    alert("Error");
    consile.log(e);
  })
})
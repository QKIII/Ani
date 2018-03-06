var animation = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})

$(".plus").click(function(){
    alert("The paragraph was clicked.");
});
$(".minus").click(function(){
    alert("The paragraph was clicked.");
});
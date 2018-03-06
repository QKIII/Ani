var animation = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})

$(".plus").click(anim.play());
$(".minus").click(anim.pause());

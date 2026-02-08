var posts=["2026/02/08/免费VPS/","2025/11/30/应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
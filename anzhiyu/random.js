var posts=["2025/12/13/ceshi/","2025/11/30/应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
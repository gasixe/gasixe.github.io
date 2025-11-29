var posts=["2025/11/08/1323/","2025/11/08/garsixie/","2025/11/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
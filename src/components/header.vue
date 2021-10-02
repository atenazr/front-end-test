<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid mx-4">
    <a class="navbar-brand" href="#">
      <img src="imdb_icon.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      movie
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>

      </ul>

      <div class="d-flex px-3">
        <div class="mx-2" @click="loginForm" href=""><img src="account_avatar.png" alt=""></div> &nbsp;&nbsp;
        <div class="mx-2" href=""><img  src="buy_cart.png" alt=""></div>
      </div>

    </div>
  </div>
    </nav>
</template> 

<script>
export default {
    name:'header',

}
</script>
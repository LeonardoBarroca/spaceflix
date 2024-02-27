
<template>
  <main>
    <div id="carouselExampleDark" class="carousel carousel-light slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="/bg7.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Sistema Solar</h5>
            <p>Encontre informações sobre o Sistema Solar</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="/bg5.jpg" class="d-block w-100" alt="...">


          <div class="carousel-caption d-none d-md-block">
            <h5>Galáxias</h5>
            <p>Consuma dados sobre Galáxias</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/bg6.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Vídeos</h5>
            <p>Assista vídeos selecionados sobre astronomia</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <div class="home-img-text d-flex" style="height: 300px;">
      <div class="d-flex text-center align-items-center p-2">
        <h5>A Spaceflix foi feita para você encontrar diversos
          conteúdos sobre astronomia de forma simples e
          intuitiva</h5>
      </div>

      <img class="home-img" src="/home2.jpg" alt="galáxia">
    </div>

    <div class="home-img-text d-flex" style="height: 300px;">
      <img class=" home-img" src="/home1.jpg" alt="céu estrelado">

      <div class="d-flex text-center align-items-center p-2">
        <h5>Contamos com seu feedback para evoluirmos e enriquecermos nossa plataforma</h5>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-img {
  scale: 0.7;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .home-img-text {
    flex-direction: column;
  }
}</style>
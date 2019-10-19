<template>
  <div>
    <header id="header" class="header shadow">
      <h1 class="text-center display-4">Dale vida a tus proyectos con Mline</h1>
      <h3 class="text-center display-5">Soluciones en Gestión</h3>
    </header>
    <section class="container-fluid">
      <div class="row">
        <div class="col">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://via.placeholder.com/1200x500" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://via.placeholder.com/1200x500" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://via.placeholder.com/1200x500" class="d-block w-100" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div>Traemos soluciones a tu empresa y le damos vida a tus ideas</div>
      <div class="row">
        <div class="col flex-colum">
          <font-awesome-icon class="display-1":icon="['fas', 'laptop-code']" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
#header {
  background: url('../assets/home.gif') no-repeat fixed;
  background-size: cover;
}
</style>

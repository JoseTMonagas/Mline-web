<template>
  <div v-cloak>
    <header id="header" class="header shadow">
      <h1 class="text-center display-4">Dale vida a tus proyectos con Mline</h1>
      <h3 class="text-center display-5">Soluciones en Gestión</h3>
    </header>
    <section class="container-fluid">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/hands.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/usuario.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/eficiente.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/gestionar.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="../assets/tiempo.png" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid">
      <section class="container">
        <h2 class="display-5 title border-bottom mt-5">
          Traemos soluciones a tu empresa y le damos vida a tus ideas
        </h2>
        <div class="row mb-5">
          <div class="col mb-2 mb-md-0">
            <a
              href="/servicios#software"
              class="btn btn-outline-dark shadow py-lg-4"
            >
              <div class="d-flex flex-column align-items-center">
                <font-awesome-icon
                  class="display-1"
                  :icon="['fas', 'terminal']"
                />
                <h5 class="title border-bottom">
                  Desarrollo Software
                </h5>
                <p>Hecho a la medida, haciendo mas eficiente tus procesos</p>
              </div>
            </a>
          </div>
          <div class="col mb-2 mb-md-0">
            <a href="/servicios#web" class="btn btn-outline-dark shadow py-4">
              <div class="d-flex flex-column align-items-center">
                <font-awesome-icon class="display-1" :icon="['fas', 'code']" />
                <h5 class="title border-bottom">
                  Desarrollo web
                </h5>
                <p>Responsive, con diseño profesional</p>
              </div>
            </a>
          </div>
          <div class="col mb-2 mb-md-0">
            <a href="/servicios#red" class="btn btn-outline-dark shadow py-4">
              <div class="d-flex flex-column align-items-center">
                <font-awesome-icon
                  class="display-1"
                  :icon="['fas', 'network-wired']"
                />
                <h5 class="title border-bottom">
                  Soluciones de red
                </h5>
                <p>Conecta tu empresa, vuélvete global</p>
              </div>
            </a>
          </div>
          <div class="col mb-2 mb-md-0">
            <a
              href="/servicios#sistemas"
              class="btn btn-outline-dark shadow py-4"
            >
              <div class="d-flex flex-column align-items-center">
                <font-awesome-icon
                  class="display-1"
                  :icon="['fas', 'desktop']"
                />
                <h5 class="title border-bottom">
                  Integración de sistemas
                </h5>
                <p>Proveemos instalación y soporte a distintos sistemas</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
    <div class="container-fluid" id="contactenos">
      <div class="row p-5 ml-4 align-items-center justify-content-center">
        <h2 class="display-5 text-light">
          ¿Que esperas?, Mline te ayuda a crecer:
        </h2>
        <router-link class="ml-lg-5 btn btn-outline-light" to="/contacto">
          <b class="mr-2 h1">Contáctenos</b>
        </router-link>
      </div>
    </div>
    <div class="container-fluid py-3 bgc-dark">
      <section class="container my-5">
        <h2 class="display-5 title border-bottom">
          Conoce a nuestros partners
        </h2>
        <article class="row">
          <div class="col-lg-4 mb-2 mb-lg-0">
            <a
              href="https://www.grenke.cl/es.html"
              target="__BLANK"
              class="btn btn-outline-light"
            >
              <div class="card-body">
                <img
                  class="img-fluid"
                  src="../assets/GRENKE_logo_180@2x.png"
                  alt=""
                />
                <p class="card-text">
                  Consigue leasing para tus proyectos Mline en Hardware y
                  Software con Grenke, desde los 400 mil pesos.
                </p>
              </div>
            </a>
          </div>
          <div class="col-lg-4 mb-2 mb-lg-0">
            <a
              href="https://www.geovictoria.com/"
              target="__BLANK"
              class="btn btn-outline-light"
            >
              <div class="card-body">
                <img
                  class="img-fluid"
                  src="../assets/marca-GV-LATAM.png"
                  alt=""
                />
                <p class="card-text">
                  MLine es representante de GeoVictoria desde Valdivía a Chiloe;
                  ventas y soporte en equipos de Control de Asistencia.
                </p>
              </div>
            </a>
          </div>
          <div class="col-lg-4 mb-2 mb-lg-0">
            <a href="#" target="__BLANK" class="btn btn-outline-light">
              <div class="card-body">
                <img class="img-fluid" src="../assets/One.png" alt="" />
                <p class="card-text">
                  Automatización y desarrollo de software para control de
                  maquinas y procesos productivos.
                </p>
              </div>
            </a>
          </div>
        </article>
        <article class="row my-4">
          <div class="col-lg-4 mb-2 mb-lg-0 offset-lg-2">
            <a
              href="https://itagroup.cl/"
              target="__BLANK"
              class="btn btn-outline-light"
            >
              <div class="card-body">
                <img class="img-fluid" src="../assets/Ita.png" alt="" />
                <p class="card-text">
                  ITA es un fabricante y mayorista de hardware el cual nos
                  provee de los equipos necesarios para implementar proyectos de
                  hardware, puntos de ventas, y accesorios.
                </p>
              </div>
            </a>
          </div>
          <div class="col-lg-4 mb-2 mb-lg-0">
            <a
              href="https://buk.cl/"
              target="__BLANK"
              class="btn btn-outline-light"
            >
              <div class="card-body">
                <img class="img-fluid" src="../assets/buk.png" alt="" />
                <p class="card-text">
                  Software de remuneraciones integrado con Geovictoria para el
                  control de asistencias.
                </p>
              </div>
            </a>
          </div>
        </article>
      </section>
    </div>
    <section class="container py-5">
      <h2 class="display-5 title border-bottom">
        Algunos de nuestros clientes
      </h2>
      <article class="row  align-items-center justify-content-center">
        <div class="col-lg-3">
          <img class="img-fluid" src="../assets/Cermaq_logo.png" alt="" />
        </div>
        <div class="col-lg-3">
          <img class="img-fluid" src="../assets/Sercotec.png" alt="" />
        </div>
        <div class="col-lg-3">
          <img class="img-fluid" src="../assets/compass-group.png" alt="" />
        </div>
      </article>
      <article class="row align-items-center justify-content-center">
        <div class="col-lg-3">
          <img class="img-fluid" src="../assets/fiordo.png" alt="" />
        </div>
        <div class="col-lg-3">
          <img class="img-fluid" src="../assets/ingenieria-sur.jpg" alt="" />
        </div>
        <div class="col-lg-3">
          <img class="img-fluid" src="../assets/movil-falabella.png" alt="" />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted: function() {
    document.getElementById('carouselExampleControls').carousel();
  },
};
</script>
<style lang="scss" scoped>
#header {
  background: url('../assets/home.gif') no-repeat fixed;
  background-size: cover;
}
a:hover {
  text-decoration: none;
}
#contactenos {
  background: url('../assets/cyber-3400789_1280.jpg') no-repeat fixed;
  background-size: cover;
}
.bgc-dark {
  background-color: $dark;
}
</style>

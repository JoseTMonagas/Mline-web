<template>
  <div>
    <header id="header" class="header shadow">
      <h1 class="text-right display-4">Servicios</h1>
      <h3 class="text-right display-5">Soluciones a tu medida</h3>
    </header>
    <section class="container">
      <article class="row my-2 p-5">
        <div class="col-4">
          <img
            src="../assets/security-265130_1280.jpg"
            alt="Codigo de seguridad"
            class="img-fluid rounded-circle shadow"
          />
        </div>
        <div class="col">
          <h4 class="subtitle border-bottom">Desarrollo Software</h4>
          <p class="text-justify">
            Convertiremos tus ideas en aplicaciones tecnológicas que se ajusten
            a tus necesidades. En Mline nos comprometemos a brindar soluciones a
            las empresas: Software a la medida, venta de licencias, pruebas de
            software, aseguramiento de la calidad, integración de sistemas.
            Convierte tu idea de negocia en realidad con nosotros.
          </p>
        </div>
      </article>
      <article class="row p-5 my-2">
        <div class="col">
          <h4 class="subtitle border-bottom">Desarrollo Web</h4>
          <p class="text-justify">
            Crearemos un sitio web adaptable (Responsive) con diseño profesional
            y personalizado. Dale vida a tu negocio, portafolio, tienda virtual
            o aplicación web con Mline.
          </p>
        </div>
        <div class="col-4">
          <img
            src="../assets/webdesign-3411373_640.jpg"
            alt="Computadora con
          una pagina web"
            class="img-fluid rounded-circle shadow"
          />
        </div>
      </article>
      <article class="row p-5 my-2">
        <div class="col-4">
          <img
            src="../assets/network-2402637_640.jpg"
            alt="Red de intranet de una empresa"
            class="img-fluid rounded-circle shadow"
          />
        </div>
        <div class="col">
          <h4 class="subtitle border-bottom">Soluciones de Red</h4>
          <p class="text-justify">
            Implementa una red de datos robusta y con capacidad de crecimiento
            para soportar adecuadamente tus comunicaciones, aplicaciones y
            procesos corporativos, mediante ingeniería certificada, diseño e
            implementación según estándares internacionales de calidad.
          </p>
        </div>
      </article>
      <article class="row p-5 my-2">
        <div class="col">
          <h4 class="subtitle border-bottom">Integración de Sistemas</h4>
          <p class="text-justify">
            Disponemos de una alta gama de software para traer soluciones a tus
            procesos: Facturador Electrónico, control de inventario, cuentas de
            clientes y proveedores. Ademas Mline es representante de GeoVictoria
            desde Valdivia hasta Chiloe, incorpora ahora un sistema de control
            de asistencias a tu empresa con nosotros.
          </p>
        </div>
        <div class="col-4">
          <img
            src="../assets/stock-1863880_640.jpg"
            alt="Programa para el estudio del Stock"
            class="img-fluid rounded-circle shadow"
          />
        </div>
      </article>
      <agile class="container agile mx-auto mb-5">
        <div class="d-flex flex-row">
          <div class="col">
            <img
              src="../assets/menu-project-mline.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-4 d-flex flex-column justify-content-center">
            <h5 class="subtitle border-bottom">Project Mline</h5>
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="d-flex flex-row">
          <div class="col">
            <img
              src="../assets/Anotacion-2019-09-30-144145.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-4 d-flex flex-column justify-content-center">
            <h5 class="subtitle border-bottom">ERP Mline</h5>
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="d-flex flex-row">
          <div class="col">
            <img
              src="../assets/banner-geovictoria.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-4 d-flex flex-column justify-content-center">
            <h5 class="subtitle border-bottom">Control de Asistencia</h5>
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <template slot="prevButton">
          <font-awesome-icon :icon="['fas', 'chevron-left']"/>
        </template>
        <template slot="nextButton">
          <font-awesome-icon :icon="['fas', 'chevron-right']"/>
        </template>
      </agile>
    </section>
  </div>
</template>
<script charset="utf-8">
import {VueAgile} from 'vue-agile';

export default {
  components: {
    agile: VueAgile,
  },
};
</script>
<style lang="scss" scoped>
#header {
  background: url('../assets/background-2426328_1920.jpg') no-repeat fixed;
  background-size: cover;
}

article:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

.agile ::v-deep {
  .agile__nav-button{
    background-color: rgba(0,0,0,0.0);
    border: none;
  }

  .agile__dots {
    position: absolute;
    top: 100%;
    transform: translateY(-50%);
    left: 50%;
  }
  .agile__dot {
    display: block;
    margin: 4px;
    cursor: pointer;

    button {
      display: inline-block;
      width: 14px;
      height: 14px;
      filter: Alpha(Opacity=50);
      opacity: 0.5;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      background: $dark;
      position: relative;
    }
  }
}
</style>

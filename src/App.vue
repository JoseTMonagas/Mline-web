<template>
  <div id="app" v-cloak class="container-fluid p-0">
    <header id="content-wrapper" class="container-fluid m-0 p-3">
      <nav id="nav" class="navbar navbar-expand-lg">
        <div class="d-flex flex-row align-items-center">
          <div class="mr-2">
            <button
              class="navbar-toggler btn btn-outline-light"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
          </div>
          <a class="navbar-brand" href="#">
            <img
              alt="Logo Mline"
              class="img-fluid"
              src="./assets/logomlinespa-2.png"
            />
          </a>
        </div>
        <div
          id="navbarTogglerDemo03"
          class="col-8 offset-2 collapse navbar-collapse my-auto"
        >
          <router-link class="btn btn-outline-light mx-2 border-0" to="/"
            >Home <font-awesome-icon :icon="['fas', 'home']"
          /></router-link>
          <router-link
            class="btn btn-outline-light mx-2 border-0"
            to="/nosotros"
            >Nosotros <font-awesome-icon :icon="['fas', 'user-friends']"
          /></router-link>
          <router-link
            class="btn btn-outline-light mx-2 border-0"
            to="/servicios"
            >Servicios <font-awesome-icon :icon="['fas', 'laptop-code']"
          /></router-link>
          <router-link
            class="btn btn-outline-light mx-2 border-0"
            to="/contacto"
            >Contáctenos <font-awesome-icon :icon="['fas', 'phone-volume']"
          /></router-link>
          <router-link class="btn btn-outline-light mx-2 border-0" to="/soporte"
            >Soporte <font-awesome-icon :icon="['fas', 'question-circle']"
          /></router-link>
        </div>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer class="container-fluid text-light px-5 pt-5">
      <div class="row">
        <div class="col d-flex flex-column border-right">
          <img
            alt="Logo Mline"
            class="img-fluid mx-auto"
            src="./assets/logomlinespa-2.png"
          />
          <span>Av. Diego Portales 2000 - Of 72, Puerto Montt, Chile.</span>
          <span
            ><font-awesome-icon :icon="['fas', 'envelope']" />
            <a href="mailto:ventas@mline.cl"> ventas@mline.cl</a></span
          >
          <span
            ><font-awesome-icon :icon="['fas', 'phone']" /> +56 9 5026 8017
          </span>
        </div>
        <div class="col d-flex flex-column border-right">
          <h4>Navegación</h4>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
          <router-link class="nav-link" to="/servicios">Servicios</router-link>
          <router-link class="nav-link" to="/contacto">Contacto</router-link>
          <router-link class="nav-link" to="/soporte">Soporte</router-link>
        </div>
        <div class="col d-none d-lg-flex flex-column border-right">
          <h4>Nuestras Redes Sociales</h4>
          <iframe
            class="img-fluid"
            src="https://www.youtube.com/embed/b2LnFE1qTig"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col d-flex flex-column">
          <h4>Nosotros</h4>
          <strong class="text-light">Mline, soluciones en gestión:</strong>
          <p class="text-justify">
            Traemos soluciones a los procesos, creando software a la medida de
            tu empresa.
          </p>
          <strong>Nuestros Servicios:</strong>
          <ul class="nav flex-column text-left">
            <li class="nav-item">Desarrollo Software</li>
            <li class="nav-item">Desarrollo Web</li>
            <li class="nav-item">Soluciones de Red</li>
            <li class="nav-item">Integración de Sistemas</li>
            <li class="nav-item">Venta de Licencias</li>
          </ul>
        </div>
      </div>
      <footer class="row pt-3">
        <p class="mx-auto">
          Mline&copy; {{ new Date().getFullYear() }} . Todos los derechos
          reservados.
        </p>
      </footer>
    </footer>
  </div>
</template>

<style lang="scss">
@media (min-width: 0) {

  #navbarTogglerDemo03 {
    background-color: $dark;
    border-radius: 30px;
  }

  #nav {
    a {
      font-weight: bold;
      &.router-link-exact-active {
        background-color: $dark;
        color: $light;
      }
    }
  }
  footer {
    background-color: $dark;
  }
}
@media (min-width: 992px) {
  #navbarTogglerDemo03 {
    background-color: rgba(0, 0, 0, 0);
  }
  #nav {
    a {
      font-weight: bold;
      &.router-link-exact-active {
        background-color: $dark;
        color: $light;
      }
    }
  }
  footer {
    background-color: $dark;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
[v-cloak] {
  display: block;
  padding: 50px 0;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

[v-cloak]:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #333;
  animation: spinner 0.6s linear infinite;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}

[v-cloak] > * {
  display: none;
}
</style>

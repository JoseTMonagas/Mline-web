<template>
  <div>
    <header id="header" class="header shadow">
      <h1 class="text-right display-4">Sobre Nosotros</h1>
      <h3 class="text-right display-5">Conoce al equipo Mline</h3>
    </header>
    <section class="container my-5 py-2">
      <h4 class="title">Mline, soluciones en gestión</h4>
      <h5 class="subtitle mb-4 border-bottom">
        Presente en la décima región de Chile, brindando soluciones a nuestros
        clientes.
      </h5>
      <div class="row">
        <article class="col">
          <img
            src="../assets/code-647012_1280.jpg"
            alt="Codigo en una laptop"
            class="img-fluid rounded shadow"
          />
          <h4 class="subtitle my-3 border-bottom">Mline</h4>
          <p class="text-justify">
            Mline es una empresa que se origina por la necesidad de satisfacer
            el mercado en software, que permitan a las empresas; vender,
            comprar, cobrar y pagar, obteniendo información en línea y
            Confiable, con Reportes Dinámicos que permitan tomar decisiones. El
            mercado nos ha llevado a ser la respuesta para solucionar problemas
            a medida, potenciando la gestión de la empresa.
          </p>
        </article>
        <article class="col">
          <img
            src="../assets/team-3373638_1280.jpg"
            alt="Equipo colaborando"
            class="img-fluid rounded shadow"
          />
          <h4 class="subtitle my-3 border-bottom">Misión</h4>
          <p class="text-justify">
            Somos la empresa de la Décima Región que es capaz de desarrollar
            soluciones especializadas en Gestión de negocios, flexibles
            orientados al usuario.
          </p>
        </article>
        <article class="col">
          <img
            src="../assets/mobile-phone-1875813_1280.jpg"
            alt="Holograma en un smartphone"
            class="img-fluid rounded shadow"
          />
          <h4 class="subtitle my-3 border-bottom">Visión</h4>
          <p class="text-justify">
            Ser un referente de empresa especializada en soluciones TI e IA
            aplicada a la Gestión de empresas
          </p>
        </article>
      </div>
    </section>

    <section
      class="container-fluid d-flex flex-column my-5 py-5"
      id="AboutMline"
    >
      <div class="black-transparent p-5 m-5 rounded shadow">
        <h4 class="border-bottom my-2 text-left">¿Que es Mline?</h4>
        <div class="row">
          <p class="col text-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p class="col text-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>

    <section class="container my-5 py-2">
      <h4 class="title">Todos tus proyectos son posibles junto a Mline.</h4>
      <h5 class="subtitle">Tecnología y Desarrollo</h5>
    </section>
  </div>
</template>
<style lang="scss" scoped>
#header {
  background: url('../assets/action-2277292_1920.jpg') no-repeat fixed;
  background-size: cover;
}

#AboutMline {
  background: url('../assets/beverage-3157395_1280.jpg') no-repeat fixed;
  background-size: cover;
  .black-transparent {
    color: $light;
    background-color: rgba(22, 34, 46, 0.8);
  }
}
</style>

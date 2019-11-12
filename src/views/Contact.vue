<template>
  <div data-view v-cloak>
    <header id="header" class="header shadow">
      <h1 class="text-right display-4">Contáctenos</h1>
      <h3 class="text-right display-5">Pon en marcha tu proyecto</h3>
    </header>
    <section class="container-fluid">
      <header class="mt-3 p-4 pb-0">
        <h4 class="title">Listos para resolver tus inquietudes</h4>
        <h5 class="subtitle border-bottom">
          Si buscas cotizaciones, aclarar dudas, o reunirte con nosotros,
          entonces siéntete libre de escribirnos y te responderemos a la
          brevedad
        </h5>
      </header>
      <article class="row p-5 bg-dark">
        <main class="col">
          <div class="shadow p-4 bg-light rounded">
            <h5 class="subtitle border-bottom">Escríbenos</h5>
            <form
              id="contactForm"
              action="./mail.php"
              method="post"
              accept-charset="utf-8"
            >
              <div v-if="errors.length" class="alert aler-danger">
                <b>Por favor, revisa los siguientes errores:</b>
                <ul>
                  <li v-for="(error, index) in errors" v-bind:key="index">
                    {{ error }}
                  </li>
                </ul>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Tu Nombre:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="name"
                    name="name"
                    placeholder="Ej: John Doe"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="email">Tu E-mail:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    name="email"
                    placeholder="Ej: johndoe@example.com"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Asunto de tu mensaje:</label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  v-model="subject"
                  name="subject"
                  placeholder="Ej: Cotizacion de proyecto"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Tu Mensaje:</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  v-model="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>
        </main>
        <aside class="col">
          <div class="p-4 shadow bg-light rounded">
            <h5 class="subtitle border-bottom">
              Con Mline, trae soluciones a tu empresa
            </h5>
            <p class="text-justify">
              Ponte en contacto con nosotros, agenda una visita a tu empresa o
              haznos una visita, junto a Mline puedes darle vida a tu negocio y
              agilizar tus procesos con los estándares mas altos en tecnología
              de la industria. No esperes mas, aquí estamos para ti.
            </p>
            <div class="d-lg-none d-flex flex-column">
              <div class="row my-2">
                <span class="col">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  <a href="mailto:ventas@mline.cl"> ventas@mline.cl</a>
                </span>
              </div>
              <div class="row my-2">
                <div class="col">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  +56 9 5026 8017
                </div>
              </div>
            </div>
            <div class="d-none d-lg-block">
              <div class="row my-2 p-5">
                <span class="col">
                  <span class="bg-primary text-light p-3 rounded-circle h3">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                  </span>
                  <a href="mailto:ventas@mline.cl"> ventas@mline.cl</a>
                </span>
                <span class="col">
                  <span class="bg-primary text-light p-3 rounded-circle h3">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                  </span>
                  +56 9 5026 8017
                </span>
              </div>
            </div>
          </div>
        </aside>
      </article>
    </section>
    <section class="container my-4 py-1">
      <h5 class="subtitle border-bottom">Mline, cerca de ti</h5>
      <div class="row">
        <div class="col d-flex flex-column align-items-center my-1 p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2113.840417305369!2d-72.94814127043662!3d-41.473454651055704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183a52cc10b53d%3A0x5602063fbaf6fc34!2sMline!5e0!3m2!1ses!2scl!4v1571402122501!5m2!1ses!2scl"
            class="img-fluid"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
          ></iframe>
          <small class="text-muted"
            >Concepción 120, Puerto Montt, Región de los Lagos</small
          >
        </div>
        <div class="col d-flex flex-column align-items-center my-1 p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1494.9439758430974!2d-72.90741704190556!3d-41.46334548482079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183ba972aee3cd%3A0x23d4bf1afd27ef1b!2sMline!5e0!3m2!1ses!2scl!4v1571669934000!5m2!1ses!2scl"
            class="img-fluid"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
          ></iframe>
          <small class="text-muted"
            >Cuarta Terraza con Los Ébanos, Puerto Montt, Región de los
            Lagos</small
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data: function() {
    return {
      errors: [],
      debug: null,
      name: null,
      email: null,
      subject: null,
      message: null,
    };
  },
};
</script>
<style scoped>
#header {
  background: url('../assets/contact-us-2993000_1280.jpg') no-repeat fixed;
  background-size: cover;
}
</style>

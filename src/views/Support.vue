<template>
  <div>
    <header id="header" class="header shadow">
      <h1 class="text-right display-4">Soporte</h1>
      <h3 class="text-right display-5">¿Necesitas ayuda?</h3>
    </header>
    <section class="container">
      <section class="row">
        <div class="card col-6 mx-auto my-5">
          <div class="card-body">
            <h5 class="card-title title border-bottom">
              ¿Ya eres cliente Mline?
            </h5>
            <p class="card-text">
              Los clientes Mline tienen acceso a nuestra plataforma de soporte
              donde podran:
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Solicitar actualizaciones</li>
            <li class="list-group-item">Solicitar mantenimientos</li>
            <li class="list-group-item">
              Recibir actualizaciones sobre el estado de su sistema
            </li>
            <li class="list-group-item">Recibir Soporte de nuestro equipo</li>
          </ul>
          <a href="#" class="btn btn-block btn-primary">
            Ingresa Aquí
          </a>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Support',
};
</script>
<style scoped>
#header {
  background: url('../assets/server-2160321_1280.jpg') no-repeat fixed;
  background-size: cover;
}
</style>

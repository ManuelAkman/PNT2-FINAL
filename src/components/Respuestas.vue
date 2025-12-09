<template>
  <section class="card">
    <div class="card-header">
        <h3>Respuestas Multiple Choice</h3>
    </div>

    <div class="card-body">
      <p>Respuesta: 1: C y F </p>
      <p>Respuesta: 2: B </p>
      <p>Respuesta: 3: C </p>
      <p>Respuesta: 4: A </p>
      <p>Respuesta: 5: B </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Respuestas', // cambiá el nombre si querés

  // Registrar componentes hijos
  components: {
    // Ej: HijoComponente
  },

  // Propiedades que recibe el componente
  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  // Estado local
  data() {
    return {
      // ejemplo: contador: 0
     
    };
  },

  // Propiedades computadas
  computed: {
    // ejemplo: doble() { return this.contador * 2; }
    
      
      },
  

  // Observadores
  watch: {
    // ejemplo: contador(nuevo, viejo) { /* ... */ }
  },

  // Métodos
  methods: {
    
  },

  // Ciclo de vida
  created() {
    // Se ejecuta al crear la instancia
  },
  mounted() {
    // Se ejecuta cuando el componente se monta en el DOM
  },
  unmounted() {
    // Limpieza al desmontar
  }
};
</script>

<style scoped>
.card-header {
    background-color: rgb(184, 70, 161);
    color: rgb(0, 0, 0);
}


</style>

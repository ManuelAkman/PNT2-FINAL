<template>
  <section class="card">
    <div class="card-header">
        <h3>Conversor a Dólares</h3>
    </div>

    <div class="card-body">
      <br>

      <div>Ingrese monto $ : <input type="text" :value="valor2" @input="actualizar($event)" ><br></div>
      
      <div>Valor dolar en $ : <input type="text" :value="valor3" @input="actualizarMultiplicador($event)" :disabled="autoActualizar" ><label><input type="checkbox" v-model="autoActualizar" @change="toggleAutoUpdate"> Actualizar automáticamente</label> <span v-if="lastUpdate" style="font-size: 0.9em; color: #666;">{{ lastUpdate }}</span><br></div>

      <div>
        Valor Convertido:
        <span :style="{ color: colorTexto }">
          {{ (isNumeric(valor2) && isNumeric(valor3)) ? (Number(valor2) * Number(valor3)).toFixed(2) : '-' }}
        </span>
      </div>

      <br>


    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Conversor a Dólares', // cambiá el nombre si querés

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
  
      valor2: '',
      valor3: '',
      autoActualizar: false,
      intervalId: null,
      lastUpdate: null,
    };
  },

  // Propiedades computadas
  computed: 
    {
    colorTexto() {
      const num = Number(this.valor2);
      if (isNaN(num)) return 'black'; // valor no numérico

      if (num <= 0) return 'blue';
      if (num > 0 && num < 15) return 'magenta';
      return 'red';
    }
  },
 

  // Observadores
  watch: {

  },

  // Métodos
  methods: {
    incrementar() { 
      this.contador3++; 
    },
    getContador() {
      return this.contador3
    },
    actualizar(e) {
      // Permitir entrada vacía; si hay número lo guardamos como número, si no guardamos cadena vacía
      const raw = e.target.value
      if (raw === '') {
        this.valor2 = ''
        return
      }
      const num = parseFloat(raw)
      this.valor2 = Number.isNaN(num) ? '' : num
    },
    actualizarMultiplicador(e) {
      // Permitir entrada vacía; si hay número lo guardamos como número, si no guardamos cadena vacía
      const raw = e.target.value
      if (raw === '') {
        this.valor3 = ''
        return
      }
      const num = parseFloat(raw)
      this.valor3 = Number.isNaN(num) ? '' : num
    },
    toggleAutoUpdate() {
      if (this.autoActualizar) {
        this.startAutoUpdate()
      } else {
        this.stopAutoUpdate()
      }
    },
    startAutoUpdate() {
      // Obtener valor inmediatamente
      this.fetchDolarValue()
      // Luego cada 2 segundos
      this.intervalId = setInterval(() => {
        this.fetchDolarValue()
      }, 2000)
    },
    stopAutoUpdate() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
      this.lastUpdate = null
    },
    async fetchDolarValue() {
      try {
        const response = await axios.get('https://api.bluelytics.com.ar/v2/latest')
        // Usar el valor oficial (oficial) del dólar
        const dolarValue = response.data.oficial.value_sell
        this.valor3 = Number.isNaN(dolarValue) ? '' : parseFloat(dolarValue).toFixed(2)
        // Actualizar timestamp
        const now = new Date()
        this.lastUpdate = now.toLocaleString('es-AR')
      } catch (error) {
        console.error('Error al obtener el valor del dólar:', error)
      }
    },
    // Helper para template: comprobar si un valor es numérico
    isNumeric(v) {
      return v !== '' && !Number.isNaN(Number(v))
    }
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
    this.stopAutoUpdate()
  }
};
</script>

<style scoped>
.card-header {
    background-color: rgb(75, 165, 81);
    color: white;
}
</style>

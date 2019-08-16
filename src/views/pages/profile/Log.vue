<template lang="html">
  <el-timeline class="pl-5 mt-5">
    <el-timeline-item timestamp="2019/8/15" placement="top">
      <i slot="dot" class="fal fa-file"></i>
      <el-card>
        <h4 class="mt-0">Factura creada</h4>
        <p>Creación de factura 157562.</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/8/15" placement="top">
      <i slot="dot" class="fal fa-file"></i>
      <el-card>
        <h4 class="mt-0">Factura actualizada</h4>
        <p>Detalle eliminado de factura 157562.</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/8/15" placement="top">
      <i slot="dot" class="fal fa-file"></i>
      <el-card>
        <h4 class="mt-0">Factura impresa</h4>
        <p>Impresión de factura 157562.</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
export default {
  name: 'Log',
  data () {
    return {

    }
  },
  methods: {
  
  }
}
</script>

<style lang="css" scoped>
</style>

<template>
  <div class="rebranded">
    <img src="../assets/img/nowcom.jpeg" alt="NOWCOM" width="600" height="200" class="mb-20">
    <div style="width: 100%">
      <K8STable />
      <K8STable class="mt-40" />
    </div>
  </div>
</template>

<script>
import K8STable from '../components/home/k8s-table'
export default {
  name: 'HomePage',
  components: {
    K8STable
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: #007bff;
}

.rebranded {
  align-items: center;
}
</style>

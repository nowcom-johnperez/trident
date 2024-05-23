<template>
  <div>
    <div class="card">
      <h3>Details</h3>
      <div v-if="details" class="mt-20 full-width">
        <div class="row">
          <div class="col span-6">
            <DisplayValue label="Identifier" value="test" />
          </div>

          <div class="col span-6">
            <DisplayValue label="Title" :value="details.title" />
          </div>
        </div>

        <div class="row mt-20">
          <div class="col span-6">
            <DisplayValue label="Port Team" value="" />
          </div>

          <div class="col span-6">
            <DisplayValue label="Last Update" value="a month ago" />
          </div>
        </div>
        
        <div class="row mt-20">
          <div class="col span-6">
            <DisplayValue label="IP" :value="details.ip" />
          </div>

          <div class="col span-6">
            <DisplayValue label="Health Check" value="" icon="fa-dot-circle-o" />
          </div>
        </div>
        
        <div class="row mt-20">
          <div class="col span-6">
            <DisplayValue label="Rancher" value="" icon="fa-dot-circle-o" />
          </div>

          <div class="col span-6">
            <DisplayValue label="Repo Branch" value="" icon="fa-github" />
          </div>
        </div>
        
        <div class="row mt-20">
          <div class="col span-6">
            <DisplayValue label="Description" :value="details.description" icon="fa-dot-circle-o" />
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-30">
      <h3>Related Entities</h3>
      <div class="mt-20">
        <div class="row">
          <div class="col span-12 text-center">
            <p class="" style="font-size: 2rem">There are no related entities found.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DisplayValue from '../../common/DisplayValue.vue'
  export default {
    name: 'DetailsOverview',
    components: {
      DisplayValue
    },
    props: {
      details: {
        type: Object,
        required: true
      }
    }
  }
</script>
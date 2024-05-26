<template>
  <div class="display-value-container">
    <div class="label-placeholder">
      <i v-if="icon" :class="['fa mr-5', icon, 'placholder-icon']"></i>{{ label }}
    </div>
    
      <div class="value-placeholder">
        <VTooltip :distance="15">
          <span class="hover-container" @mouseover="showCopyIcon = true" @mouseleave="showCopyIcon = false">
            <span class="content">{{ value }}</span>
            <span class="ml-5 copy-container" v-show="showCopyIcon" @click="copyValue">
              <i class="fa fa-copy"></i>
            </span>
          </span>
 
          <template #popper>
            {{ value }}
          </template>
        </VTooltip>
      </div>
  </div>
</template>
<script>
export default {
  name: 'DisplayValue',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showCopyIcon: false
    }
  },
  methods: {
    copyValue () {
      navigator.clipboard.writeText(this.value).then(() => {
        alert('value has been copied to clipboard!');
      }).catch(err => {
        console.error(`Copy error`, err)
      })
    }
  }
}
</script>

<style lang="scss">
.display-value-container {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50%;
  height: 2rem;
  text-align: left;

  .label-placeholder {
    opacity: 0.6;
    font-weight: 400;
    font-size: 1rem;
    min-width: 0;
    width: 10rem;
  }

  .placholder-icon {
    opacity: 1;
    color: black;
    font-weight: bold;
    font-size: 16px;
  }

  .value-placeholder {
    opacity: 1;
    min-width: 0;
    max-width: 20rem;
  }

  .copy-container {
    font-size: 1.2rem;
    cursor: pointer;
  }
}
</style>
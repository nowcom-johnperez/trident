<template>
  <div class="display-value-container">
    <div class="label-placeholder">
      <i v-if="icon" :class="['fa mr-5', icon, 'placholder-icon']"></i>{{ label }}
    </div>
    
    <div class="value-placeholder">
      <VTooltip v-if="!editable" :distance="15">
        <span class="hover-container" @mouseover="showCopyIcon = true" @mouseleave="showCopyIcon = false">
          <span class="content">{{ displayValue }}</span>
          <span class="ml-5 copy-container" v-show="showCopyIcon" @click="copyValue">
            <i class="fa fa-copy"></i>
          </span>
        </span>

        <template #popper>
          {{ displayValue }}
        </template>
      </VTooltip>
      <input v-else v-model="displayValue" type="text" @input="updateValue">
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
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showCopyIcon: false,
      displayValue: this.value
    }
  },
  watch: {
    value(newValue) {
      this.displayValue = newValue;
    }
  },
  methods: {
    copyValue () {
      navigator.clipboard.writeText(this.value).then(() => {
        alert('value has been copied to clipboard!');
      }).catch(err => {
        console.error(`Copy error`, err)
      })
    },
    updateValue(event) {
      this.displayValue = event.target.value;
      this.$emit('input', { value: event.target.value, label: this.label });
    }
  }
}
</script>

<style lang="scss">
.display-value-container {
  display: flex;
  align-items: center;
  gap: 10px;
  // width: 50%;
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
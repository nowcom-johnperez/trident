<template>
    <span class="hover-container" @mouseover="showCopyIcon = true" @mouseleave="showCopyIcon = false">
        <a :href="value" target="_blank">
            <i class="fa fa-link fa-2x"></i>
        </a>
        <span class="ml-5 copy-container" v-show="showCopyIcon" @click="copyValue">
            <i class="fa fa-copy fa-lg"></i>
        </span>
    </span>
</template>

<script>
export default {
    name: 'IconLink',
    props: {
        value: {
            type: String,
            required: true,
        }
    },
    data () {
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
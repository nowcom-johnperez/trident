export default {
  mounted() {
    const elements = document.getElementsByClassName('dashboard-root');
    for (let el of elements) {
      if (!el.classList.contains('idp-container')) {
        el.classList.add('idp-container');
      }
    }
  },
  // beforeDestroy() {
  //   console.log(`route`, this.$route.fullPath.includes('idp'))
  //   if (!this.$route.fullPath.includes('idp')) {
  //     const elements = document.getElementsByClassName('dashboard-root');
  //     for (let el of elements) {
  //       if (el.classList.contains('idp-container')) {
  //         el.classList.remove('idp-container');
  //       }
  //     }
  //   }

  // },
}
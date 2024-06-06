export default {
  mounted() {
    const elements = document.getElementsByClassName('dashboard-root');
    for (let el of elements) {
      if (!el.classList.contains('idp-container')) {
        el.classList.add('idp-container');
      }
    }
  }
}
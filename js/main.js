(() => {
  //DOM has loaded
  document.getElementById('openBtn').addEventListener('click', () => {
    window.d.showModal();
    document.querySelector('main').setAttribute('inert', 'inert');
  });
  document.getElementById('closeBtn').addEventListener('click', () => window.d.close());
})();

async function run() {
  const response = await fetch('assets/config.json');
  const json = await response.json();
  Object.entries(json).forEach(([key, value]) => {
    const el = document.querySelector('#${key}');
    if (el) {
      el.textContent = value;
    } else {
      console.warn('Element with id : ${key} not found ...');
    }
  });
}

run().catch((err) => {
  console.error(err);
});

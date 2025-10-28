document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const resposta = document.getElementById('resposta');

  btn.addEventListener('click', async () => {
    try {
      // Ara fem fetch al proxy del frontend
      const res = await fetch('/api/');
      const data = await res.json();
      resposta.textContent = data.message;
    } catch (err) {
      resposta.textContent = 'Error connectant al servidor Python.';
      console.error(err);
    }
  });
});

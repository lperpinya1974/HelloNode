document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const resposta = document.getElementById('resposta');

  btn.addEventListener('click', async () => {
    try {
      // Aquí posem l'URL del backend dins de Docker (nom del servei)
      const res = await fetch('http://backend:5000/');
      const data = await res.json();
      resposta.textContent = data.message;
    } catch (err) {
      resposta.textContent = 'Error connectant al servidor Python.';
      console.error(err);
    }
  });
});

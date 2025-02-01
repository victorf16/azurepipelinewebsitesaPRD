async function initialize() {
  try {
    const configData = await fetch('./config.json').then(res => res.json());

    for (const [id, content] of Object.entries(configData)) {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = content;
      } else {
        console.warn(`Elemento com ID: ${id} não encontrado.`);
      }
    }
  } catch (error) {
    console.error('Erro ao carregar configuração:', error);
  }
}

initialize();

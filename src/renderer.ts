const information = document.getElementById('info')

if(information instanceof HTMLParagraphElement) {
  const versions = window.versions;
  information.innerText = `Using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}) and Electron (v${versions.electron()})`;
}

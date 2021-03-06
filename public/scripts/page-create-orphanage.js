// create map
const map = L.map("mapid").setView([-27.5870734, -48.7273812], 10.5);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

//create and add marker

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  //remove icon
  marker && map.removeLayer(marker)

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector('#images')

  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')

  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo está vazio; se sim, não add ao container de images
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  //limpar o campo antes de add ao container de images
  input.value = ""

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  //deletar o campo
  span.parentNode.remove();
}

//troca do sim e não (botão visitação)
function toggleSelect(event) {
  //retirar a class active dos botões
  document.querySelectorAll('.button-select button').forEach(function (button) {
    button.classList.remove('active')
  })

  //colocar a class active no botão clicado
  const button = event.currentTarget
  button.classList.add('active')

  //atualizar o meu input hidden com o valor selecionado]
  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
}

function validate(event) {
  //validar se lat e len estão preenchidos (localização no mapa)
  const needsLatAndLng = true;
  if(needsLatAndLng) {
    //event.preventDefault() //impede que o usuário dê submit no form
    alert('Selecione uma localização no mapa!')
  }
  
}

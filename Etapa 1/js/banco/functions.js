function load(newLoad) {
  localStorage.setItem('MangAgenda:mangas', JSON.stringify(newLoad));
}

function readAll() {
  return JSON.parse(localStorage.getItem('MangAgenda:mangas'));
}

function nextId() {
  const dados = readAll();

  const ids = dados.map((dado) => dado.id);

  if(ids.length == 0)
    return 1
  else
  {
    const maxId = Math.max(...ids);

    return maxId + 1;
  }
}

function create(dado) {
  dado = { id: JSON.stringify(nextId()), ...dado };

  const dados = readAll();

  const newDados = [...dados, dado];

  load(newDados);

  return dado;
}

function update(id, NewManga) {
  const mangas = readAll();

  const index = mangas.findIndex((manga) => manga.id === id);

  if (index >= 0) {
    mangas[index] = { id, ...NewManga };
  }

  load(mangas);

  return mangas[index];
}

function destroy(id) {
  const dados = readAll();

  const index = dados.findIndex((dado) => dado.id === id);

  if (index >= 0) {
    dados.splice(index, 1);
  }

  load(dados);
}

function criar_new_Card(card)
{
    const manga_card =  `
    <div class="card-card col-sm-6 col-lg-4 col-xl-3 mb-3" id="card-${card.id}">
          <div class="card">
          <div class="d-flex">
          ${card_DeleteEdit_Icon(card.id, card.name, card.image)}
          </div>
            <div class="card-header text-center font-weight-bold bg-warning bg-opacity-50">
              <span class="card-name">
                ${card.name}
              </span>
            </div>
            <div class="card-body p-0">
              <img src="${card.image}" alt="${card.name}" class="card-image w-100 rounded-bottom">
            </div>
          </div>
    </div>`
    const sessao = document.getElementById(card.state)
    sessao.insertAdjacentHTML("beforeend", manga_card)
}

function card_DeleteEdit_Icon(id, nome, img)
{
  return `
  <span onclick="EditCard('${id}', '${nome}', '${img}')" class="material-symbols-outlined btn fw-bolder" data-bs-toggle="modal" data-bs-target="#formMangaModal">edit_note</span>
  <span onclick="DeleteCard('${id}', '${nome}')" class="material-symbols-outlined btn ms-auto fw-bolder" data-bs-toggle="modal" data-bs-target="#formDeleteModal">close</span>`
  
}

function CreateCard_from_Form()
{
  const formManga = document.querySelector("#formManga")
  clearMangaForm("Novo Mangá", '', '')
  formManga.onsubmit = (event) => { 
    event.preventDefault()
    const dados_submit = Object.fromEntries(new FormData(formManga))
    const newManga = create(dados_submit, "mangas")
    if(newManga.name != "" && newManga.image != "") 
      criar_new_Card(newManga);
};
}

function DeleteCard(id, nome)
{
  document.querySelector("#modal-name").innerHTML = `O Card [ ${nome} | N°:${id} ] será DELETADO`
  document.querySelector("#btn-delete").onclick = (event) => {
    event.preventDefault()
    destroy(id)
    document.querySelector(`#card-${id}`).remove()
  }
}

function EditCard(id, nome, img)
{
  const formManga = document.querySelector("#formManga")
  clearMangaForm(`Atualizando Mangá n°${id}`, `${nome}`, `${img}`)
  formManga.onsubmit = (event) => { 
    event.preventDefault()
    const dados_submit = Object.fromEntries(new FormData(formManga))
    const novo_dado = update(id, dados_submit)
    if(novo_dado.name != "" && novo_dado.img != "")
      document.querySelector(`#card-${id}`).remove()
      criar_new_Card(novo_dado)
};
}

function Abrir(id)
{
    document.getElementById(`${id}`).style.display="flex"
    document.getElementById(`Ospan_${id}`).style.display="none"
    document.getElementById(`Fspan_${id}`).style.display="inline"
}
function Fechar(id)
{
    document.getElementById(`${id}`).style.display="none"
    document.getElementById(`Ospan_${id}`).style.display="inline"
    document.getElementById(`Fspan_${id}`).style.display="none"
}

function clearMangaForm(title, name, img)
{
    const newLabel = document.querySelector("#formMangaLabelModal"); newLabel.innerHTML = title
    const resetName = document.querySelector("#manga-nome"); resetName.value = name
    const resetImage = document.querySelector("#manga-img"); resetImage.value = img
}

window.Abrir = Abrir;
window.Fechar = Fechar;
window.CreateCard_from_Form = CreateCard_from_Form;
window.DeleteCard = DeleteCard;
window.EditCard = EditCard;

export default { load, create, readAll, update, destroy, criar_new_Card};
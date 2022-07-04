const body = document.querySelector("#main")
const sections = document.querySelector("#sections")
const fila = []

const sections_names_ids = ['lendo', 'esperando', 'pretende', 'favorito', 'desistido', 'finalizado']

const sections_names_labels = ['Lendo', 'Esperando Lançamento', 'Pretende Ler', 'Favoritos', 'Desistiu de Ler', 'Finalizado']

for (let i = 0; i < sections_names_ids.length; i++)
{
  const section = `
<section class="border border-2 border-dark rounded-3 mb-3" id="section-${i+1}'">
<div class="d-flex border-5 border-bottom border-dark bg-warning bg-opacity-100">
    <div class="fw-bolder p-3" id="label_Section${i+1}">${sections_names_labels[i]}</div>
    <div class="buttons d-flex ms-auto">
        <div class="d-flex flex-column mt-1">
        </div>
        <span onclick="Fechar('${sections_names_ids[i]}')" id="Fspan_${sections_names_ids[i]}" class="menu material-symbols-outlined btn btn-dark rounded-circle p-3 me-2 fs-3 fw-bolder" style="display:none">close</span>
        <span onclick="Abrir('${sections_names_ids[i]}')" id="Ospan_${sections_names_ids[i]}" class="menu material-symbols-outlined btn btn-dark rounded-circle p-3 me-2 fs-3" style="display:inline">menu</span>
    </div>  
</div>
  <div style="display:none" id="${sections_names_ids[i]}" class="row pt-2 ps-3"></div>
</section>`

  sections.insertAdjacentHTML("beforeend", section)
}

const modalManga_Edit = `
<form id="formManga">
        <div class="modal fade" id="formMangaModal" tabindex="-1" aria-labelledby="LabelFormMangaModal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal- title" id="formMangaLabelModal"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                    <label for="manga-nome">Nome</label>
                    <input type="text" id="manga-nome" name="name" class="form-control mb-3">
                </div>
                <div class="form-group">
                    <label for="manga-img">Imagem</label>
                    <input type="text" id="manga-img" name="image" class="form-control mb-3 h-3">
                </div>
                <div class="form-group">
                    <label for="manga-state">Estado de Leitura</label>
                    <select class="form-select form-select-m mb-3" aria-label=".form-select-sm example" name="state" id="manga-state">
                    <option value="lendo" id="opt-1">Lendo</option>
                    <option value="esperando" id="opt-2">Esperando Lançamento</option>
                    <option value="pretende" id="opt-3">Pretende Ler</option>
                    <option value="favorito" id="opt-4">Favoritos</option>
                    <option value="desistido" id="opt-5">Desistiu de Ler</option>finalizado
                    <option value="finalizado" id="opt-5">Finalizado</option>
                    </select>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Fechar</button>
                <button type="submit" class="btn btn-warning" data-bs-dismiss="modal">Concluir</button>
              </div>
            </div>
          </div>
        </div>
</form>`; fila.push(modalManga_Edit)

const modalDelete = `
<form id="formDelete">
        <div class="modal fade" id="formDeleteModal" tabindex="-1" aria-labelledby="LabelFormDeleteModal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal- title" id="formDeleteLabelModal"><span id="modal-name"></span></h5>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-warning" data-bs-dismiss="modal" id="btn-delete">Deletar</button>
              </div>
            </div>
          </div>
        </div>
</form>`; fila.push(modalDelete)

for( const element of fila) { body.insertAdjacentHTML("beforeend", element)}
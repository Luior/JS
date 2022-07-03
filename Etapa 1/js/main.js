import dados from "./banco/bancoDados.js";
import functions from "./banco/functions.js";

if(!(localStorage.getItem('MangAgenda:mangas'))) {functions.load(dados)}

functions.readAll().map((card) => functions.criar_new_Card(card))
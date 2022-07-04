import functions from "./banco/functions.js";

if(!(localStorage.getItem('MangAgenda:mangas'))) {functions.load([])}

functions.readAll().map((card) => functions.criar_new_Card(card))
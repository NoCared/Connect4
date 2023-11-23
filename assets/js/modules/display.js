import { sizeColumn,sizeRow } from "./parameters.js";
import {bindInputOnDiv} from "./inputs.js";
import { createIndexTab } from "./gameController.js";

function initDisplay()
{
    const gridDiv = document.getElementById("grid");
    // Calculer la taille de la grille en pixels
    const gridSize = Math.min(window.innerWidth, window.innerHeight) * 0.8; // 80% de la taille de la fenêtre
    gridDiv.style.width = gridSize + "px";
    gridDiv.style.height = gridSize + "px";

    // Calculer la taille des cases en fonction de la grille
    const cellSize = gridSize / Math.max(sizeColumn, sizeRow);

    gridDiv.style.gridTemplateColumns = 'repeat(' + sizeRow + ', ' + cellSize + 'px)';
    gridDiv.style.gridTemplateRows = 'repeat(' + sizeColumn + ', ' + cellSize + 'px)';

    for (let i = 0; i < sizeRow * sizeColumn; i++) {
        let createDiv = document.createElement("div");
        gridDiv.append(createDiv);
        createDiv.classList.add("circle");
        bindInputOnDiv(createDiv,i%sizeRow);
        createIndexTab(createDiv);
    }

    // REMETTRE A NONE
    document.getElementById("overlayEnd").style.display = "none";
}


export {initDisplay};
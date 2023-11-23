import { Case } from "./case.js";

const tabCaseGame = [];

function createIndexTab(div)
{
    let newCase = new Case(div);
    tabCaseGame.push(newCase);
}

export {createIndexTab};
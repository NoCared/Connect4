import { Case, State } from "./case.js";
import { sizeColumn, sizeRow } from "./parameters.js";

const tabCaseGame = [];

function createIndexTab(div)
{
    let newCase = new Case(div);
    tabCaseGame.push(newCase);
}

function putObjectInTab(column)
{
    freeRow = checkEmptyInColumn(column);
    if (freeRow != null)
    {
        fillCase(column,freeRow);
    }
}

function fillCase(column,row)
{

}

function checkEmptyInColumn(column)
{
    if (column < sizeColumn)
    {
        for (let i = 0; i < sizeRow;i++)
        {
            if(tabCaseGame[i*sizeColumn + column].State === State.Empty)
            {
                return i;
            }
        }
    }
    return null;
}

export {createIndexTab,putObjectInTab};
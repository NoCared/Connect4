import { putObjectInTab } from "./gameController.js";


function bindInputOnDiv(div,column)
{
    div.addEventListener("onclick",()=>{
        clickOnColumn(column);
    })
}

function clickOnColumn(column)
{
    putObjectInTab(column);
}


export {bindInputOnDiv};
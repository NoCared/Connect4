const State = {
    Empty: 0,
    Red: 1,
    Yellow: 2
}

class Case{
    relatedDiv;
    currentState = State.Empty;

    constructor(div) {
        this.relatedDiv = div;
    }
}

export { Case, State}
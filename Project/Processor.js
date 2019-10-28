import SimpleList from './SimpleList.js';

export default class Processor{
    constructor(){
        this._simpleList = new SimpleList();
    }

    add(process){
        this._simpleList.add(process);
    }

    nextStep(){
        this._simpleList
    }

    report(){

    }
}
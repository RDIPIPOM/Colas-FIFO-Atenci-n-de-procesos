export default class Process{
    constructor(code, timeRequired){
        this._code = code;
        this._timeRequired = timeRequired;
        this._next = null;
    }

    get code(){
        return this._code;
    }

    get timeRequired(){
        return this._timeRequired;
    }

    get next(){
        return this._next;
    }

    set code(code){
        this._code = code;
    }

    set timeRequired(timeRequired){
        this._timeRequired = timeRequired;
    }

    set next(next){
        this._next = next;
    }

    toString(){
        return '////Código: ' + this._code + '***Time Required: ' + this._timeRequired + '////';
    }
}
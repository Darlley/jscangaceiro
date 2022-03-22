class Negociacao {

    constructor(_data, _quantidade, _valor){
        Object.assign(this, { _quantidade, _valor })
        this._data = new Date(_data.getTime())
        Object.freeze(this)
    }

    get data()
    {
        return new Date(this._data.getTime()) // getTime daquela _data criando uma nova new Date() para pegar a referencia
    }

    get quantidade()
    {
        return this._quantidade
    }

    get valor()
    {
        return this._valor
    }

    get volume()
    {
        return this.quantidade * this.valor
    }

}
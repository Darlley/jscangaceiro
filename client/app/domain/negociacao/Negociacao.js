class Negociacao {

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor
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
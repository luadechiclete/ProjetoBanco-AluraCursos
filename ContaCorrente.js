class ContaCorrente{
    agencia;
    // #saldo =0 seria uma forma de usar um atributo privado
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    };

    depositar(valor){
        if(valor <= 0) 
        {
            return;
        }            
        this._saldo += valor;
    }
}
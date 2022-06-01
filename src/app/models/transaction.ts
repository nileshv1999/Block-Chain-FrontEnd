export class Transaction{
    id : any;
    input : any;
    outputs : any[];

    toString(){
        return `Transaction
        id      : ${this.id}
        input   : ${this.input}
        outputs : ${this.outputs} 
        `
    }
}
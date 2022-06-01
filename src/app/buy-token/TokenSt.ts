export class TokenSt{
    constructor(
        public seller:string,
        public token:{
        name:string,
        code:string,
        unitPrice:number,
        quantity:number
        }
    ){}
}
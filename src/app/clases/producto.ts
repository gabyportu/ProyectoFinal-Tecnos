export class Producto{
    constructor(
        public id: number,
        public producto: string,
        public stock: number,
        public precio: number,
        public quien: string,
        public descripcion: string
    ){}
}
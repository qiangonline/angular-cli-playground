import { Address } from './address';
export class User {
    constructor(
        public id: number,
        public name: string,
        public addresses: Address[],
    ) {

    }
}

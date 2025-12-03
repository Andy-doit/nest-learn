import { Injectable } from "@nestjs/common";

@Injectable()
    export class MathService {
        add(x: number, y: number): number {
            return x + y;
        }
        subtract(x :number, y:number) : number{
            return x - y;
        }
        split(x: number, y:number): number {
            return x / y;
        }

    }

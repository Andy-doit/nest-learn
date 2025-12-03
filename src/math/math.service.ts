import { Injectable } from "@nestjs/common";
import { CountService } from "src/count/count.service";

@Injectable()
    export class MathService {
        constructor(private readonly countService: CountService) {}
        add(x: number, y: number): number {
            this.countService.increment();
            return x + y;
        }
        subtract(x :number, y:number) : number{
            return x - y;
        }
        split(x: number, y:number): number {
            return x / y;
        }

    }

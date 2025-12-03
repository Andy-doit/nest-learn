import { Module } from "@nestjs/common";
import { MathService } from "./math.service";

@Module({
    // cung cấp những service nào
    providers: [MathService],
    exports: [MathService], // cho phép module khác sử dụng service này 
})
export class MathModule {}
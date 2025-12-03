import { Module } from "@nestjs/common";
import { CountService } from "./count.service";

@Module({
    providers: [CountService],
    exports: [CountService],
})
export class CountModule {}
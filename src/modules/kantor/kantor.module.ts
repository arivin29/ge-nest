import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KantorService } from './kantor.service';
import { KantorController } from './kantor.controller';
import { Kantor } from './entities/kantor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kantor])],
  controllers: [KantorController],
  providers: [KantorService],
})
export class KantorModule {}

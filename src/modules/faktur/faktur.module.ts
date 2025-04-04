import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FakturService } from './faktur.service';
import { FakturController } from './faktur.controller';
import { Faktur } from './entities/faktur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Faktur])],
  controllers: [FakturController],
  providers: [FakturService],
})
export class FakturModule {}

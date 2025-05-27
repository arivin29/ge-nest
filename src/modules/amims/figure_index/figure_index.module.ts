import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FigureIndexService } from './figure_index.service';
import { FigureIndexController } from './figure_index.controller';
import { AmimsFigureIndex } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsFigureIndex],'amims')],
  controllers: [FigureIndexController],
  providers: [FigureIndexService],
})
export class FigureIndexModule {}

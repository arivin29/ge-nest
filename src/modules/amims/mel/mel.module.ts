import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MelService } from './mel.service';
import { MelController } from './mel.controller';
import { AmimsMel } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMel],'amims')],
  controllers: [MelController],
  providers: [MelService],
})
export class MelModule {}

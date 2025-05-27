import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibReferenceService } from './lib_reference.service';
import { LibReferenceController } from './lib_reference.controller';
import { AmimsLibReference } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLibReference],'amims')],
  controllers: [LibReferenceController],
  providers: [LibReferenceService],
})
export class LibReferenceModule {}

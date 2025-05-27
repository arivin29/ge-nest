import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctypeService } from './doctype.service';
import { DoctypeController } from './doctype.controller';
import { AmimsDoctype } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsDoctype],'amims')],
  controllers: [DoctypeController],
  providers: [DoctypeService],
})
export class DoctypeModule {}

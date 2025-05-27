import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibFormIssuedService } from './lib_form_issued.service';
import { LibFormIssuedController } from './lib_form_issued.controller';
import { AmimsLibFormIssued } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLibFormIssued],'amims')],
  controllers: [LibFormIssuedController],
  providers: [LibFormIssuedService],
})
export class LibFormIssuedModule {}

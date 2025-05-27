import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { AmimsCompany } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsCompany],'amims')],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}

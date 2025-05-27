import { TypeOfworkWidgetController } from './type_ofwork_widget.controller';
import { TypeOfworkWidgetService } from './type_ofwork_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfworkService } from './type_ofwork.service';
import { TypeOfworkController } from './type_ofwork.controller';
import { AmimsTypeOfwork } from 'src/entities/amims';
import { TypeOfworkReportController } from './type_ofwork_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTypeOfwork],'amims')],
  controllers: [TypeOfworkController, TypeOfworkReportController, TypeOfworkWidgetController],
  providers: [TypeOfworkService, TypeOfworkWidgetService],
})
export class TypeOfworkModule {}

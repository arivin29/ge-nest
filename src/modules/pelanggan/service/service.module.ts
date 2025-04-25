import { ServiceWidgetController } from './service_widget.controller';
import { ServiceWidgetService } from './service_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { PelangganService } from 'src/entities/pelanggan';
import { ServiceReportController } from './service_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganService],'pelanggan')],
  controllers: [ServiceController, ServiceReportController, ServiceWidgetController],
  providers: [ServiceService, ServiceWidgetService],
})
export class ServiceModule {}

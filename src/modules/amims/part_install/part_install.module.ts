import { PartInstallWidgetController } from './part_install_widget.controller';
import { PartInstallWidgetService } from './part_install_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartInstallService } from './part_install.service';
import { PartInstallController } from './part_install.controller';
import { AmimsPartInstall } from 'src/entities/amims';
import { PartInstallReportController } from './part_install_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartInstall],'amims')],
  controllers: [PartInstallController, PartInstallReportController, PartInstallWidgetController],
  providers: [PartInstallService, PartInstallWidgetService],
})
export class PartInstallModule {}

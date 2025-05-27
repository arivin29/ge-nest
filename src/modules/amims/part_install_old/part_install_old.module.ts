import { PartInstallOldWidgetController } from './part_install_old_widget.controller';
import { PartInstallOldWidgetService } from './part_install_old_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartInstallOldService } from './part_install_old.service';
import { PartInstallOldController } from './part_install_old.controller';
import { AmimsPartInstallOld } from 'src/entities/amims';
import { PartInstallOldReportController } from './part_install_old_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartInstallOld],'amims')],
  controllers: [PartInstallOldController, PartInstallOldReportController, PartInstallOldWidgetController],
  providers: [PartInstallOldService, PartInstallOldWidgetService],
})
export class PartInstallOldModule {}

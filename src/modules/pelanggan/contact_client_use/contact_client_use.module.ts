import { ContactClientUseWidgetController } from './contact_client_use_widget.controller';
import { ContactClientUseWidgetService } from './contact_client_use_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactClientUseService } from './contact_client_use.service';
import { ContactClientUseController } from './contact_client_use.controller';
import { PelangganContactClientUse } from 'src/entities/pelanggan';
import { ContactClientUseReportController } from './contact_client_use_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganContactClientUse],'pelanggan')],
  controllers: [ContactClientUseController, ContactClientUseReportController, ContactClientUseWidgetController],
  providers: [ContactClientUseService, ContactClientUseWidgetService],
})
export class ContactClientUseModule {}

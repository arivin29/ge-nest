import { ClientContactWidgetController } from './client_contact_widget.controller';
import { ClientContactWidgetService } from './client_contact_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientContactService } from './client_contact.service';
import { ClientContactController } from './client_contact.controller';
import { PelangganClientContact } from 'src/entities/pelanggan';
import { ClientContactReportController } from './client_contact_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganClientContact],'pelanggan')],
  controllers: [ClientContactController, ClientContactReportController, ClientContactWidgetController],
  providers: [ClientContactService, ClientContactWidgetService],
})
export class ClientContactModule {}

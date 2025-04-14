import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PelangganClient } from 'src/entities/pelanggan';
import { ClientReportController } from './client_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganClient],'pelanggan')],
  controllers: [ClientController, ClientReportController],
  providers: [ClientService],
})
export class ClientModule {}

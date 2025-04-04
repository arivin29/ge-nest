import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from './entities/client.entity';
import { ClientReportController } from './client_report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
    controllers: [ClientController, ClientReportController],
  providers: [ClientService],
})
export class ClientModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientContactService } from './client_contact.service';
import { ClientContactController } from './client_contact.controller';
import { PelangganClientContact } from 'src/entities/pelanggan';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganClientContact],'pelanggan')],
  controllers: [ClientContactController],
  providers: [ClientContactService],
})
export class ClientContactModule {}

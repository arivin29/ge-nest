import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientContactService } from './client_contact.service';
import { ClientContactController } from './client_contact.controller';
import { ClientContact } from './entities/client_contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientContact])],
  controllers: [ClientContactController],
  providers: [ClientContactService],
})
export class ClientContactModule {}

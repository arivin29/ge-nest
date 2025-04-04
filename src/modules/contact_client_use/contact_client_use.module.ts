import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactClientUseService } from './contact_client_use.service';
import { ContactClientUseController } from './contact_client_use.controller';
import { ContactClientUse } from './entities/contact_client_use.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactClientUse])],
  controllers: [ContactClientUseController],
  providers: [ContactClientUseService],
})
export class ContactClientUseModule {}

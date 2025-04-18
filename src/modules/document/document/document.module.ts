import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { DocumentDocument } from 'src/entities/document';
 
@Module({
  imports: [TypeOrmModule.forFeature([DocumentDocument],'document')],
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentModule {}

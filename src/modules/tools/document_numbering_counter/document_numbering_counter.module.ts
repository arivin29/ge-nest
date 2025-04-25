import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentNumberingCounterService } from './document_numbering_counter.service';
import { DocumentNumberingCounterController } from './document_numbering_counter.controller';
import { ToolsDocumentNumberingCounter } from 'src/entities/tools';
 
@Module({
  imports: [TypeOrmModule.forFeature([ToolsDocumentNumberingCounter],'tools')],
  controllers: [DocumentNumberingCounterController],
  providers: [DocumentNumberingCounterService],
})
export class DocumentNumberingCounterModule {}

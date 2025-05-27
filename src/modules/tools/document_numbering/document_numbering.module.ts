import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentNumberingService } from './document_numbering.service';
import { DocumentNumberingController } from './document_numbering.controller';
import { ToolsDocumentNumbering, ToolsDocumentNumberingCounter } from 'src/entities/tools';

@Module({
    imports: [TypeOrmModule.forFeature([ToolsDocumentNumbering, ToolsDocumentNumberingCounter], 'tools')],
    controllers: [DocumentNumberingController],
    providers: [DocumentNumberingService],
    exports: [DocumentNumberingService],
})
export class DocumentNumberingModule { }

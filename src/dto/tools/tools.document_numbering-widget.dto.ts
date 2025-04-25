import { ApiProperty } from '@nestjs/swagger';
import { ToolsDocumentNumberingDto } from './tools.document_numbering.dto';

export class ToolsDocumentNumberingWidgetDto extends ToolsDocumentNumberingDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

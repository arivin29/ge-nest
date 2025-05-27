import { ApiProperty } from '@nestjs/swagger';
import { ToolsDocumentNumberingCounterDto } from './tools.document_numbering_counter.dto';

export class ToolsDocumentNumberingCounterWidgetDto extends ToolsDocumentNumberingCounterDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

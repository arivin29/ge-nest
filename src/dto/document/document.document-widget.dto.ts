import { ApiProperty } from '@nestjs/swagger';
import { DocumentDocumentDto } from './document.document.dto';

export class DocumentDocumentWidgetDto extends DocumentDocumentDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

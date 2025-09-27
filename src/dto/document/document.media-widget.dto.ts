import { ApiProperty } from '@nestjs/swagger';
import { DocumentMediaDto } from './document.media.dto';

export class DocumentMediaWidgetDto extends DocumentMediaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

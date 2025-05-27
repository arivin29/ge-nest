import { ApiProperty } from '@nestjs/swagger';
import { AmimsQaRpdDto } from './amims.qa_rpd.dto';

export class AmimsQaRpdWidgetDto extends AmimsQaRpdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

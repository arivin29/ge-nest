import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartAlternativeDto } from './amims.part_alternative.dto';

export class AmimsPartAlternativeWidgetDto extends AmimsPartAlternativeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

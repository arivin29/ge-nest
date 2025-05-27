import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartActypeDto } from './amims.part_actype.dto';

export class AmimsPartActypeWidgetDto extends AmimsPartActypeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

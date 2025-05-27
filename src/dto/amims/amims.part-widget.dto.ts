import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsPartWidgetDto extends AmimsPartDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

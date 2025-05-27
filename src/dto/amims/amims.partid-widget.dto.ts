import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartidDto } from './amims.partid.dto';

export class AmimsPartidWidgetDto extends AmimsPartidDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

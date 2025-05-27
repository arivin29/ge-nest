import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartAtaDto } from './amims.part_ata.dto';

export class AmimsPartAtaWidgetDto extends AmimsPartAtaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

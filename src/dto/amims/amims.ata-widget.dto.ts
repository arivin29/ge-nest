import { ApiProperty } from '@nestjs/swagger';
import { AmimsAtaDto } from './amims.ata.dto';

export class AmimsAtaWidgetDto extends AmimsAtaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

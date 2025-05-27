import { ApiProperty } from '@nestjs/swagger';
import { AmimsTypeOfworkDto } from './amims.type_ofwork.dto';

export class AmimsTypeOfworkWidgetDto extends AmimsTypeOfworkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

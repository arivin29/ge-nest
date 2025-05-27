import { ApiProperty } from '@nestjs/swagger';
import { AmimsLibReferenceDto } from './amims.lib_reference.dto';

export class AmimsLibReferenceWidgetDto extends AmimsLibReferenceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { AmimsLibFormIssuedDto } from './amims.lib_form_issued.dto';

export class AmimsLibFormIssuedWidgetDto extends AmimsLibFormIssuedDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

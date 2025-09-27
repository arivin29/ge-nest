import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSputdmadyaDto } from './new_bpt.onl_sputdmadya.dto';

export class NewBptOnlSputdmadyaWidgetDto extends NewBptOnlSputdmadyaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

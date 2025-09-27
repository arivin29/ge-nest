import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSputdpratamaDto } from './new_bpt.onl_sputdpratama.dto';

export class NewBptOnlSputdpratamaWidgetDto extends NewBptOnlSputdpratamaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipperawatDto } from './new_bpt.onl_sipperawat.dto';

export class NewBptOnlSipperawatWidgetDto extends NewBptOnlSipperawatDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

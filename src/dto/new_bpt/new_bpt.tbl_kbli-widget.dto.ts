import { ApiProperty } from '@nestjs/swagger';
import { NewBptTblKbliDto } from './new_bpt.tbl_kbli.dto';

export class NewBptTblKbliWidgetDto extends NewBptTblKbliDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

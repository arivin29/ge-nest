import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNiriuohDto } from './new_bpt.sk_izin_niriuoh.dto';

export class NewBptSkIzinNiriuohWidgetDto extends NewBptSkIzinNiriuohDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpdokspDto } from './new_bpt.sk_izin_ipdoksp.dto';

export class NewBptSkIzinIpdokspWidgetDto extends NewBptSkIzinIpdokspDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

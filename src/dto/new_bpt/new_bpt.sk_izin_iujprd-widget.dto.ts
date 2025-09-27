import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIujprdDto } from './new_bpt.sk_izin_iujprd.dto';

export class NewBptSkIzinIujprdWidgetDto extends NewBptSkIzinIujprdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

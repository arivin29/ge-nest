import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipperawatDto } from './new_bpt.sk_izin_sipperawat.dto';

export class NewBptSkIzinSipperawatWidgetDto extends NewBptSkIzinSipperawatDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

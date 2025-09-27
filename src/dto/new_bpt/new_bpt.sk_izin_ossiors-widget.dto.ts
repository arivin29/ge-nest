import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiorsDto } from './new_bpt.sk_izin_ossiors.dto';

export class NewBptSkIzinOssiorsWidgetDto extends NewBptSkIzinOssiorsDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

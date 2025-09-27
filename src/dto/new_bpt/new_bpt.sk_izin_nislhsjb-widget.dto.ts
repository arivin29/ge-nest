import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNislhsjbDto } from './new_bpt.sk_izin_nislhsjb.dto';

export class NewBptSkIzinNislhsjbWidgetDto extends NewBptSkIzinNislhsjbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

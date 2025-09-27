import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinBulkDto } from './new_bpt.sk_izin_bulk.dto';

export class NewBptSkIzinBulkWidgetDto extends NewBptSkIzinBulkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { AmimsStoreTransferItemDto } from './amims.store_transfer_item.dto';

export class AmimsStoreTransferItemWidgetDto extends AmimsStoreTransferItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

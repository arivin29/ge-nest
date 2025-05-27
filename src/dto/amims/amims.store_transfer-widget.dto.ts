import { ApiProperty } from '@nestjs/swagger';
import { AmimsStoreTransferDto } from './amims.store_transfer.dto';

export class AmimsStoreTransferWidgetDto extends AmimsStoreTransferDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

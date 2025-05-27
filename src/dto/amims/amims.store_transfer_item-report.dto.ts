import { ApiProperty } from '@nestjs/swagger';
import { AmimsStoreTransferItemDto } from './amims.store_transfer_item.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsStoreTransferItemReportDto extends AmimsStoreTransferItemDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

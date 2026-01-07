import { ApiProperty } from '@nestjs/swagger';
import { AmimsStoreThresholdDto } from './amims.store_threshold.dto';

export class AmimsStoreThresholdWidgetDto extends AmimsStoreThresholdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

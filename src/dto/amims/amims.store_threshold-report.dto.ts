import { ApiProperty } from '@nestjs/swagger';
import { AmimsStoreThresholdDto } from './amims.store_threshold.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsStoreThresholdReportDto extends AmimsStoreThresholdDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

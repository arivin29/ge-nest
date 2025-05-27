import { ApiProperty } from '@nestjs/swagger';
import { AmimsInternalGrnItemDto } from './amims.internal_grn_item.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsInternalGrnItemReportDto extends AmimsInternalGrnItemDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

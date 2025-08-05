import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurGrnItemDto } from './amims.pur_grn_item.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsPurGrnItemReportDto extends AmimsPurGrnItemDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

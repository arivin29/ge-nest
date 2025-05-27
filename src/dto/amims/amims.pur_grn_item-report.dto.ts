import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurGrnItemDto } from './amims.pur_grn_item.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsPurGrnItemReportDto extends AmimsPurGrnItemDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

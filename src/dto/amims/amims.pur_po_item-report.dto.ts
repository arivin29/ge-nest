import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPoItemDto } from './amims.pur_po_item.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsPurPoItemReportDto extends AmimsPurPoItemDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartAtaDto } from './amims.part_ata.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsAtaDto } from './amims.ata.dto';

export class AmimsPartAtaReportDto extends AmimsPartAtaDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsAtaDto })
  ata: AmimsAtaDto;
}

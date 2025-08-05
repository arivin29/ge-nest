import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartAtaDto } from './amims.part_ata.dto';
import { AmimsAtaDto } from './amims.ata.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsPartAtaReportDto extends AmimsPartAtaDto {
  @ApiProperty({ type: AmimsAtaDto })
  ata: AmimsAtaDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

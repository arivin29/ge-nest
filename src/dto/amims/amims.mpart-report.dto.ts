import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsAtaDto } from './amims.ata.dto';
import { AmimsPartidDto } from './amims.partid.dto';

export class AmimsMpartReportDto extends AmimsMpartDto {
  @ApiProperty({ type: AmimsAtaDto })
  ata: AmimsAtaDto;

  @ApiProperty({ type: AmimsPartidDto })
  partid: AmimsPartidDto;
}

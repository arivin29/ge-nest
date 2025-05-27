import { ApiProperty } from '@nestjs/swagger';
import { AmimsFigureIndexDto } from './amims.figure_index.dto';
import { AmimsAtaDto } from './amims.ata.dto';

export class AmimsFigureIndexReportDto extends AmimsFigureIndexDto {
  @ApiProperty({ type: AmimsAtaDto })
  ata: AmimsAtaDto;
}

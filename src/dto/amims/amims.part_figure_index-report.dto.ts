import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartFigureIndexDto } from './amims.part_figure_index.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsAtaDto } from './amims.ata.dto';

export class AmimsPartFigureIndexReportDto extends AmimsPartFigureIndexDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsAtaDto })
  ata: AmimsAtaDto;
}

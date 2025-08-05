import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartFigureIndexDto } from './amims.part_figure_index.dto';
import { AmimsAtaDto } from './amims.ata.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsPartFigureIndexReportDto extends AmimsPartFigureIndexDto {
  @ApiProperty({ type: AmimsAtaDto })
  ata: AmimsAtaDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

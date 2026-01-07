import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartLogDto } from './amims.part_log.dto';
import { AmimsPositionDto } from './amims.position.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsPartLogReportDto extends AmimsPartLogDto {
  @ApiProperty({ type: AmimsPositionDto })
  position: AmimsPositionDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}

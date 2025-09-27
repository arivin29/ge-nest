import { ApiProperty } from '@nestjs/swagger';
import { NewBptExternalLogDto } from './new_bpt.external_log.dto';
import { NewBptExternalDto } from './new_bpt.external.dto';

export class NewBptExternalLogReportDto extends NewBptExternalLogDto {
  @ApiProperty({ type: NewBptExternalDto })
  external: NewBptExternalDto;
}

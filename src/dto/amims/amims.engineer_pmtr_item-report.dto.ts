import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPmtrItemDto } from './amims.engineer_pmtr_item.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsEngineerPmtrItemReportDto extends AmimsEngineerPmtrItemDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

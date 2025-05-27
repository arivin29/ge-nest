import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPrItemDto } from './amims.pur_pr_item.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsPurPrItemReportDto extends AmimsPurPrItemDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

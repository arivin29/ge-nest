import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcPiroItemDto } from './amims.mpc_piro_item.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsMpcPiroItemReportDto extends AmimsMpcPiroItemDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

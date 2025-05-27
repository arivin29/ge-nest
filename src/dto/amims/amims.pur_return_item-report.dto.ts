import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurReturnItemDto } from './amims.pur_return_item.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsPurReturnItemReportDto extends AmimsPurReturnItemDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

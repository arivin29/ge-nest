import { ApiProperty } from '@nestjs/swagger';
import { AmimsStockDto } from './amims.stock.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsStockReportDto extends AmimsStockDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

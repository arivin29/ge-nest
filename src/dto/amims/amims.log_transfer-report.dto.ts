import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogTransferDto } from './amims.log_transfer.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsLogTransferReportDto extends AmimsLogTransferDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}

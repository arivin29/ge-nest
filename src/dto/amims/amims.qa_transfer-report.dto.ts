import { ApiProperty } from '@nestjs/swagger';
import { AmimsQaTransferDto } from './amims.qa_transfer.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsQaTransferReportDto extends AmimsQaTransferDto {
  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}

import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechDiscrepanciesDto } from './amims.tech_discrepancies.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsTechDiscrepanciesReportDto extends AmimsTechDiscrepanciesDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

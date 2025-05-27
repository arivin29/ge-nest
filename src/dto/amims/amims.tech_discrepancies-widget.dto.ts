import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechDiscrepanciesDto } from './amims.tech_discrepancies.dto';

export class AmimsTechDiscrepanciesWidgetDto extends AmimsTechDiscrepanciesDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

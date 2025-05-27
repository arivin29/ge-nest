import { ApiProperty } from '@nestjs/swagger';
import { AmimsTechDefectDto } from './amims.tech_defect.dto';

export class AmimsTechDefectWidgetDto extends AmimsTechDefectDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

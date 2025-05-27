import { ApiProperty } from '@nestjs/swagger';
import { AmimsCompanyDto } from './amims.company.dto';

export class AmimsCompanyWidgetDto extends AmimsCompanyDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

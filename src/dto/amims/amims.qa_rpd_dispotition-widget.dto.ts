import { ApiProperty } from '@nestjs/swagger';
import { AmimsQaRpdDispotitionDto } from './amims.qa_rpd_dispotition.dto';

export class AmimsQaRpdDispotitionWidgetDto extends AmimsQaRpdDispotitionDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

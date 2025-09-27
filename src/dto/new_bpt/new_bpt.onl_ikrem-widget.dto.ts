import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIkremDto } from './new_bpt.onl_ikrem.dto';

export class NewBptOnlIkremWidgetDto extends NewBptOnlIkremDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

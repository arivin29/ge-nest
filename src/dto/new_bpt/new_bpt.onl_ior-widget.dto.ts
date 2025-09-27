import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIorDto } from './new_bpt.onl_ior.dto';

export class NewBptOnlIorWidgetDto extends NewBptOnlIorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

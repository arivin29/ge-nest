import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSppirtDto } from './new_bpt.onl_sppirt.dto';

export class NewBptOnlSppirtWidgetDto extends NewBptOnlSppirtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

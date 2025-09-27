import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiulpprtDto } from './new_bpt.onl_ossiulpprt.dto';

export class NewBptOnlOssiulpprtWidgetDto extends NewBptOnlOssiulpprtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

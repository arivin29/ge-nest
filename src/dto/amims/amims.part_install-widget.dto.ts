import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartInstallDto } from './amims.part_install.dto';

export class AmimsPartInstallWidgetDto extends AmimsPartInstallDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

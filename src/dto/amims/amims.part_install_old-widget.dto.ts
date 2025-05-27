import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartInstallOldDto } from './amims.part_install_old.dto';

export class AmimsPartInstallOldWidgetDto extends AmimsPartInstallOldDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

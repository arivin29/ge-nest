import { ApiProperty } from '@nestjs/swagger';
import { AmimsLibUploadDto } from './amims.lib_upload.dto';

export class AmimsLibUploadWidgetDto extends AmimsLibUploadDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

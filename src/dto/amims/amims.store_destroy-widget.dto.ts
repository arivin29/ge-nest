import { ApiProperty } from '@nestjs/swagger';
import { AmimsStoreDestroyDto } from './amims.store_destroy.dto';

export class AmimsStoreDestroyWidgetDto extends AmimsStoreDestroyDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

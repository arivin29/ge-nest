import { ApiProperty } from '@nestjs/swagger';
import { AmimsStoreDestroyDto } from './amims.store_destroy.dto';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsStoreDestroyReportDto extends AmimsStoreDestroyDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}

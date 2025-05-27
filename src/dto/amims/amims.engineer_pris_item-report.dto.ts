import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPrisItemDto } from './amims.engineer_pris_item.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsEngineerPrisItemReportDto extends AmimsEngineerPrisItemDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

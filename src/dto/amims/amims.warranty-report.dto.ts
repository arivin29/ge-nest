import { ApiProperty } from '@nestjs/swagger';
import { AmimsWarrantyDto } from './amims.warranty.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsWarrantyReportDto extends AmimsWarrantyDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

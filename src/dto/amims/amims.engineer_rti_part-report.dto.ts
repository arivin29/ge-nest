import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerRtiPartDto } from './amims.engineer_rti_part.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsEngineerRtiPartReportDto extends AmimsEngineerRtiPartDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerRtiIdentifyDto } from './amims.engineer_rti_identify.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsEngineerRtiIdentifyReportDto extends AmimsEngineerRtiIdentifyDto {
  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}

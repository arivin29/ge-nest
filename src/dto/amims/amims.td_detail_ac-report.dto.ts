import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdDetailAcDto } from './amims.td_detail_ac.dto';
import { AmimsAircraftDto } from './amims.aircraft.dto';

export class AmimsTdDetailAcReportDto extends AmimsTdDetailAcDto {
  @ApiProperty({ type: AmimsAircraftDto })
  aircraft: AmimsAircraftDto;
}

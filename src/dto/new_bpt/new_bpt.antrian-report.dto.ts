import { ApiProperty } from '@nestjs/swagger';
import { NewBptAntrianDto } from './new_bpt.antrian.dto';
import { NewBptSesiDto } from './new_bpt.sesi.dto';

export class NewBptAntrianReportDto extends NewBptAntrianDto {
  @ApiProperty({ type: NewBptSesiDto })
  sesi: NewBptSesiDto;
}

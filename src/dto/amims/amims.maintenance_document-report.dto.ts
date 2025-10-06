import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceDocumentDto } from './amims.maintenance_document.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';

export class AmimsMaintenanceDocumentReportDto extends AmimsMaintenanceDocumentDto {
  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;
}

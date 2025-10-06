import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceDocumentDto } from './amims.maintenance_document.dto';

export class AmimsMaintenanceDocumentWidgetDto extends AmimsMaintenanceDocumentDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramDocumentDto } from './amims.maintenance_program_document.dto';

export class AmimsMaintenanceProgramDocumentWidgetDto extends AmimsMaintenanceProgramDocumentDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

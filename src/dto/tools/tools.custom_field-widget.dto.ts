import { ApiProperty } from '@nestjs/swagger';
import { ToolsCustomFieldDto } from './tools.custom_field.dto';

export class ToolsCustomFieldWidgetDto extends ToolsCustomFieldDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

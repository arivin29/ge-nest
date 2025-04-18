import { ApiProperty } from '@nestjs/swagger';
import { ToolsCustomFieldValueDto } from './tools.custom_field_value.dto';

export class ToolsCustomFieldValueWidgetDto extends ToolsCustomFieldValueDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

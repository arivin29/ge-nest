import { ApiProperty } from '@nestjs/swagger';
import { ToolsCustomFieldGroupDto } from './tools.custom_field_group.dto';

export class ToolsCustomFieldGroupWidgetDto extends ToolsCustomFieldGroupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}

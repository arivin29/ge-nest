import { CustomFieldGroupWidgetController } from './custom_field_group_widget.controller';
import { CustomFieldGroupWidgetService } from './custom_field_group_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomFieldGroupService } from './custom_field_group.service';
import { CustomFieldGroupController } from './custom_field_group.controller';
import { ToolsCustomField, ToolsCustomFieldGroup, ToolsCustomFieldValue } from 'src/entities/tools';
import { CustomFieldGroupReportController } from './custom_field_group_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([ToolsCustomFieldValue, ToolsCustomFieldGroup, ToolsCustomField],'tools')],
  controllers: [CustomFieldGroupController, CustomFieldGroupReportController, CustomFieldGroupWidgetController],
  providers: [CustomFieldGroupService, CustomFieldGroupWidgetService],
})
export class CustomFieldGroupModule {}

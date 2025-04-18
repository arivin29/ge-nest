import { CustomFieldValueWidgetController } from './custom_field_value_widget.controller';
import { CustomFieldValueWidgetService } from './custom_field_value_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomFieldValueService } from './custom_field_value.service';
import { CustomFieldValueController } from './custom_field_value.controller';
import { ToolsCustomField, ToolsCustomFieldGroup, ToolsCustomFieldValue } from 'src/entities/tools';
import { CustomFieldValueReportController } from './custom_field_value_report.controller';
 
@Module({
  imports: [
        TypeOrmModule.forFeature([ToolsCustomFieldValue, ToolsCustomFieldGroup, ToolsCustomField ],'tools')
],
  controllers: [CustomFieldValueController, CustomFieldValueReportController, CustomFieldValueWidgetController],
  providers: [CustomFieldValueService, CustomFieldValueWidgetService],
})
export class CustomFieldValueModule {}

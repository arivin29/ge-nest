import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomFieldService } from './custom_field.service';
import { CustomFieldController } from './custom_field.controller';
import { ToolsCustomField, ToolsCustomFieldGroup, ToolsCustomFieldValue } from 'src/entities/tools';
 
@Module({
  imports: [TypeOrmModule.forFeature([ToolsCustomFieldValue, ToolsCustomFieldGroup, ToolsCustomField],'tools')],
  controllers: [CustomFieldController],
  providers: [CustomFieldService],
})
export class CustomFieldModule {}

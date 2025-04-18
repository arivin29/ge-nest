import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SmartQueryWidget } from 'src/common/helpers/smart_query_widget.helper'; 
import { SmartQueryInputWidget } from 'src/common/helpers/smart-query-input-widget';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class CustomFieldValueWidgetService {
  constructor(
      @InjectDataSource('tools') 
      private readonly dataSource: DataSource
    ) {}

  async findAllWidget(query: SmartQueryInputWidget) {
    const helper = new SmartQueryWidget(this.dataSource, 'custom_field_value', 'custom_field_value');
    const data = await helper.run(query);
    const total = Array.isArray(data)
      ? data.reduce((sum, row) => sum + (row.total ?? 0), 0)
      : 0;
    return { data, total };
  }
}
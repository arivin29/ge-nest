import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SmartQueryWidget } from 'src/common/helpers/smart_query_widget.helper'; 
import { SmartQueryInputWidget } from 'src/common/helpers/smart-query-input-widget';

@Injectable()
export class ContractWidgetService {
  constructor(private readonly dataSource: DataSource) {}

  async findAllWidget(query: SmartQueryInputWidget) {
    const helper = new SmartQueryWidget(this.dataSource, 'contract', 'contract');
    const data = await helper.run(query);
    const total = Array.isArray(data)
      ? data.reduce((sum, row) => sum + (row.total ?? 0), 0)
      : 0;
    return { data, total };
  }
}
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SmartQueryWidget } from 'src/common/helpers/smart_query_widget.helper';
import { SmartQueryInputWidget } from 'src/common/helpers/smart-query-input-widget';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class ContractSiteWidgetService {
    constructor(
        @InjectDataSource('pelanggan')
        private readonly dataSource: DataSource
    ) { }

    async findAllWidget(query: SmartQueryInputWidget) {
        const helper = new SmartQueryWidget(this.dataSource, 'contract_site', 'contract_site');
        const data = await helper.run(query);
        const total = Array.isArray(data)
            ? data.reduce((sum, row) => sum + (row.total ?? 0), 0)
            : 0;
        return { data, total };
    }
}
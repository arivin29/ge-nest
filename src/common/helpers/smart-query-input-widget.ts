export interface SmartQueryInputWidget {
    where?: Record<string, any>;
    joinWhere?: Record<string, any>;
    order?: {
        by: string;
        direction?: 'ASC' | 'DESC' | 'asc' | 'desc';
    };
    select?: {
        type: 'count' | 'sum' | 'avg' | 'min' | 'max';
        field: string;
        alias: string;
    }[];
    groupBy?: string[];
}

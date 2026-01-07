create table erp_amims.maintenance_program_item (
    id_program_item        varchar(36)  not null primary key,
    id_maintenance_program varchar(36)  not null,   -- FK → maintenance_program
    id_maintenance         varchar(36)  null,       -- FK → maintenance (baseline)
    id_maintenance_code    varchar(36)  null,       -- opsional, kalau mau direct ke requirement
    id_mpart               varchar(36)  null,
    hours_to               decimal(10,2) null,
    cycle_to               decimal(10,2) null,
    time_to                decimal(10,2) null,
    time_to_unit           varchar(36)   null,
    sequence_no            int           null,
    is_active              tinyint       default 1,
    note                   text          null
    -- + FK constraint ke maintenance_program / maintenance
);
alter table maintenance_program
    change id_mpart effective_date date null;

alter table maintenance_program
    change id_maintenance_code revision varchar(100) null;

alter table maintenance_program
    add approved_by varchar(100) null after revision;

alter table maintenance_program
    add approved_date date null after approved_by;


UPDATE maintenance SET time_unit = 'years' WHERE time_unit = 'yrs';
UPDATE maintenance SET time_unit = 'months' WHERE time_unit = 'mths';
SELECT time_unit, COUNT(*) as count FROM maintenance GROUP BY time_unit;

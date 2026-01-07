-- ============================================================
-- TABLE: store_threshold
-- Purpose: Mengelola threshold stock untuk setiap part di setiap location
-- ============================================================

CREATE TABLE IF NOT EXISTS `erp_amims`.`store_threshold` (
  `id_store_threshold` VARCHAR(36) NOT NULL COMMENT 'UUID primary key',
  `id_mpart` VARCHAR(36) NOT NULL COMMENT 'Reference ke master part',
  `id_bin` VARCHAR(36) NULL COMMENT 'Reference ke bin/location storage',
  
  -- Threshold Settings
  `min_stock` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Minimum stock level (untuk alert)',
  `max_stock` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Maximum stock level',
  `safety_stock` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Safety stock / buffer stock',
  `reorder_point` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Reorder point - trigger untuk pemesanan',
  `reorder_quantity` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Quantity yang akan dipesan saat reorder',
  
  -- Lead Time
  `lead_time_days` INT DEFAULT 0 COMMENT 'Lead time dalam hari (dari PO sampai GRN)',
  
  -- Additional Info
  `note` TEXT NULL COMMENT 'Catatan tambahan',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT 'Status aktif threshold',
  
  -- Audit Fields
  `created_by` VARCHAR(36) NULL COMMENT 'User yang membuat',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_by` VARCHAR(36) NULL COMMENT 'User yang terakhir update',
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`id_store_threshold`),
  UNIQUE KEY `uk_threshold_part_bin` (`id_mpart`, `id_bin`),
  KEY `idx_mpart` (`id_mpart`),
  KEY `idx_bin` (`id_bin`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Store threshold untuk inventory control';

-- ============================================================
-- INDEXES untuk Performance
-- ============================================================

-- Composite index untuk query common
CREATE INDEX idx_threshold_mpart_active ON erp_amims.store_threshold(id_mpart, is_active);
CREATE INDEX idx_threshold_bin_active ON erp_amims.store_threshold(id_bin, is_active);

-- ============================================================
-- Sample Data (commented)
-- ============================================================

-- Contoh insert threshold untuk demo
/*
INSERT INTO erp_amims.store_threshold (
  id_store_threshold, id_mpart, id_bin,
  min_stock, max_stock, safety_stock, reorder_point, reorder_quantity,
  lead_time_days, is_active
) VALUES (
  UUID(), 'mpart-xxx-xxx', 'bin-xxx-xxx',
  10, 100, 20, 30, 50,
  7, 1
);
*/

-- ============================================================
-- NOTES & CARA PENGGUNAAN
-- ============================================================

/*
STRUKTUR TABLE:
- Simple, hanya 1 tabel store_threshold
- JOIN dengan tabel stock untuk mendapatkan current_stock
- JOIN dengan mpart untuk info part
- JOIN dengan bin untuk info location

FIELD PENTING:
- min_stock: Batas minimum stock (untuk alert critical)
- max_stock: Batas maximum stock (untuk alert overstock)
- safety_stock: Stock cadangan/buffer
- reorder_point: Titik trigger untuk pemesanan
- reorder_quantity: Jumlah yang akan dipesan
- lead_time_days: Waktu tunggu dari order sampai barang datang

CARA PENGGUNAAN:
1. Setup threshold untuk setiap part di setiap location
2. Query dengan JOIN ke stock untuk lihat status real-time:

   SELECT 
     st.*,
     mp.part_number,
     mp.item_name,
     b.bin_code,
     COALESCE(s.in_stock, 0) AS current_stock,
     CASE 
       WHEN COALESCE(s.in_stock, 0) <= 0 THEN 'out_of_stock'
       WHEN COALESCE(s.in_stock, 0) <= st.min_stock THEN 'critical'
       WHEN COALESCE(s.in_stock, 0) <= st.reorder_point THEN 'warning'
       WHEN COALESCE(s.in_stock, 0) >= st.max_stock THEN 'overstock'
       ELSE 'normal'
     END AS status
   FROM erp_amims.store_threshold st
   LEFT JOIN erp_amims.mpart mp ON st.id_mpart = mp.id_mpart
   LEFT JOIN erp_amims.bin b ON st.id_bin = b.id_bin
   LEFT JOIN erp_amims.stock s ON st.id_mpart = s.id_mpart AND st.id_bin = s.id_bin
   WHERE st.is_active = 1;

NEXT STEPS:
1. Execute SQL ini untuk create table
2. Run: npm run ge-dto-entity
3. Run: npm run generator-api -- --fromTable=store_threshold --nama=store_threshold --db=erp_amims --router=amims --out=crud,report
4. Implement business logic untuk alert & auto PR di service
*/

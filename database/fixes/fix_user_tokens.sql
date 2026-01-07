-- Script untuk membersihkan data token lama yang corrupt
-- Karena ada perubahan dari snake_case ke camelCase saat save

-- Backup dulu (opsional)
-- CREATE TABLE user_tokens_backup AS SELECT * FROM erp_acl.user_tokens;

-- Hapus semua token lama
TRUNCATE TABLE erp_acl.user_tokens;

-- Atau hapus hanya yang tidak valid (opsional)
-- DELETE FROM erp_acl.user_tokens WHERE created_at < NOW() - INTERVAL 7 DAY;

-- Cek isi tabel
SELECT * FROM erp_acl.user_tokens;

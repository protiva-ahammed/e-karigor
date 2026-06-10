-- KajKori seed data
-- Runs on every startup, ON CONFLICT DO NOTHING prevents duplicates

-- Service categories
INSERT INTO service_categories
  (name_en, name_bn, slug, is_active, sort_order)
VALUES
  ('Home Cleaning',     'বাড়ি পরিষ্কার',      'home-cleaning',    true, 1),
  ('Construction',      'নির্মাণ ও সংস্কার',   'construction',     true, 2),
  ('Electrical Work',   'বৈদ্যুতিক কাজ',      'electrical',       true, 3),
  ('Plumbing',          'পাইপলাইন মেরামত',     'plumbing',         true, 4),
  ('Painting',          'রং করা',              'painting',         true, 5),
  ('AC Repair',         'এসি মেরামত',          'ac-repair',        true, 6),
  ('Appliance Repair',  'যন্ত্রপাতি মেরামত',   'appliance-repair', true, 7),
  ('Moving',            'মালামাল স্থানান্তর',  'moving',           true, 8),
  ('Security Guard',    'নিরাপত্তা প্রহরী',    'security',         true, 9),
  ('Mason',             'রাজমিস্ত্রি',          'mason',            true, 11),
  ('Tiles Fixing',      'টাইলস মেরামত',        'tiles-fixing',     true, 12),
  ('Carpenter',         'কাঠমিস্ত্রি',          'carpenter',        true, 13)
ON CONFLICT (slug) DO NOTHING;

-- Admin user
-- Password: Admin@1234 (bcrypt hash)
INSERT INTO users
  (email, password, full_name, phone, role, is_active, created_at)
VALUES
  ('admin@egarigorteam.com',
   '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
   'Ekarigor Admin',
   '01994387156',
   'ADMIN',
   true,
   NOW())
ON CONFLICT (email) DO NOTHING;
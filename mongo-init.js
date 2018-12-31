db.auth('admin-user', 'admin-password')

db = db.getSiblingDB('MEANStackDB')

db.createCollection('users')
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161005033131) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comentarios", force: :cascade do |t|
    t.string   "contenido",  default: "", null: false
    t.integer  "letra_id",                null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["letra_id"], name: "index_comentarios_on_letra_id", using: :btree
  end

  create_table "letras", force: :cascade do |t|
    t.string   "titulo",     default: "", null: false
    t.string   "contenido",  default: "", null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.string   "id_externo", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

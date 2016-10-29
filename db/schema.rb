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

ActiveRecord::Schema.define(version: 20161029162210) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "acordes", force: :cascade do |t|
    t.integer "posicion",                default: 0, null: false
    t.integer "secuencia_de_acordes_id",             null: false
    t.index ["secuencia_de_acordes_id"], name: "index_acordes_on_secuencia_de_acordes_id", using: :btree
  end

  create_table "acordes_notas", id: false, force: :cascade do |t|
    t.integer "acorde_id"
    t.integer "nota_id"
    t.index ["acorde_id"], name: "index_acordes_notas_on_acorde_id", using: :btree
    t.index ["nota_id"], name: "index_acordes_notas_on_nota_id", using: :btree
  end

  create_table "canciones", force: :cascade do |t|
    t.integer "usuario_id", null: false
    t.index ["usuario_id"], name: "index_canciones_on_usuario_id", using: :btree
  end

  create_table "comentarios", force: :cascade do |t|
    t.string   "contenido",       default: "", null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "usuario_id",                   null: false
    t.string   "comentable_type"
    t.integer  "comentable_id"
    t.index ["comentable_type", "comentable_id"], name: "index_comentarios_on_comentable_type_and_comentable_id", using: :btree
  end

  create_table "letras", force: :cascade do |t|
    t.string   "titulo",     default: "", null: false
    t.text     "contenido",  default: "", null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.integer  "usuario_id",              null: false
  end

  create_table "notas", force: :cascade do |t|
    t.string "cifrado", null: false
    t.string "nombre",  null: false
  end

  create_table "respuestas", force: :cascade do |t|
    t.string   "contenido",     default: "", null: false
    t.integer  "comentario_id",              null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "usuario_id",                 null: false
    t.index ["comentario_id"], name: "index_respuestas_on_comentario_id", using: :btree
  end

  create_table "secuencias_de_acordes", force: :cascade do |t|
    t.string  "titulo",     default: "", null: false
    t.integer "bpm",                     null: false
    t.integer "usuario_id",              null: false
    t.index ["usuario_id"], name: "index_secuencias_de_acordes_on_usuario_id", using: :btree
  end

  create_table "usuarios", force: :cascade do |t|
    t.string   "id_externo", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "email",      null: false
  end

end

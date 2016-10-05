class ChangeGlobalIdToIdExternoInUsuarios < ActiveRecord::Migration[5.0]
  def change
    rename_column :usuarios, :global_id, :id_externo
  end
end

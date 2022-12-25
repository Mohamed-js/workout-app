class ChangeTracckedMovmentMovementCount < ActiveRecord::Migration[6.1]
  def change
    change_column :tracked_movements, :movement_count, :integer, default: 0
  end
end

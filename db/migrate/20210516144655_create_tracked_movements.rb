class CreateTrackedMovements < ActiveRecord::Migration[6.1]
  def change
    create_table :tracked_movements do |t|
      t.integer :user_id
      t.integer :movement_id
      t.integer :movement_count

      t.timestamps
    end
  end
end

class AddColumnsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :current_weight, :integer, default: 0
    add_column :users, :last_weight, :integer, default: 0
    add_column :users, :height, :integer, default: 0
    add_column :users, :current_right_arm_size, :integer, default: 0
    add_column :users, :last_right_arm_size, :integer, default: 0
    add_column :users, :current_left_arm_size, :integer, default: 0
    add_column :users, :last_left_arm_size, :integer, default: 0
  end
end

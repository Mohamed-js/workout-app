class RemoveArmsFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :current_right_arm_size
    remove_column :users, :current_left_arm_size
    remove_column :users, :last_right_arm_size
    remove_column :users, :last_left_arm_size
  end
end

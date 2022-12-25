class CreateMovements < ActiveRecord::Migration[6.1]
  def change
    create_table :movements do |t|
      t.string :name
      t.string :category
      t.text :image

      t.timestamps
    end
  end
end

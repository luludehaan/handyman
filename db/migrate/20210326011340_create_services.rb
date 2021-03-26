class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :type
      t.text :description
      t.string :price
      t.belongs_to :handy_man, null: false, foreign_key: true

      t.timestamps
    end
  end
end

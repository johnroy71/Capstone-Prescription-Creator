class CreateMedications < ActiveRecord::Migration[7.0]
  def change
    create_table :medications do |t|
      t.string :med_name
      t.string :brand_name
      t.string :condition

      t.timestamps
    end
  end
end

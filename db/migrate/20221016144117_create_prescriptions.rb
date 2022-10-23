class CreatePrescriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :prescriptions do |t|
      t.integer :patient_id
      t.integer :physician_id
      t.integer :medication_id

      t.timestamps
    end
  end
end

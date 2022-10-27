class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :physician_id, :medication_id
  
  belongs_to :patient
  belongs_to :physician
  belongs_to :medication

end

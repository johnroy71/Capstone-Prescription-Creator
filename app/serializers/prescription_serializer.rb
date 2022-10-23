class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :physician_id, :medication_id
  


end

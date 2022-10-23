class PatientSerializer < ActiveModel::Serializer
  attributes :id, :pt_name

  has_many :medications
  has_many :physicians
  
end

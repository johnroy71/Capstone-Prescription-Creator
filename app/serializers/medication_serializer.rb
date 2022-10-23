class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :med_name, :brand_name, :condition

  has_many :physicians
  has_many :patients
end

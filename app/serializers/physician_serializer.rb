class PhysicianSerializer < ActiveModel::Serializer
  attributes :id, :phys_name

  has_many :patients
  
end

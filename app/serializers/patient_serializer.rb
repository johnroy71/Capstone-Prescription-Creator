class PatientSerializer < ActiveModel::Serializer
  attributes :id, :pt_name

  has_many :medications
  has_many :unique_physicians
  
  
  def unique_physicians

    self.object.physicians.uniq
    
      
  end

  
end

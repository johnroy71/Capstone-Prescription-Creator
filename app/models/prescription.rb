class Prescription < ApplicationRecord

    belongs_to :patient
    belongs_to :medication
    belongs_to :physician

end

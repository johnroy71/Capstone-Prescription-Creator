class Patient < ApplicationRecord

    has_many :prescriptions
    has_many :physicians, through: :prescriptions
    has_many :medications, through: :prescriptions
    

end

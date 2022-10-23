class User < ApplicationRecord

    has_many :patients
    has_many :physicians
    has_many :medications
    has_many :prescriptions
    has_secure_password

    validates :username, presence: true, uniqueness: true

end

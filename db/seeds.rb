# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding medications...."

med1 = Medication.create(med_name: "lisinopril", brand_name: "Zestril", condition: "hypertension")
med2 = Medication.create(med_name: "metformin", brand_name: "Glucophage", condition: "diabetes")
med3 = Medication.create(med_name: "citalopram", brand_name: "Celexa", condition: "depression")
med4 = Medication.create(med_name: "levothyroxine", brand_name: "Synthroid", condition: "hypothyroidism")
med5 = Medication.create(med_name: "azithromycin", brand_name: "Zithromax", condition: "infection")

puts "Medications complete...."
puts "Seeding patients...."

pt1 = Patient.create(pt_name: "Andrew")
pt2 = Patient.create(pt_name: "Sarah")
pt3 = Patient.create(pt_name: "Martin")
pt4 = Patient.create(pt_name: "Michael")
pt5 = Patient.create(pt_name: "Lisa")

puts "Patients complete...."
puts "Seeding physicians...."

phys1 = Physician.create(phys_name: "Jack")
phys2 = Physician.create(phys_name: "Beddel")
phys3 = Physician.create(phys_name: "DeBore")
phys4 = Physician.create(phys_name: "Bardon")
phys5 = Physician.create(phys_name: "McKindry")

puts "Physicians complete...."
User.create(username: "john", password: "john")
puts "Seeding prescriptions...."

Prescription.create(patient_id: 1, physician_id: 1, medication_id: 1)
Prescription.create(patient_id: 2, physician_id: 2, medication_id: 2)
Prescription.create(patient_id: 3, physician_id: 3, medication_id: 3)
Prescription.create(patient_id: 4, physician_id: 4, medication_id: 4)
Prescription.create(patient_id: 5, physician_id: 5, medication_id: 5)


puts "Prescriptions complete...."
puts "Seeding complete...."
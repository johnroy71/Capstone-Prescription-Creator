class MedicationsController < ApplicationController

    def index
        render json: Medication.all, status: :ok
    end

    def show
        medication = Medication.find(params[:id])
        render json: medication, status: :ok
    end

    def create
        medication = Medication.create!(med_params)
        render json: medication, status: :created
    end

    def destroy
        medication = Medication.find(params[:id])
        medication.destroy!
        render json: {}, status: :ok
    end

    private

    def med_params
        params.permit(:id, :med_name, :brand_name, :condition)
    end


end

class PrescriptionsController < ApplicationController

    def index
        render json: Prescription.all, status: :ok
    end

    def show
        prescription = Prescription.find(params[:id])
        render json: prescription, status: :ok
    end

    def create
        prescription = Prescription.create!(prescription_params)
        render json: prescription, status: :created
    end

    def destroy
        prescription = Prescription.find(params[:id])
        prescription.destroy!
        render json: {}, status: :ok
    end

    # def update
    #     prescription = Prescription.find(params[:id])
    #     prescription.update!(prescription_params)
    #     render json: prescription, status: :ok
    # end

    private

    def prescription_params
        params.permit(:id, :patient_id, :physician_id, :medication_id)
    end


end

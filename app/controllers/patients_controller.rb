class PatientsController < ApplicationController

    def index
        render json: Patient.all, status: :ok
    end

    def show
        patient = Patient.find(params[:id])
        render json: patient, status: :ok
    end

    def create
        patient = Patient.create!(pt_params)
        render json: patient, status: :created
    end

    def destroy
        patient = Patient.find(params[:id])
        patient.destroy!
        render json: {}, status: :ok
    end

    def update
        patient = Patient.find(params[:id])
        patient.update!(pt_params)
        render json: event, status: :ok
    end

    private

    def pt_params
        params.permit(:id, :pt_name)
    end


end

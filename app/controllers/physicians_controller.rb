class PhysiciansController < ApplicationController

    def index
        render json: Physician.all, status: :ok
    end

    def show
        physician = Physician.find(params[:id])
        render json: physician, status: :ok
    end

    def create
        physician = Physician.create!(phys_params)
        render json: physician, status: :created
    end

    def destroy
        physician = Physician.find(params[:id])
        physician.destroy!
        render json: {}, status: :ok
    end

    def update
        physician = Physician.find(params[:id])
        physician.update!(phys_params)
        render json: event, status: :ok
    end

    private

    def phys_params
        params.permit(:id, :phys_name)
    end



end

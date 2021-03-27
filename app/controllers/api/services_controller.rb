class Api::ServicesController < ApplicationController
  before_action :set_handy_man

  def index
    render json: @handy_man.services
  end

  def create
    @service = @handy_man.services.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf
=======
>>>>>>> fix conflicts
  def update
    @service = @handy_man.services.find(params[:id])
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf
=======
>>>>>>> fix conflicts
  def destroy
    @handy_man.services.find(params[:id]).destroy
    render json: { message: 'service deleted' }
  end
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf
=======
>>>>>>> fix conflicts
  private
    def service_params
      params.require(:service).permit(:title)
    end
<<<<<<< HEAD
    
    def set_handy_man
      @handy_man = handy_man.find(params[:handy_man_id])
    end
end
=======
    def set_handy_man 
      @handy_man = handy_man.find(params[:handy_man_id])
    end
end
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf

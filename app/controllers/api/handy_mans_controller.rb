class Api::HandyMansController < ApplicationController
  def index
    render json: Handy_man.all
  end

  def show
    @handy_man = Handy_man.find(params[:id])
    render json: @handy_man
  end
  def create
    @handy_man = Handy_man.new(handy_man_params)
    if @handy_man.save
      render json: @handy_man
    else
      render json: { errors: @handy_man.errors }, status: :unprocessable_entity
    end
  end

  def update 
    @handy_man = Handy_man.find(params[:id])
    if @handy_man.update(handy_man_params)
      render json: @handy_man
    else
      render json: { errors: @handy_man.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Handy_man.find(params[:id]).destroy
    @handy_man.destroy
    render json: {message: 'handy_man deleted'}
  end

  





end

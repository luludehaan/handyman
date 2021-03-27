class Api::CommentsController < ApplicationController
  before_action :set_service
<<<<<<< HEAD

  def index
    render json: @service.comments
  end

=======
  def index
    render json: @service.comments
  end
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf
  def create
    @comment = @service.comments.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end
<<<<<<< HEAD

=======
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf
  def update
    @comment = @service.comments.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end
<<<<<<< HEAD

=======
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf
  def destroy
    @service.comments.find(params[:id]).destroy
    render json: { message: 'comment is deleted' }
  end
<<<<<<< HEAD

=======
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf
  private
    def comment_params
      params.require(:comment).permit(:name, :price)
    end
<<<<<<< HEAD
    
=======
>>>>>>> c083ea3da582e92ba609c76dd904d8a2440025bf
    def set_service
      @service = service.find(params[:service_id])
    end
end
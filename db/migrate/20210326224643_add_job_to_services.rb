class AddJobToServices < ActiveRecord::Migration[6.1]
  def change
    add_column :services, :job, :string
  end
end

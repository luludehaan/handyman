class Service < ApplicationRecord
  belongs_to :handy_man
  has_many :comments
end

class Movement < ApplicationRecord
  has_many :tracked_movements
  has_many :users, through: :tracked_movements

  validates :image, presence: true
  validates :category, presence: true, length: { in: 2..20 }
  validates :name, presence: true, length: { in: 2..20 }, uniqueness: true
end

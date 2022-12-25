class User < ApplicationRecord
  acts_as_token_authenticatable
  has_secure_password

  has_many :tracked_movements
  has_many :ordered_tracked_movements, -> { order('created_at DESC') }, class_name: 'TrackedMovement'
  has_many :movements, through: :tracked_movements

  validates :name, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 3 }
  validates :password_digest, presence: true

  def top_score(id)
    tracked_movements.where(movement_id: id).top_score
  end
end

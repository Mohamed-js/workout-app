class TrackedMovement < ApplicationRecord
  belongs_to :user, class_name: 'User'
  belongs_to :movement, class_name: 'Movement'

  scope :top_score, -> { order('movement_count DESC').first }

  validates :user_id, presence: true
  validates :movement_id, presence: true
end

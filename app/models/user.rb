class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :categories, through: :posts
    has_secure_password

    validates :username, uniqueness: true, presence: true

end

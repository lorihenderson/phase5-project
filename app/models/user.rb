class User < ApplicationRecord
    has_many :posts
    has_many :favorites
    has_many :categories, through: :posts
    has_secure_password

    validates :username, uniqueness: true, presence: true

end

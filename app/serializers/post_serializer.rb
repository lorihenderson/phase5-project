class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :category_id, :fact
end

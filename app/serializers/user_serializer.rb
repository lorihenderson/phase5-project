class UserSerializer < ActiveModel::Serializer
  attributes :id, :f_name, :bio, :username
end

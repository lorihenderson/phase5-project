class UserSerializer < ActiveModel::Serializer
  attributes :id, :f_name, :l_name, :bio, :username
end

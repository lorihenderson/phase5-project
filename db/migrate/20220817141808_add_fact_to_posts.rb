class AddFactToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :fact, :string
  end
end

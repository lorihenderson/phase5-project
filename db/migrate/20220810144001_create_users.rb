class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :f_name
      t.string :l_name
      t.string :bio
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
